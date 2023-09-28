<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Badge;

class BadgeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $badges = [
            [
                'name' => 'チャンピオン',
                'description' => '全てのジムリーダーを倒した。',
                'image_path' => 'images/badges/champion.png'
            ],
            [
                'name' => 'ファーストペンギン',
                'description' => '課題の投稿数100個を達成する。',
                'image_path' => 'images/badges/first_penguin.png'
            ],
            [
                'name' => 'スピードマスター',
                'description' => '課題への最初のフィードバックを10回行う。',
                'image_path' => 'images/badges/speed_master.png'
            ],
            [
                'name' => 'Giver of God',
                'description' => 'Giverレベルが90以上',
                'image_path' => 'images/badges/giver_of_god.png'
            ],
            [
                'name' => 'ヒアリングモンスター',
                'description' => 'ヒアリングレベルが80以上',
                'image_path' => 'images/badges/hearing_monster.png'
            ],
        ];
        
        foreach($badges as $badge) {
            Badge::create($badge);
        }
    }
}
