<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Issue;
use App\Models\Tag;
use Illuminate\Support\Facades\Storage; 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\IssueCreated;

class IssueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $issues = Issue::with(['user', 'tag'])
            ->paginate(10);
            // dd(get_class($issues)); 
        $issues->getCollection()->transform(function ($issue) {
            return [
                'id' => $issue->id,
                'tag' => $issue->tag->name,
                'author' => $issue->user->name,
                'videoUrl' => Storage::disk('public')->url($issue->video_path),
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
        $tags = Tag::all();
        return Inertia::render('Issues/Create', [
            'tags' => $tags,
        ]);
        // return Inertia::render('Issues/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $validated = $request->validate([
            // 'user_id' => 'required|exists:users,id',
            'tag_id' => 'required|exists:tags,id',
            'description' => 'required|string',
            // 他のバリデーションルールもここに追加できます。
            'video' => 'nullable|mimes:mp4,mov,ogg,qt'
        ]);

        // dd($validated);
    
        $issue = new Issue;
        $issue->user_id = Auth::user()->id;
        $issue->tag_id = $validated['tag_id'];
        $issue->description = $validated['description']; // もしissuesテーブルにtag_idが存在する場合

        // ビデオがアップロードされたかチェック
        if ($request->hasFile('video')) {
            $videoFile = $request->file('video'); // ファイルを取得
            $videoPath = $videoFile->store('videos', 'public'); // videosディレクトリに保存し、パスを取得
            $issue->video_path = $videoPath; // video_pathカラムにパスを保存
        }

        $issue->save();
        // dd($issue);
        event(new IssueCreated($issue->user_id, $issue->id, $issue->tag_id));

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
