<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_skills')
            ->withPivot('level', 'experience')
            ->withTimestamps();
    }
    
    protected $fillable = [
        'skill_id', // これを追加
        // 他のフィールドも追加できます。
    ];
}
