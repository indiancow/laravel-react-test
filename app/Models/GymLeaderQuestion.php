<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GymLeaderQuestion extends Model
{
    use HasFactory;

    public function gymLeader()
    {
        return $this->belongsTo(GymLeader::class);
    }
}
