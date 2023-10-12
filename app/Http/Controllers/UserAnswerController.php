<?php

namespace App\Http\Controllers;

use App\Models\GymLeader;
use App\Models\UserAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserAnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, GymLeader $gymLeader)
    {
        // バリデーション
        $validated = $request->validate([
            'answers' => ['required', 'array'],
            'answers.*' => ['required', 'string'],
        ]);

        // 回答を保存
        foreach ($validated['answers'] as $questionId => $answerText) {
            UserAnswer::create([
                'user_id' => Auth::id(),
                'gym_leader_question_id' => $questionId,
                'answer_text' => $answerText,
            ]);
        }

        // 結果を表示または保存し、次のステップへ
        return redirect()->route('gymleaders.show', $gymLeader)->with('success', 'Answers submitted!');
    }

    /**
     * Display the specified resource.
     */
    public function show(UserAnswer $userAnswer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserAnswer $userAnswer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserAnswer $userAnswer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserAnswer $userAnswer)
    {
        //
    }
}
