<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Issue extends Model
{
    use HasFactory;

    protected $table = 'issues';
    protected $fillable = ['user_id', 'tag_id', 'description','video_path'];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tag()
    {
        return $this->belongsTo(Tag::class);
    }

    public function skill()
    {
        return $this->belongsTo(Skill::class, 'skill_id');
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }
    
    public function getVideoUrlAttribute()
    {
        return Storage::disk('public')->url('videos/' . $this->id . '.mp4');
    }
}
