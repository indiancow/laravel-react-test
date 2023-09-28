<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Character;
use App\Models\Evolution;

class EvolutionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $characters = Character::all();
        
        // Iterate over the characters.
        for ($i = 0; $i < count($characters) - 2; $i += 3) {
            // For each character, define two evolution stages.
            for ($j = 0; $j < 2; $j++) {
                // Create an evolution record with appropriate pre_evolution, post_evolution, and trigger_level values.
                Evolution::create([
                    'pre_evolution_character_id' => $characters[$i + $j]->id,
                    'post_evolution_character_id' => $characters[$i + $j + 1]->id,
                    'evolution_trigger_level' => ($j + 1) * 20, // Example trigger level; adjust as needed.
                ]);
            }
        }
    }
}
