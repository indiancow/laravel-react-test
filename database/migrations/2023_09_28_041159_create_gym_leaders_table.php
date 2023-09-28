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
        Schema::create('gym_leaders', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // ジムリーダー名
            $table->text('description'); // ジムリーダーの説明
            $table->unsignedBigInteger('badge_id'); // ジムリーダーが持つバッジID
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gym_leaders');
    }
};
