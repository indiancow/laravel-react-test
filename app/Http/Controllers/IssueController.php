<?php

namespace App\Http\Controllers;

use App\Models\Issue;
use Illuminate\Http\Request;

class IssueController extends Controller
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
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'tag_id' => 'required|exists:tags,id',
            'description' => 'required|string',
            // 他のバリデーションルールもここに追加できます。
        ]);
    
        $issue = new Issue;
        $issue->user_id = $validated['user_id'];
        $issue->tag_id = $validated['tag_id'];
        $issue->description = $validated['description']; // もしissuesテーブルにtag_idが存在する場合
        $issue->save();

        return redirect()->route('issues.index')->with('success', 'Issue created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Issue $issue)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Issue $issue)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Issue $issue)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Issue $issue)
    {
        //
    }
}
