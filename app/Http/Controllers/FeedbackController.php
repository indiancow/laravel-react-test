<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFeedbackRequest;
use App\Http\Requests\UpdateFeedbackRequest;
use App\Models\Feedback;
use App\Models\Issue;
use Inertia\Inertia;
use App\Events\FeedbackCreated;
use Illuminate\Support\Facades\Log;

use function Termwind\render;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $feedbacks = Feedback::with('user', 'issue.user', 'issue.tag')->get();
        // dd($feedbacks);
        return Inertia::render('Feedbacks/Index', ['feedbacks' => $feedbacks]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Issue $issue)
    {
        $issue->load('tag', 'user'); // 'tag'と'user'はIssueモデルと関連づけられたメソッド名になります。
        return Inertia::render('Feedbacks/Create', [
            'issue' => $issue
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFeedbackRequest $request)
    {
        // dd('dd');
        $validated = $request->validated();
        
        $feedback = Feedback::create([
            'user_id' => auth()->id(), // 認証済みユーザーのID
            'issue_id' => $validated['issue_id'],
            'content' => $validated['content'],
        ]);

        // dd($feedback);
        # give experience
        event(new FeedbackCreated($feedback));

        return redirect()->route('feedbacks.index')->with('success', 'Feedback has been added successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFeedbackRequest $request, Feedback $feedback)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback)
    {
        //
    }
}
