<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_skill extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'skill_id', 'level', 'experience'];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function skill()
    {
        return $this->belongsTo(Skill::class);
    }
}
