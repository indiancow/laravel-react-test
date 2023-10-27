<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reward extends Model
{
    use HasFactory;

    public function dailyMissions()
    {
        return $this->hasMany(DailyMission::class);
    }
}
