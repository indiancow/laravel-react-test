<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Skill;

class SkillsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $skills = [
            ['name' => '説明', 'description' => '端的に説明できているか。'],
            ['name' => '関係構築', 'description' => '信頼関係を築けているか。'],
            ['name' => '提案', 'description' => '企業の課題に合わせた提案ができているか。'],
            ['name' => '期待値調整', 'description' => '期待値を上げすぎず、下げすぎないバランス'],
            ['name' => 'ヒアリング', 'description' => '顧客の実現したいことを引き出せているか。'],
            ['name' => 'クロージング', 'description' => '企業の課題に合わせた提案ができているか。'],
            ['name' => 'Giver', 'description' => '学んだことの共有を積極的に取り組んでいるか。'],
            ['name' => '探求者', 'description' => '現状に満足せず、課題を見つけ続けているか。'],
            // 他のスキルも同様に追加
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}
