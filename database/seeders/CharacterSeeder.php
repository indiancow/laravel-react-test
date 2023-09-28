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
        $characters = [
            ['name' => '説明マン', 'skill_id' => 1, 'image_path' => 'xxx'],
            ['name' => '提案ニキ', 'skill_id' => 2],
            ['name' => '期待値調整ボーイ', 'skill_id' => 3],
            ['name' => '関係構築ウーマン', 'skill_id' => 4],
            ['name' => 'ヒアリングネキ', 'skill_id' => 5],
            ['name' => 'クロージングガール', 'skill_id' => 6],
            ['name' => 'Giverじぃ', 'skill_id' => 7],
        ];

        foreach ($characters as $character) {
            Character::create($character);
        }
    }
}
