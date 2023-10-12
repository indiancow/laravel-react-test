<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
Use App\Models\Tag;

class TagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            ['name' => '説明'],
            ['name' => '提案'],
            ['name' => '期待値調整'],
            ['name' => '関係構築'],
            ['name' => 'ヒアリング'],
            ['name' => 'クロージング'],
            // 他のスキルも同様に追加
        ];

        foreach ($tags as $tag) {
            Tag::create($tag);
        }
    }
}
