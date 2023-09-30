<?php

namespace App\Listeners;

use App\Models\User_skill;
use App\Events\FeedbackCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class AddExperienceForFeedback
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
        // dd($event);
        $feedback = $event->feedback;
        $user = $feedback->user; // ユーザー情報の取得
        $issue = $feedback->issue; // Issue情報の取得

        $userId = $user->id;
        $skillId = $issue->tag_id;
        // dd($skillId);

        $userSkill = User_Skill::firstOrCreate([
            'user_id' => $userId,
            'skill_id' => $skillId,
        ]);

        // 経験値の付与処理
        $experiencePoints = 15; // 例: 15ポイントを付与
        $userSkill->increment('experience', $experiencePoints);
    }
}
