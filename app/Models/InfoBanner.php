<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfoBanner extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_url',
        'alt_text',
        'background_color',
        'text_white',
        'haeder',
        'text',
        'page',
        'location'
    ];
}
