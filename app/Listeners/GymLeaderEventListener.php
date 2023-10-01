<?php

namespace App\Listeners;

use App\Models\GymLeader;
use App\Events\GymLeaderEvent;
use App\Models\Badge;
use App\Models\User_skill;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class GymLeaderEventListener
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
    public function handle(GymLeaderEvent $event): void
    {
        // ユーザースキル取得
    $userSkill = $event->userSkill;
        
    // ユーザースキルのレベル取得
    $level = $userSkill->level;
        
    // レベル21以降のトリガーレベル
    $advancedTriggerLevel = 20;
        
    $averageLevel = User_Skill::avg('level');
    // dd($averageLevel);
        
        // GymLeader の required_level が平均レベルを超えたら発火
        // 全員のユーザースキルではなく、個人に変わる可能性あり。
        $gymLeader = GymLeader::where('required_level', '>=', $averageLevel)->orderBy('required_level', 'asc')->first();
        
        if($gymLeader){
            $badge = $gymLeader->badge; // バッジリレーションを利用して紐づくバッジを取得
            // dd($badge);
            echo "ジムリーダー名: {$gymLeader->name}\n";
            echo "ジムリーダー詳細: {$gymLeader->description}\n";
            echo "バッジ名: {$badge->name}\n"; // リレーションを利用してバッジの名前を取得
            echo "バッジ詳細: {$badge->description}\n"; // リレーションを利用してバッジの詳細を取得
        }
        // // ユーザースキル取得
        // $userSkill = $event->userSkill;
        
        // // ユーザースキルのレベル取得
        // $level = $userSkill->level;
        
        // // レベル21以降のトリガーレベル
        // $advancedTriggerLevel = 20;
        
        // // レベルが10の倍数か、21以上で20の倍数の場合に実行
        // if ($level % 1 == 0 || ($level >= 21 && $level % $advancedTriggerLevel == 0)) {
        //     dd('GymLeader!');
        // }
    }
}
