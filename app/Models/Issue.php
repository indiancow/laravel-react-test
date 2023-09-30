<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    use HasFactory;

    protected $table = 'issues';
    protected $fillable = ['user_id', 'tag_id', 'description'];
    
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
}
