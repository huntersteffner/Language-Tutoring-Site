<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\HeroBannerResource;
use App\Http\Resources\InfoBannerResource;
use App\Models\HeroBanner;
use App\Models\InfoBanner;

class HomeController extends Controller {

    public function __construct() {
        
    }

    public function index() {
        $heroBanner = HeroBanner::where('page', 'home')->firstOrFail();
        $infoBanners = InfoBanner::where('page', 'home')->get();

        // dd($heroBanner);

        return inertia('Welcome', [
            'heroBanner' => is_null($heroBanner) ? null : new HeroBannerResource($heroBanner),
            'infoBanners' => InfoBannerResource::collection($infoBanners)
            // 'canLogin' => Route::has('login'),
            // 'canRegister' => Route::has('register')
        ]);
    }
}