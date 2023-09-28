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
        Schema::create('evolutions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pre_evolution_character_id') // 進化前キャラクターID
                ->constrained('characters') // charactersテーブルとリレーション
                ->onDelete('cascade'); // キャラクターが削除された場合、関連する進化も削除
            $table->foreignId('post_evolution_character_id') // 進化後キャラクターID
                ->constrained('characters') // charactersテーブルとリレーション
                ->onDelete('cascade'); // キャラクターが削除された場合、関連する進化も削除
            $table->integer('evolution_trigger_level'); // 進化が発生するレベル
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('evolutions');
    }
};
