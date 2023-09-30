<?php

namespace App\Listeners;

use App\Events\IssueCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\User_skill;
use App\Models\Issue;

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
        // イベントからユーザーIDと課題IDを取得
        // dd($event);
        $userId = $event->userId;
        $issueId = $event->issueId;
        // dd($issueId);
        // 課題から関連するskill_idを取得
        // ※ ここでは、Issueモデルが存在し、issueIdからskill_idが取得できる前提です。
        $skillId = Issue::find($issueId)->tag_id;
        
        // 対象のユーザースキルを検索、もしくは新規作成
        $userSkill = User_Skill::firstOrCreate([
            'user_id' => $userId,
            'skill_id' => $skillId,
        ]);

        // 経験値の付与処理
        // ※ ここでは、経験値の量を$experiencePointsとしていますが、
        // 実際の量や計算ロジックによって適切に変更してください。
        $experiencePoints = 10; // 例: 10ポイントを付与
        $userSkill->increment('experience', $experiencePoints);
    }
}