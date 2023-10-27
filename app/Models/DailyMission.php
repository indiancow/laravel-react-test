<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyMission extends Model
{
    use HasFactory;

    public function reward()
    {
        return $this->belongsTo(Reward::class);
    }

    public function userDailyMissions()
    {
        return $this->hasMany(UserDailyMission::class);
    }

    public function dailyMissionHistories()
    {
        return $this->hasMany(DailyMissionHistory::class);
    }
    
}
