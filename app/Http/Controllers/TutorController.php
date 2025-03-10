<?php

namespace App\Http\Controllers;

use App\Http\Resources\HeroBannerResource;
use App\Http\Resources\InfoBannerResource;
use App\Http\Resources\TutorResource;
use App\Models\BookedSession;
use App\Models\HeroBanner;
use App\Models\InfoBanner;
use App\Models\Tutor;
use Illuminate\Http\Request;

class TutorController extends Controller
{

    public function __construct()
    {

    }

    public function index() {
        $heroBanner = HeroBanner::where('page', 'tutors')->firstOrFail();
        $infoBanners = InfoBanner::where('page', 'tutors')->get();
        $tutors = Tutor::all();


        return inertia('Tutors', [
            'tutors' => TutorResource::collection($tutors),
            'heroBanner' => new HeroBannerResource($heroBanner),
            'infoBanners' => InfoBannerResource::collection($infoBanners),
            'message' => session('message')
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
        
        if($user->credits_available < $tutor->credits_required) {
            return back();
        }

        $user->decreaseCredits($tutor->credits_required);

        $message = 'You\'ve booked a language tutoring session with '. $tutor->name . '. Check your email for the confirmation details.';

        BookedSession::create([
            'tutor_id' => $tutor->id,
            'user_id' => $user->id,
            'credits' => $tutor->credits_required
        ]);

        $bookedSessions = BookedSession::all();

        return to_route('tutors')->with('message', $message);
    }
}
