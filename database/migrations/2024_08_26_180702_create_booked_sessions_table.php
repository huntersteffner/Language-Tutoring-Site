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
        Schema::create('booked_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tutor_id')->constrained('tutors');
            $table->foreignId('user_id')->constrained('users');
            $table->integer('credits');
            $table->jsonb('data')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booked_sessions');
    }
};
