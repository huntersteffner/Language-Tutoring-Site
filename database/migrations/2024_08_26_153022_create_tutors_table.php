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
        Schema::create('tutors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image');
            $table->integer('credits_required');
            $table->string('description');
            $table->string('location');
            $table->boolean('english')->default(false);
            $table->boolean('spanish')->default(false);
            $table->boolean('portuguese')->default(false);
            $table->boolean('french')->default(false);
            $table->boolean('german')->default(false);
            $table->boolean('japanese')->default(false);
            $table->boolean('mandarine')->default(false);
            $table->jsonb('ranges')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tutors');
    }
};
