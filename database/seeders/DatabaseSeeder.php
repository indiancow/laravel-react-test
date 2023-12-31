<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\DailyMission;
use App\Models\GymLeader;
use Illuminate\Database\Seeder;
use Symfony\Component\Console\Question\Question;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        $this->call(SkillsTableSeeder::class);
        $this->call(CharacterSeeder::class);
        $this->call(TagsSeeder::class);
        $this->call(LevelsSeeder::class);
        $this->call(BadgeSeeder::class);
        $this->call(EvolutionSeeder::class);
        $this->call(GymLeaderSeeder::class);
        $this->call(UsersSeeder::class);
        $this->call(UserSkillSeeder::class);
        $this->call(QuestionSeeder::class);
        $this->call(RewardsTableSeeder::class);
        $this->call(DailyMissionsTableSeeder::class);

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
