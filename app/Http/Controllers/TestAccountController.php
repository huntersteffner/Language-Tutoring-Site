<?php 

namespace App\Http\Controllers;

use App\Http\Resources\HeroBannerResource;
use App\Models\HeroBanner;

class TestAccountController extends Controller {

    public function __construct() {

    }

    public function index() {

        $heroBanner = HeroBanner::where('page', 'test-account')->first();

        // dd($heroBanner);

        return Inertia('TestAccount', [
            'heroBanner' => is_null($heroBanner) ? null : new HeroBannerResource($heroBanner),
        ]);
    }
}