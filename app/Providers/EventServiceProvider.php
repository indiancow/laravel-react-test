<?php

namespace App\Providers;

use App\Events\IssueCreated;
use App\Listeners\AddExperienceForIssue;
use App\Events\FeedbackCreated;
use App\Listeners\AddExperienceForFeedback;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],

        # make issues
        IssueCreated::class => [
            AddExperienceForIssue::class
        ],

        # make feedback and give experience
        FeedbackCreated::class => [
            AddExperienceForFeedback::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
