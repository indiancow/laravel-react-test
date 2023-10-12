<?php

namespace App\Http\Controllers;

use App\Models\GymLeader;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GymLeaderController extends Controller
{
    public function index()
    {
        $gymLeaders = GymLeader::all();
        // dd($gymLeaders);
        return Inertia::render('GymLeaders/Index', ['gymLeaders' => $gymLeaders]);
    }

    public function show(GymLeader $gymLeader)
    {
        // dd($gymLeader);
        return Inertia::render('GymLeaders/Show', [
            'gymLeader' => $gymLeader->load('questions')
        ]);
    }
}
