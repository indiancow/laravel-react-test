<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\UserGymLeader;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $pendingRecords = [];

        if (auth()->user()->is_manager == 1) {
            $pendingRecords = UserGymLeader::with([
                    'user',
                    'gymLeader',
                    'gymLeader.questions',
                    'gymLeader.questions.answers'
                ])
                ->where('status', 'pending')
                ->get();
        }
        Log::debug($pendingRecords);

        $tags = Tag::all();

        return inertia('Dashboard', [
            'pendingRecords' => $pendingRecords,
            'tags' => $tags
        ]);
    }

    // App\Http\Controllers\DashboardController.php

    public function clear($id) {
        $record = UserGymLeader::find($id);
        if ($record) {
            $record->status = 'clear';
            $record->success_at = now();
            $record->save();
            return response()->json(['message' => 'Record updated successfully'], 200);
        } else {
            return response()->json(['message' => 'Record not found'], 404);
        }
    }

    public function fail($id) {
        $record = UserGymLeader::find($id);
        if ($record) {
            $record->status = 'false';
            $record->save();
            return response()->json(['message' => 'Record updated successfully'], 200);
        } else {
            return response()->json(['message' => 'Record not found'], 404);
        }
    }

}
