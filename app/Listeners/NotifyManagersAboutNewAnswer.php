<?php

namespace App\Listeners;

use App\Events\GymLeaderChallenged;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class NotifyManagersAboutNewAnswer
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(GymLeaderChallenged $event): void
    {
        $answer = $event->user_answer;
        dd($answer);
        $managers = User::where('is_manager', 1)->where('id', '<>', $answer->user_id)->get();

        // foreach ($managers as $manager) {
        //     Notification::create([
        //         'user_id' => $manager->id,
        //         'content' => "New answer submitted by {$answer->user->name}",
        //         // 他の必要なフィールド...
        //     ]);
        // }
    }
}
