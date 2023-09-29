<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Issue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IssueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $issues = Issue::with(['user', 'tag'])->get()->map(function ($issue) {
            return [
                'id' => $issue->id,
                'tag' => $issue->tag->name,
                'author' => $issue->user->name,
                'description' => $issue->description,
                'createdAt' => $issue->created_at->format('Y-m-d H:i:s'),
            ];
        });

        // $issues = Issue::all();
        // dd($issues);
        return Inertia::render('Issues/Index', ['issues' => $issues]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // dd('3333');
        return Inertia::render('Issues/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd('ddd');
        $validated = $request->validate([
            // 'user_id' => 'required|exists:users,id',
            'tag_id' => 'required|exists:tags,id',
            'description' => 'required|string',
            // 他のバリデーションルールもここに追加できます。
        ]);

        // dd($validated);
    
        $issue = new Issue;
        $issue->user_id = Auth::user()->id;
        $issue->tag_id = $validated['tag_id'];
        $issue->description = $validated['description']; // もしissuesテーブルにtag_idが存在する場合
        $issue->save();

        return redirect()->route('issues.index');
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
