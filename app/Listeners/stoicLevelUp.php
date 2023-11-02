<?php

namespace App\Listeners;

use App\Events\DailyMissionCompleted;
use App\Events\UserLevelUp;
use App\Models\DailyMission;
use App\Models\Skill;
use App\Models\User_skill;
use App\Models\UserDailyMission;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class stoicLevelUp
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(DailyMissionCompleted $event): void
    {
        $userId = $event->userId;
        $dailyMissionId = $event->dailyMissionId;
        $userDailyMissions = UserDailyMission::where('user_id', $userId)->get();

        Log::debug($userId);
        Log::debug($dailyMissionId);
        Log::debug($userDailyMissions);
        
        // すべてのデイリーミッションが達成されているか確認
        $allMissionsCompleted = $userDailyMissions->every(function ($userDailyMission) {
            $dailyMission = DailyMission::find($userDailyMission->daily_mission_id);
            return $userDailyMission->current_count == $dailyMission->target_count;
        });

        if ($allMissionsCompleted) {
            $stoicSkillId = Skill::where('name', 'ストイック')->first()->id;
            $userSkill = User_skill::firstOrCreate([
                'user_id' => $userId,
                'skill_id' => $stoicSkillId,
            ]);
            
            $experiencePoints = 10;
            $userSkill->increment('experience', $experiencePoints);
            
            event(new UserLevelUp($userSkill));
        }
    }
}
