<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $table = 'feedbacks';
    protected $fillable = ['user_id', 'issue_id', 'content'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the issue associated with the feedback.
     */
    public function issue()
    {
        return $this->belongsTo(Issue::class);
    }
}
