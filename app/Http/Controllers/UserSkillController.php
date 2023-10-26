<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUser_skillRequest;
use App\Http\Requests\UpdateUser_skillRequest;
use App\Models\User_skill;
use Illuminate\Support\Facades\Log;

class UserSkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function levelup(User_skill $user_skill){
        Log::debug($user_skill);
        // dd($user_skill);
        $user_skill->increment('level');
        return response()->json(['message' => 'Skill level updated successfully']);
    }
}
