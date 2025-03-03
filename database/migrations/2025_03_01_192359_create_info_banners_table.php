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
        Schema::create('info_banners', function (Blueprint $table) {
            $table->id();
            $table->string('image_url');
            $table->string('alt_text');
            $table->string('background_color');
            $table->string('header');
            $table->string('text');
            $table->string('page');
            $table->string('location');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('info_banners');
    }
};
