<?php

namespace App\Listeners;

use App\Events\FeedbackCreated;
use App\Events\UserLevelUp;
use App\Models\DailyMission;
use App\Models\Skill;
use App\Models\User_skill;
use App\Models\UserDailyMission;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class IncrementDailyMissionForFeedback
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
    public function handle(FeedbackCreated $event): void
    {
        $userId = $event->userId;
        $today = Carbon::now()->toDateString();
        $dailyMissionId = 1;

        // ユーザーのデイリーミッションのレコードを取得または作成
        $dailyMission = UserDailyMission::firstOrCreate([
            'user_id' => $userId,
            'date' => $today,
            'daily_mission_id' => $dailyMissionId,
        ]);

        // current_countを1だけインクリメント
        $dailyMission->increment('current_count');

        // current_count
        $currentCount = $dailyMission->current_count;
        // dd($currentCount);

        // target_count
        $issueDailyMission = DailyMission::find($dailyMissionId);
        $targetCount = $issueDailyMission->target_count;
        // dd($targetCount);
        $stoicSkillId = Skill::where('name', 'ストイック')->first()->id;

        if($currentCount >= $targetCount){
            $userSkill = User_skill::firstOrCreate([
                'user_id' => $userId,
                'skill_id' => $stoicSkillId,
            ]);
            // Log::debug($userSkill);
    
            $experiencePoints = 10;
            $userSkill->increment('experience', $experiencePoints);
            event(new UserLevelUp($userSkill));
        }
    }
}
