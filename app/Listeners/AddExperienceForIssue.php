<?php

namespace App\Listeners;

use App\Events\IssueCreated;
use App\Events\UserLevelUp;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\User_skill;
use App\Models\Issue;
use App\Models\Skill;

class AddExperienceForIssue
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
    public function handle(IssueCreated $event): void
    {
        $userId = $event->userId;
        $issueId = $event->issueId;

        // 探求者スキルのIDを取得（ここではスキル名が'探求者'であると仮定しています）
        $explorerSkillId = Skill::where('name', '探求者')->first()->id;

        $userSkill = User_Skill::firstOrCreate([
            'user_id' => $userId,
            'skill_id' => $explorerSkillId,
        ]);

        $experiencePoints = 10;
        $userSkill->increment('experience', $experiencePoints);

        event(new UserLevelUp($userSkill));
        

    }
}
