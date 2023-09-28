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
        Schema::create('levels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('character_id') // キャラクターID
                ->constrained('characters') // charactersテーブルとリレーション
                ->onDelete('cascade'); // キャラクターが削除された場合、関連するレベルアップ情報も削除
            $table->integer('level'); // 到達レベル
            $table->integer('required_experience'); // 必要経験値
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('levels');
    }
};
