<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IssueController;
use App\Http\Controllers\UserSkillController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/s3-upload-url', [IssueController::class, 'getS3UploadUrl']);

// routes/api.php
Route::put('/clear/{id}', [DashboardController::class, 'clear']);
Route::put('/fail/{id}', [DashboardController::class, 'fail']);
Route::put('/user-skill/level-up', [UserSkillController::class, 'levelup']);