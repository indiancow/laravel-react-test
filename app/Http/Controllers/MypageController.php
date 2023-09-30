<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Issue;
use App\Models\Feedback;
use Inertia\Inertia;

class MypageController extends Controller
{
    public function show($userId = null)
    {
        $user = $userId ? User::findOrFail($userId) : Auth::user();
        $userSkills = $user->userSkills()->with('skill')->get();
        $issues = $user->issues()->with(['tag', 'feedbacks'])->get();
        $feedbacksReceived = $user->feedbacksReceived()->with('issue.tag')->get();
        // dd($feedbacksReceived);
        $users = User::all(); // 全ユーザーを取得
        
        return Inertia::render('Mypage/Show', [
            'user' => $user,
            'users' => $users,
            'issues' => $issues,
            'feedbacks' => $feedbacksReceived,
            'userSkills' => $userSkills
        ]);
    }
}
