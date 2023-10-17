<?php

namespace Database\Seeders;

use App\Models\Character;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CharacterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $characters =[
            ['name' => 'ピヨピヨビジネスマン', 'description' => 'やる気に溢れた新人セールス。可能性に満ち溢れている。どう伸びるかは君次第！', 'subtitle' => 'チャンスは無限大！', 'image_path' => 'business_boy.png'],
            ['name' => 'ホープフルハンター', 'description' => 'ピヨピヨビジネスマンが経験を積み、ホープフルハンターに進化！新しいクライアントを見つけ出す勘は、まるで宝探しの冒険者。目には、新しいチャンスがいつもキラキラと輝いている。', 'subtitle' => 'チャンスを追う冒険の星', 'image_path' => 'business_boy_ver2.png'],
            ['name' => 'ディールマスター', 'description' => 'ホープフルハンターがさらにスキルを磨き、圧倒的な実績でディールマスターへと進化！すべてのパートナーにとって最高のWin-Winをもたらす。そのスマイルは、誰もが信頼する証。', 'subtitle' => '笑顔で結ぶ最強のパートナーシップ', 'image_path' => 'business_boy_ver3.png']
        ];
        

        foreach ($characters as $character) {
            Character::create($character);
        }
    }
}
