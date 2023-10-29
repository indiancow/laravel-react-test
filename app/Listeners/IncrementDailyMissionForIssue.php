<?php

namespace App\Listeners;

use App\Events\IssueCreated;
use App\Models\UserDailyMission;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class IncrementDailyMissionForIssue
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
        $today = Carbon::now()->toDateString();
        $dailyMissionId = 2;

        // ユーザーのデイリーミッションのレコードを取得または作成
        $dailyMission = UserDailyMission::firstOrCreate([
            'user_id' => $userId,
            'date' => $today,
            'daily_mission_id' => $dailyMissionId,
        ]);

        // current_countを1だけインクリメント
        $dailyMission->increment('current_count');
    }
}
