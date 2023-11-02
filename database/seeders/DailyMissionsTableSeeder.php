<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DailyMissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('daily_missions')->insert([
            ['name' => 'フィードバック投稿', 'description' => 'フィードバックを2回投稿しよう！', 'target_count' => 2],
            ['name' => '課題投稿', 'description' => '課題を2回投稿しよう！', 'target_count' => 2],
            // 他のデイリーミッションも同様に追加
        ]);
    }
}
