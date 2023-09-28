<?php

namespace Database\Seeders;

use App\Models\Level;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Character;

class LevelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $characters = Character::all();

        foreach ($characters as $character) {
            for ($i = 1; $i <= 100; $i++) {
                $required_experience = $i * 10; // または他の計算方法
                Level::create([
                    'character_id' => $character->id,
                    'level' => $i,
                    'required_experience' => $required_experience,
                ]);
            }
        }
    }
}
