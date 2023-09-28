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
            ['name' => '説明マン2', 'skill_id' => 1, 'image_path' => 'xxx2'],
            ['name' => '説明マンMAX', 'skill_id' => 1, 'image_path' => 'xxx3'],

            ['name' => '提案ニキ', 'skill_id' => 2, 'image_path' => 'yyy'],
            ['name' => '提案ニキ2', 'skill_id' => 2, 'image_path' => 'yyy2'],
            ['name' => '提案ニキMAX', 'skill_id' => 2, 'image_path' => 'yyy3'],

            ['name' => '期待値調整ボーイ', 'skill_id' => 3, 'image_path' => 'zzz'],
            ['name' => '期待値調整ボーイ2', 'skill_id' => 3, 'image_path' => 'zzz2'],
            ['name' => '期待値調整ボーイMAX', 'skill_id' => 3, 'image_path' => 'zzz3'],

            ['name' => '関係構築ウーマン', 'skill_id' => 4, 'image_path' => 'aaa'],
            ['name' => '関係構築ウーマン2', 'skill_id' => 4, 'image_path' => 'aaa2'],
            ['name' => '関係構築ウーマンMAX', 'skill_id' => 4, 'image_path' => 'aaa3'],

            ['name' => 'ヒアリングネキ', 'skill_id' => 5, 'image_path' => 'bbb'],
            ['name' => 'ヒアリングネキ2', 'skill_id' => 5, 'image_path' => 'bbb2'],
            ['name' => 'ヒアリングネキMAX', 'skill_id' => 5, 'image_path' => 'bbb3'],

            ['name' => 'クロージングガール', 'skill_id' => 6, 'image_path' => 'ccc'],
            ['name' => 'クロージングガール2', 'skill_id' => 6, 'image_path' => 'ccc2'],
            ['name' => 'クロージングガールMAX', 'skill_id' => 6, 'image_path' => 'ccc3'],

            ['name' => 'Giverじぃ', 'skill_id' => 7, 'image_path' => 'ddd'],
            ['name' => 'Giverじぃ2', 'skill_id' => 7, 'image_path' => 'ddd2'],
            ['name' => 'GiverじぃMAX', 'skill_id' => 7, 'image_path' => 'ddd3'],
        ];

        foreach ($characters as $character) {
            Character::create($character);
        }
    }
}
