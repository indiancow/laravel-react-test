<?php

namespace App\Http\Controllers;

use App\Events\GymLeaderChallenged;
use App\Models\GymLeader;
use App\Models\UserAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

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
        // dd('dd');
        // バリデーション
        $validated = $request->validate([
            'answers' => ['required', 'array'],
            'answers.*' => ['required', 'string'],
        ]);
        // Log::debug($validated);

        $user_answers = []; // この配列に全てのUserAnswerインスタンスを保存します

        // 回答を保存
        foreach ($validated['answers'] as $questionId => $answerText) {
            $user_answers[] = UserAnswer::create([
                'user_id' => Auth::id(),
                'gym_leader_question_id' => $questionId,
                'answer_text' => $answerText,
            ]);
        }
        Log::info('event fire!');
        event(new GymLeaderChallenged($user_answers));
        Log::info('finish event!');

        // 結果を表示または保存し、次のステップへ
        // return redirect()->route('gymleaders.index');
        // 結果を表示または保存し、次のステップへ
        return response()->json(['redirect_url' => route('gymleaders.index')]);

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
