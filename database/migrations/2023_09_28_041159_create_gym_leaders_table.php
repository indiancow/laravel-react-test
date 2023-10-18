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
            $table->foreignId('skill_id')->constrained();
            $table->unsignedBigInteger('badge_id'); // ジムリーダーが持つバッジID
            $table->integer('required_level')->default(1); // default(1)は必要に応じて変更してください。
            $table->string('image_path');
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
