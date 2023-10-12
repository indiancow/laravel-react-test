<?php

namespace App\Http\Controllers;

use App\Models\GymLeader;
use App\Services\GymChallengeService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GymLeaderController extends Controller
{
    protected $gymChallengeService;

    public function __construct(GymChallengeService $gymChallengeService)
    {
        $this->gymChallengeService = $gymChallengeService;
    }

    public function index()
    {
        $user = auth()->user();
        // dd(GymLeader::all());
        $gymLeaders = GymLeader::all()
        ->filter(function ($gymLeader) use ($user) {
            return $this->gymChallengeService->canChallenge($user, $gymLeader);
        });
        // dd($gymLeaders);
        return Inertia::render('GymLeaders/Index', ['gymLeaders' => $gymLeaders]);

        // $userSkillLevels = auth()->user()->userSkills;
        // // dd($userSkillLevels);
        // $gymLeaders = GymLeader::all();
        // // dd($gymLeaders);
        // return Inertia::render('GymLeaders/Index', ['gymLeaders' => $gymLeaders, 'userSkillLevels' => $userSkillLevels]);
    }

    public function show(GymLeader $gymLeader)
    {
        // dd($gymLeader);
        return Inertia::render('GymLeaders/Show', [
            'gymLeader' => $gymLeader->load('questions')
        ]);
    }
}
