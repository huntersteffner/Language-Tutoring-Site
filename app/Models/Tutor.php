<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'credits_required',
        'description',
        'english',
        'spanish',
        'portuguese',
        'french',
        'german',
        'japanese',
        'mandarine',
    ];
}
