<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RewardsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rewards')->insert([
            ['skill_id' => 8, 'experience_points' => 10],
            ['skill_id' => 8, 'experience_points' => 50],
            // 他の報酬も同様に追加
        ]);
    }
}
