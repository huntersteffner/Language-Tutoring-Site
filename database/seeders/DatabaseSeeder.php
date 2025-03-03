<?php

namespace Database\Seeders;

use App\Models\CallToAction;
use App\Models\CreditPackage;
use App\Models\InfoBanner;
use App\Models\Tutor;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Tutor Seeders
        Tutor::create([
            'name' => 'Molly Johnson',
            // https://unsplash.com/photos/woman-in-white-scoop-neck-shirt-smiling-WYE2UhXsU1Y
            'image' => 'img/tutors/American1.jpg',
            'credits_required' => 2,
            'description' => 'Hello, I have been tutoring in both English and Spanish since 2019. I have experience teaching both children and adults, and can be flexible to each student\'s unique needs and goals.',
            'location' => 'New York, USA',
            'languages' => '["English","Spanish"]',
        ]);
        Tutor::create([
            'name' => 'Rafael Medeiros',
            // https://unsplash.com/photos/mens-blue-polo-shirt-AQql9zLz9mk
            'image' => 'img/tutors/Brazilian1.jpg',
            'credits_required' => 2,
            'description' => 'Oi, tudo bem. I\'m based out of Sao Paulo and am certified to teach both Portuguese and Spanish. I\'m very passionate about language learning and am excited to help to help you on your language learning journey. Feel free to book a session and let\'s start working together.',
            'location' => 'Sao Paulo, Brazil',
            'languages' => '["Portuguese","Spanish"]',
        ]);
        Tutor::create([
            'name' => 'Eva Hoffmann',
            // https://unsplash.com/photos/woman-in-black-long-sleeve-shirt-sitting-on-white-couch-n1B6ftPB5Eg
            'image' => 'img/tutors/German1.jpg',
            'credits_required' => 3,
            'description' => 'Learning a language is a challenge, but it can still be fun experience. I have a proven track record of helping students move from being stuck in learning a language, to feeling confident to speak to others.',
            'location' => 'Munich, Germany',
            'languages' => '["German","English","French"]',
        ]);
        Tutor::create([
            'name' => 'Dodi Qureshi',
            // https://unsplash.com/photos/man-in-blue-washed-jacket-1QOsJGbNIgk
            'image' => 'img/tutors/Arabic1.jpg',
            'credits_required' => 3,
            'description' => 'Learning a new language is one of the most meaningful things that someone can do, because it opens up a whole new world and expands your horizons. Whether it be Arabic, French, or English that you\'re seeking to learn, I can help you with my tutoring services. Go ahead and book a session today. I can\'t wait to meet you.',
            'location' => 'Cairo, Egypt',
            'languages' => '["Arabic","French","English"]',
        ]);
        Tutor::create([
            'name' => 'Hindi Name',
            // https://unsplash.com/photos/womens-red-sweater-qO_O7AwN1B0
            'image' => 'img/tutors/Hindi1.jpg',
            'credits_required' => 3,
            'description' => 'Learning a new language is something that nobody ever regrets. If you\'ve been studying for some time, I can take your language learning journey to the next level. If you\'re starting from scratch, I can help you to start a language foundation that will set you up for success.',
            'location' => 'Atlanta, USA',
            'languages' => '["Hindi","English","Mandarine"]',
        ]);
        Tutor::create([
            'name' => 'Japanese Name',
            // https://unsplash.com/photos/woman-standing-near-body-of-water-dcZsxUAAJXs
            'image' => 'img/tutors/Japanese1.jpg',
            'credits_required' => 2,
            'description' => 'You ready to learn a language? Well I\'m ready to help teach you! Let\'s get started today!',
            'location' => 'Kyoto, Japan',
            'languages' => '["Japanese","English"]',
        ]);
        Tutor::create([
            'name' => 'Chinese Name',
            // https://unsplash.com/photos/man-wearing-eyeglasses-and-blue-shirt-inside-coffee-shop-QJEVpydulGs
            'image' => 'img/tutors/Chinese1.jpg',
            'credits_required' => 2,
            'description' => 'Want to see your proficiency in Mandarine or Japanese dramatically improve? Well don\'t wait any longer. Go ahead and book a session.',
            'location' => 'Beijing, China',
            'languages' => '["Mandarine","Japanese"]',
        ]);
        Tutor::create([
            'name' => 'Leo Bernard',
            // https://unsplash.com/photos/woman-wearing-blue-coat-7uoMmzPd2JA
            'image' => 'img/tutors/French1.jpg',
            'credits_required' => 1,
            'description' => 'I can teach you French. Let\'s get started today.',
            'location' => 'Nice, France',
            'languages' => '["French"]',
        ]);
        Tutor::create([
            'name' => 'Spanish Name',
            // https://unsplash.com/photos/smiling-man-standing-near-green-trees-VVEwJJRRHgk
            'image' => 'img/tutors/Spanish1.jpg',
            'credits_required' => 2,
            'description' => 'Buenos días, futuro estudiante. I love teaching both Spanish and English. No matter your age, I can help you reach your goal of fluency!',
            'location' => 'Lima, Peru',
            'languages' => '["Spanish","English"]',
        ]);
        Tutor::create([
            'name' => 'Marta Huerta',
            // https://unsplash.com/photos/woman-in-black-coat-sitting-on-chair-NpyF7rjqmq4
            'image' => 'img/tutors/Spanish2.jpg',
            'credits_required' => 2,
            'description' => 'Hola, ¿quién quiere aprender español, portugues, o árabe? I have ten years experience as language translator and I know what it takes to become fluent. I\'m ready to help you reach your language goals!',
            'location' => 'Cordoba, Spain',
            'languages' => '["Spanish","Portuguese","Arabic"]',
        ]);
        Tutor::create([
            'name' => 'Japanese Name',
            // https://unsplash.com/photos/woman-taking-selfie-c-mgSuxqpzA
            'image' => 'img/tutors/Japanese2.jpg',
            'credits_required' => 3,
            'description' => 'Ready to make your dream of speaking another language come true? Then go ahead and book your first session!',
            'location' => 'Kyoto, Japan',
            'languages' => '["Japanese","French","English"]',
        ]);


        // Credit Package Seeders
        CreditPackage::create([
            'name' => 'Simple',
            'price' => 11.50,
            'credits' => 1,
        ]);
        CreditPackage::create([
            'name' => 'Basic',
            'price' => 28.25,
            'credits' => 3,
        ]);
        CreditPackage::create([
            'name' => 'Basic Plus',
            'price' => 74.97,
            'credits' => 10,
        ]);
        CreditPackage::create([
            'name' => 'Pro',
            'price' => 149.33,
            'credits' => 25,
        ]);
        CreditPackage::create([
            'name' => 'Super Star',
            'price' => 200,
            'credits' => 50,
        ]);

        InfoBanner::create([
            'image_url' => 'https://img.buzzfeed.com/buzzfeed-static/static/2024-11/14/3/asset/333bd242d09b/sub-buzz-1021-1731555737-1.jpg?downsize=900:*&output-format=auto&output-quality=auto',
            'alt_text' => 'Testing',
            'background_color' => 'bg-black',
            'header' => 'Test Header',
            'text' => 'Test words',
            // 'cta' => 'blah',
            'page' => 'about',
            'location' => 'aboutSideBanner'
        ]);

        CallToAction::create([
            'cta_url' => '/',
            'cta_text' => 'Go to homepage',
            'page' => 'about',
            'location' => 'aboutSideBanner'
        ]);
    }
}
