<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Skill;

class UserSkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $skills = Skill::all();

        foreach ($users as $user) {
            foreach ($skills as $skill) {
                // Default values
                $level = 1;
                $experience = 0;

                // Override for specific user ids
                if ($user->id === 2) {
                    $level = 40;
                } elseif ($user->id === 3) {
                    $level = 80;
                }

                $user->skills()->attach($skill->id, [
                    'level' => $level,
                    'experience' => $experience,
                ]);
            }
        }
    }
}
