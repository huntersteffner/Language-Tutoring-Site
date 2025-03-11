<?php

namespace App\Http\Controllers;

use App\Http\Resources\HeroBannerResource;
use App\Http\Resources\InfoBannerResource;
use App\Models\HeroBanner;
use App\Models\InfoBanner;

class AboutController {
    public function index() {
        $heroBanner = HeroBanner::where('page', 'about')->firstOrFail();
        $infoBanners = InfoBanner::where('page', 'about')->get();

        // dd($infoBanners);

        $paragraphs = array(
            'So many people have dreams of learning a new language, but making it become a reality just seems so hard. They enthusiastically download a language learning app, begin trying to memorize extensive lists of vocabulary words, and seek to make sense of a whole new system of grammar; however, they simply struggle to move beyond understanding the basics. The reason they cannot reach their goal of speaking fluently is that their plan lacks the most important part: one-on-one guidance with someone who already knows the language.',
            'banner',
            'That is where Language Learning Inc. comes in. We connect students seeking to learning a foreign language with a certified tutor who can bridge the gap to full fluency. Our tutors can set up virtual sessions through Zoom that where they can give tailor made lessons based on the student\'s current skill level. They know the unique challenges to each language, and can help quickly move past plateaus in reaching their goals. Additionally, the tutors are the perfect way to gain practice speaking the language.',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et aperiam consequuntur necessitatibus aliquam dolor laboriosam perferendis exercitationem dicta delectus a! Laboriosam sit cum culpa tenetur?'
        );
        return Inertia('About', [
            'paragraphs' => $paragraphs,
            'infoBanners' => InfoBannerResource::collection($infoBanners),
            'heroBanner' => is_null($heroBanner) ? null : new HeroBannerResource($heroBanner),
        ]);
    }
}