<?php

namespace App\Http\Controllers;

use App\Http\Resources\TutorResource;
use App\Models\Tutor;
use Illuminate\Http\Request;

class TutorController extends Controller
{

    public function index() {
        $tutors = Tutor::all();
        return inertia('Tutors', [
            'tutors' => TutorResource::collection($tutors)
        ]);
    }
}
