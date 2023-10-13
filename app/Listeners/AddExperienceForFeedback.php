<?php

namespace App\Listeners;

use App\Models\User_skill;
use App\Events\FeedbackCreated;
use App\Events\UserLevelUp;
use App\Models\Skill;
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
        // $event->feedbackにはフィードバックのデータが含まれています。
        $feedback = $event->feedback;
        $userId = $feedback['user_id']; // フィードバックを作成したユーザーのID
        
        // "Giver"スキルのIDを取得します。
        // これは一度だけデータベースを調べ、その後はハードコードするか、configなどで管理するのが良いでしょう。
        $giverSkillId = Skill::where('name', 'Giver')->first()->id;

        // ユーザーの"Giver"スキルを取得または作成します。
        $userSkill = User_Skill::firstOrCreate([
            'user_id' => $userId,
            'skill_id' => $giverSkillId,
        ]);

        // 経験値の付与処理
        $experiencePoints = 15; // 例: 15ポイントを付与
        $userSkill->increment('experience', $experiencePoints);
        event(new UserLevelUp($userSkill));
    }
}
