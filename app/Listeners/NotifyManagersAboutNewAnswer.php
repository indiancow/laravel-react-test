<?php

namespace App\Listeners;

use App\Events\GymLeaderChallenged;
use App\Models\GymLeaderQuestion;
use App\Models\User;
use App\Models\UserGymLeader;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class NotifyManagersAboutNewAnswer
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
    public function handle(GymLeaderChallenged $event): void
    {
        foreach ($event->user_answers as $answer) {
            Log::debug($answer);
            $question = GymLeaderQuestion::find($answer->gym_leader_question_id);
            $gymLeaderId = $question->gym_leader_id;
            // 既存のデータを検索
            $existingRecord = UserGymLeader::where('user_id', $answer->user_id)
                                            ->where('gym_leader_id', $gymLeaderId)// この部分は、適切なジムリーダーのIDを取得するように変更してください。
                                            ->first();

            if ($existingRecord) {
                // データが既に存在する場合、attempt_countを+1する
                $existingRecord->increment('attempt_count');
            } else {
                // 新しいレコードを作成する
                UserGymLeader::create([
                    'user_id' => $answer->user_id,
                    'gym_leader_id' => $gymLeaderId, // この部分は、適切なジムリーダーのIDを取得するように変更してください。
                    'status' => 'pending', // この値は適切に設定してください
                    'manager_approval' => 0,
                    'attempt_count' => 1,
                    'success_at' => null
                ]);
            }
            
        }

        Log::debug($event->user_answers);
    }
}
