<?php

namespace Database\Seeders;


use App\Models\GymLeader;
use App\Models\Badge;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GymLeaderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $badgeIds = Badge::pluck('id'); // すべてのバッジIDを取得
        $gymLeaders = [
            [
                'name' => '火炎のヒカリ',
                'description' => '火のポケモンを使うジムリーダー。情熱的で熱いバトルを展開する。',
                'badge_id' => $badgeIds->random(), // ランダムなバッジIDを設定
            ],
            [
                'name' => '海流のサラ',
                'description' => '水のポケモンを使うジムリーダー。冷静沈着で流れるようなバトルを得意とする。',
                'badge_id' => $badgeIds->random(),
            ],
            [
                'name' => '大地のゴロウ',
                'description' => '地面のポケモンを使うジムリーダー。堅実で揺るがないバトルスタイル。',
                'badge_id' => $badgeIds->random(),
            ],
            [
                'name' => '雷光のリン',
                'description' => '電気のポケモンを使うジムリーダー。スピーディで瞬発力に富んだバトルをする。',
                'badge_id' => $badgeIds->random(),
            ],
            [
                'name' => '天空のカナ',
                'description' => '飛行のポケモンを使うジムリーダー。高度な戦術で相手を翻弄する。',
                'badge_id' => $badgeIds->random(),
            ],
            [
                'name' => '凍結のユキオ',
                'description' => '氷のポケモンを使うジムリーダー。冷徹な戦略で相手を凍らせる。',
                'badge_id' => $badgeIds->random(),
            ],
            [
                'name' => '自然のミドリ',
                'description' => '草のポケモンを使うジムリーダー。自然の力で相手を包み込む。',
                'badge_id' => $badgeIds->random(),
            ],
        ];

        foreach ($gymLeaders as $gymLeader) {
            GymLeader::create($gymLeader);
        }
    }
}
