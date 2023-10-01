<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('gym_leaders', function (Blueprint $table) {
            $table->integer('required_level')->after('badge_id')->default(1); // default(1)は必要に応じて変更してください。
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('gym_leaders', function (Blueprint $table) {
            //
        });
    }
};
