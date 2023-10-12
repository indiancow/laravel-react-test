<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\GymLeader;
use App\Models\Skill;

class GymLeaderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // スキルの名前とIDの配列を取得
        $skills = Skill::whereIn('name', [
            '説明', '提案', '期待値調整', '関係構築', 'ヒアリング', 'クロージング'
        ])->pluck('id', 'name');

        // ジムリーダーのデータを作成
        $gymLeadersData = [];
        $leaderNames = [
            '説明' => ['説明おやじ', '説明紳士', '説明マスター'],
            '提案' => ['提案の新米', '提案プロ', '提案の魔術師'],
            '期待値調整' => ['期待値の見習い', '期待値の調整師', '期待値の指揮者'],
            '関係構築' => ['関係の構築者', '関係のアーティスト', '関係の巧匠'],
            'ヒアリング' => ['ヒアリング初心者', 'ヒアリングエキスパート', 'ヒアリングの達人'],
            'クロージング' => ['クロージング学生', 'クロージングの先生', 'クロージングの神']
        ];

        $badgeIdCounter = 1;

        foreach ($leaderNames as $skillName => $names) {
            foreach ($names as $level => $name) {
                $gymLeadersData[] = [
                    'name' => $name,
                    'description' => $skillName . 'スキルのジムリーダー。レベル' . ($level + 1) . 'の課題に挑戦しよう！',
                    'skill_id' => $skills[$skillName],
                    'badge_id' => $badgeIdCounter++, // 各ジムリーダーに異なるバッジを割り当て
                    'required_level' => $level + 1,
                ];
            }
        }

        // ジムリーダーのデータをデータベースに挿入
        foreach ($gymLeadersData as $data) {
            GymLeader::create($data);
        }
    }
}
