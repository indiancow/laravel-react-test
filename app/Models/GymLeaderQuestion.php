<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GymLeaderQuestion extends Model
{
    use HasFactory;

    public function gymLeader()
    {
        return $this->belongsTo(GymLeader::class, 'gym_leader_id');
    }

    public function answers()
    {
        return $this->hasMany(UserAnswer::class, 'gym_leader_question_id', 'id');
        // ここで 'question_id' は UserAnswer テーブルの外部キーカラム名です。
        // 'id' は GymLeaderQuestion の主キーです。
    }

}
