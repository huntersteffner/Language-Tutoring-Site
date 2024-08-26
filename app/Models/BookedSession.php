<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookedSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'tutor_id',
        'user_id',
        'credits',
        'data'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function tutor() {
        return $this->belongsTo(Tutor::class);
    }
}
