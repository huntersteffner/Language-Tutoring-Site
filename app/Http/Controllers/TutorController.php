<?php

namespace App\Http\Controllers;

use App\Http\Resources\TutorResource;
use App\Models\BookedSession;
use App\Models\Tutor;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TutorController extends Controller
{

    // public ?Tutor $tutors = null;

    public function __construct()
    {
        // $this->tutors = Tutor::all();
    }

    public function index() {
        $tutors = Tutor::all();
        return inertia('Tutors', [
            'tutors' => TutorResource::collection($tutors)
        ]);
    }

    public function book(Request $request) {
        $tutors = Tutor::all();

        $data = $request->validate([
            'tutor_id' => ['required', 'numeric']
        ]);

        $tutor_id = (float) $data['tutor_id'];
        
        $tutor = Tutor::where('id', $tutor_id)->firstOrFail();
        
        
        $user = $request->user();
        // dd($tutors, $tutor, $user);
        
        if($user->credits_available < $tutor->credits_required) {
            return back();
        }

        $user->decreaseCredits($tutor->credits_required);

        BookedSession::create([
            'tutor_id' => $tutor->id,
            'user_id' => $user->id,
            'credits' => $tutor->credits_required
        ]);

        return to_route('tutors');
    }
}
