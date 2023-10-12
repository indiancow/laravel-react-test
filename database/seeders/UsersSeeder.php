<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (range(1, 30) as $index) {
            User::create([
                'name' => 'test' . $index,
                'email' => 'test' . $index . '@gmail.com',
                'password' => 'test' . $index . 'test' . $index,
                'is_manager' => $index % 2 === 0, // 偶数のインデックスでtrue、奇数でfalse
            ]);
        }
    }
}
