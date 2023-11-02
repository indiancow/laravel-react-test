<?php

namespace App\Http\Controllers;

use App\Models\DailyMission;
use App\Models\Tag;
use App\Models\UserDailyMission;
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
        // Log::debug($pendingRecords);

        $tags = Tag::all();

        $dailyMissions = DailyMission::all();
        // Log::debug($dailyMissions);

        $userId = auth()->id();
        $userDailyMissions = UserDailyMission::where('user_id', $userId)
        ->get()
        ->mapWithKeys(function ($item) {
            return [$item['daily_mission_id'] => $item['current_count']];
        });

        $dailyMissions->each(function ($mission) use ($userDailyMissions) {
            $mission->current_count = $userDailyMissions[$mission->id] ?? 0;
        });

        Log::debug($dailyMissions);

        return inertia('Dashboard', [
            'pendingRecords' => $pendingRecords,
            'tags' => $tags,
            'dailyMissions' => $dailyMissions,
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
