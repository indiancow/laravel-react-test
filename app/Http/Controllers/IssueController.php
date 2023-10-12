<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Issue;
use App\Models\Tag;
use Illuminate\Support\Facades\Storage; 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\IssueCreated;
use Aws\S3\Exception\S3Exception;
use Aws\S3\S3Client;

class IssueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $issues = Issue::with(['user', 'tag'])
            ->paginate(10);

        // 変換されたコレクションを取得し、それを$issuesオブジェクトに再セットします。
        $transformedIssues = $issues->getCollection()->transform(function ($issue) {
            return [
                'id' => $issue->id,
                'author' => $issue->user->name,
                'tag' => $issue->tag->name,
                'author' => $issue->user->name,
                'videoUrl' => Storage::disk('public')->url($issue->video_path),
                'description' => $issue->description,
                'createdAt' => $issue->created_at->format('Y-m-d H:i:s'),
            ];
        });

        // ページネーションオブジェクトのコレクションを変換後のものに置き換えます。
        $issues->setCollection($transformedIssues);

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
            'video_path' => 'nullable' // この部分を修正します
        ]);

        // dd($validated);
    
        $issue = new Issue;
        $issue->user_id = Auth::user()->id;
        $issue->tag_id = $validated['tag_id'];
        $issue->description = $validated['description']; // もしissuesテーブルにtag_idが存在する場合

        // ビデオがアップロードされたかチェック
        if ($request->hasFile('video')) {
            $path = $request->file('video')->store('videos', 'public');
            $issue->video_path = $path;
        }
        $issue->save();
        // dd($issue);
        event(new IssueCreated($issue->user_id, $issue->id, $issue->tag_id));

        // return redirect()->route('issues.index');
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

    # take s3 data
    # take s3 data
    public function getS3UploadUrl()
    {
        try {
            $filename = uniqid() . '.mp4';

            // S3 Clientを初期化
            $s3Client = new S3Client([
                'version' => 'latest',
                'region'  => env('AWS_DEFAULT_REGION'),
                'credentials' => [
                    'key'    => env('AWS_ACCESS_KEY_ID'),
                    'secret' => env('AWS_SECRET_ACCESS_KEY'),
                ],
            ]);
            // プリサインURLを生成
            $cmd = $s3Client->getCommand('PutObject', [
                'Bucket' => env('AWS_BUCKET'),
                'Key'    => $filename,
                'ACL'    => 'public-read',
                'ContentType' => 'video/mp4',
            ]);
            $request = $s3Client->createPresignedRequest($cmd, '+20 minutes');

            // プリサインURLを文字列として取得
            $presignedUrl = (string)$request->getUri();
            // dd($presignedUrl);
            // dd($s3Client);
            return response()->json(['url' => $presignedUrl]);
        } catch (S3Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
