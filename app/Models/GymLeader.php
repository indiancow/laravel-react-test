<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GymLeader extends Model
{
    use HasFactory;

    # 試験的に。今後変更する可能性あり。
    public function badge()
    {
        return $this->belongsTo(Badge::class);
    }
}
