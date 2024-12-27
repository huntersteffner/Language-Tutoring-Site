<?php

namespace Database\Seeders;

use App\Models\CreditPackage;
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
            'description' => 'Oi, tudo bem. I\'m based out of Sao Paulo and can speak Portuguese and Spanish. I\'m very passionate about language learning and am excited to help to help you on your language learning journey. Feel free to book a session and let\'s start working together.',
            'location' => 'Sao Paulo, Brazil',
            'languages' => '["Portuguese","Spanish"]',
        ]);
        Tutor::create([
            'name' => 'Adrian Hoffmann',
            // https://unsplash.com/photos/woman-in-black-long-sleeve-shirt-sitting-on-white-couch-n1B6ftPB5Eg
            'image' => 'img/tutors/German1.jpg',
            'credits_required' => 3,
            'description' => 'Learning a language is a challenge, but it can still be fun experience. I have a proven track record of helping students move from being stuck in learning a language, to feeling confident to speak to others.',
            'location' => 'Munich, Germany',
            'languages' => '["German","English","French"]',
        ]);
        Tutor::create([
            'name' => 'Arabic Name',
            // https://unsplash.com/photos/man-in-blue-washed-jacket-1QOsJGbNIgk
            'image' => 'img/tutors/Arabic1.jpg',
            'credits_required' => 3,
            'description' => 'I can eat chocolate',
            'location' => 'Cairo, Egypt',
            'languages' => '["Arabic","French","English"]',
        ]);
        Tutor::create([
            'name' => 'Hindi Name',
            // https://unsplash.com/photos/womens-red-sweater-qO_O7AwN1B0
            'image' => 'img/tutors/Hindi1.jpg',
            'credits_required' => 3,
            'description' => 'I can eat chocolate',
            'location' => 'Cairo, Egypt',
            'languages' => '["Hindi","English","Mandarine"]',
        ]);
        Tutor::create([
            'name' => 'Japanese Name',
            // https://unsplash.com/photos/woman-standing-near-body-of-water-dcZsxUAAJXs
            'image' => 'img/tutors/Japanese1.jpg',
            'credits_required' => 2,
            'description' => 'I can eat chocolate',
            'location' => 'Kyoto, Japan',
            'languages' => '["Japanese","English"]',
        ]);
        Tutor::create([
            'name' => 'Chinese Name',
            // https://unsplash.com/photos/man-wearing-eyeglasses-and-blue-shirt-inside-coffee-shop-QJEVpydulGs
            'image' => 'img/tutors/Chinese1.jpg',
            'credits_required' => 2,
            'description' => 'I can eat chocolate',
            'location' => 'Beijing, China',
            'languages' => '["Mandarine","Japanese"]',
        ]);
        Tutor::create([
            'name' => 'French Name',
            // https://unsplash.com/photos/woman-wearing-blue-coat-7uoMmzPd2JA
            'image' => 'img/tutors/French1.jpg',
            'credits_required' => 1,
            'description' => 'I can eat chocolate',
            'location' => 'Nice, France',
            'languages' => '["French"]',
        ]);
        Tutor::create([
            'name' => 'Spanish Name',
            // https://unsplash.com/photos/smiling-man-standing-near-green-trees-VVEwJJRRHgk
            'image' => 'img/tutors/Spanish1.jpg',
            'credits_required' => 2,
            'description' => 'I can eat chocolate',
            'location' => 'Lima, Peru',
            'languages' => '["Spanish","English"]',
        ]);
        Tutor::create([
            'name' => 'Spanish Name',
            // https://unsplash.com/photos/woman-in-black-coat-sitting-on-chair-NpyF7rjqmq4
            'image' => 'img/tutors/Spanish2.jpg',
            'credits_required' => 2,
            'description' => 'I can eat chocolate',
            'location' => 'Cordoba, Spain',
            'languages' => '["Spanish","Portuguese","Arabic"]',
        ]);
        Tutor::create([
            'name' => 'Japanese Name',
            // https://unsplash.com/photos/woman-taking-selfie-c-mgSuxqpzA
            'image' => 'img/tutors/Japanese2.jpg',
            'credits_required' => 3,
            'description' => 'I can eat chocolate',
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
    }
}
