<?php

namespace App\Listeners;

use App\Events\GymLeaderEvent;
use App\Events\UserLevelUp;
use App\Models\Level;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdateUserLevel
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
    public function handle(UserLevelUp $event): void
    {
        $userSkill = $event->userSkill;
        $currentLevel = $userSkill->level;
        $currentExperience = $userSkill->experience;

        $nextLevelInfo = Level::where('level', '>', $currentLevel)
            ->orderBy('level', 'asc')
            ->first();

        if ($nextLevelInfo && $currentExperience >= $nextLevelInfo->experience_required) {
            $userSkill->level = $nextLevelInfo->level;
            $userSkill->experience = $currentExperience - $nextLevelInfo->experience_required;
            $userSkill->save();
        }
        event(new GymLeaderEvent($userSkill));
    }
}
