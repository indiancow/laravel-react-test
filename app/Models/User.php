<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use App\Models\User_skill;
use App\Models\Issue;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'is_manager'
    ];

    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'user_skills')
            ->withPivot('level', 'experience')
            ->withTimestamps();
    }

    public function userSkills()
    {
        return $this->hasMany(User_Skill::class);
    }

    public function issues()
    {
        return $this->hasMany(Issue::class);
    }
    
    public function feedbacksReceived()
    {
        return $this->hasManyThrough(
            Feedback::class,
            Issue::class,
            'user_id', // Issueモデルの外部キー
            'issue_id' // Feedbackモデルの外部キー
        );
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
