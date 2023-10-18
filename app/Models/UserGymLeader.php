<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserGymLeader extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'gym_leader_id',
        'status',
        'manager_approval',
        'attempt_count',
        'success_at',
        // 他のカラムもマスアサインメントを許可したい場合はここに追加
    ];
}
