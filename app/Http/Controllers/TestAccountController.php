<?php 

namespace App\Http\Controllers;

use App\Http\Resources\HeroBannerResource;
use App\Http\Resources\InfoBannerResource;
use App\Models\HeroBanner;
use App\Models\InfoBanner;

class TestAccountController extends Controller {

    public function __construct() {

    }

    public function index() {

        $heroBanner = HeroBanner::where('page', 'test-account')->first();
        $infoBanners = InfoBanner::where('page', 'test-account')->get();

        // dd($heroBanner);

        return Inertia('TestAccount', [
            'heroBanner' => is_null($heroBanner) ? null : new HeroBannerResource($heroBanner),
            'infoBanners' => InfoBannerResource::collection($infoBanners),
        ]);
    }
}