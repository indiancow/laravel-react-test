<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
                $user->skills()->attach($skill->id, [
                    'level' => 1,
                    'experience' => 0,
                ]);
            }
        }
    }
}
