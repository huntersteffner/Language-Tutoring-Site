<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\HeroBannerResource;
use App\Http\Resources\InfoBannerResource;
use App\Http\Resources\TestimonyResource;
use App\Http\Resources\TutorResource;
use App\Models\HeroBanner;
use App\Models\InfoBanner;
use App\Models\Testimony;
use App\Models\Tutor;

class HomeController extends Controller {

    public function __construct() {
        
    }

    public function index() {
        $heroBanner = HeroBanner::where('page', 'home')->firstOrFail();
        $infoBanners = InfoBanner::where('page', 'home')->get();
        $tutors = Tutor::where('id', '<=', 3)->get();
        $testimonies = Testimony::all();

        // dd($tutors);

        return inertia('Welcome', [
            'heroBanner' => is_null($heroBanner) ? null : new HeroBannerResource($heroBanner),
            'infoBanners' => InfoBannerResource::collection($infoBanners),
            'tutors' => TutorResource::collection($tutors),
            'testimonies' => TestimonyResource::collection($testimonies),
            // 'canLogin' => Route::has('login'),
            // 'canRegister' => Route::has('register')
        ]);
    }
}