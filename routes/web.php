<?php

use App\Http\Controllers\IssueController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\GymLeaderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MypageController;
use App\Http\Controllers\UserAnswerController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    # mypage
    Route::get('/mypage/{userId?}', [MypageController::class, 'show'])->name('mypage.show');
});

// issue
Route::resource('issues', IssueController::class);
// s3
// Route::get('/api/s3-upload-url', [IssueController::class, 'getS3UploadUrl']);

// feedbacks
Route::get('/feedbacks/create/{issue}', [FeedbackController::class, 'create']);
Route::resource('feedbacks', FeedbackController::class);

// gymleader
Route::get('gymleaders', [GymLeaderController::class, 'index'])->name('gymleaders.index');
Route::get('gymleaders/{gymLeader}', [GymLeaderController::class, 'show'])->name('gymleaders.show');

Route::post('gymleaders/{gymLeader}/answers', [UserAnswerController::class, 'store'])->name('answers.store');

require __DIR__.'/auth.php';
