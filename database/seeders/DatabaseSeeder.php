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
            'description' => 'I can eat chocolate',
            'location' => 'New York, USA',
            'languages' => '["English","Spanish"]',
        ]);
        Tutor::create([
            'name' => 'Brazilian Name',
            // https://unsplash.com/photos/mens-blue-polo-shirt-AQql9zLz9mk
            'image' => 'img/tutors/Brazilian1.jpg',
            'credits_required' => 2,
            'description' => 'I can eat chocolate',
            'location' => 'Sao Paulo, Brazil',
            'languages' => '["Portuguese","Spanish"]',
        ]);
        Tutor::create([
            'name' => 'German Name',
            // https://unsplash.com/photos/woman-in-black-long-sleeve-shirt-sitting-on-white-couch-n1B6ftPB5Eg
            'image' => 'img/tutors/German1.jpg',
            'credits_required' => 3,
            'description' => 'I can eat chocolate',
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
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
            'credits_required' => 3,
            'description' => 'I can eat chocolate',
            'location' => 'Cairo, Egypt',
            'languages' => '["Hindi","English","Mandarine"]',
        ]);
        Tutor::create([
            'name' => 'Japanese Name',
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
            'credits_required' => 2,
            'description' => 'I can eat chocolate',
            'location' => 'Kyoto, Japan',
            'languages' => '["Japanese","English"]',
        ]);
        Tutor::create([
            'name' => 'Chinese Name',
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
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
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
            'credits_required' => 1,
            'description' => 'I can eat chocolate',
            'location' => 'Lima, Peru',
            'languages' => '["Spanish","English"]',
        ]);
        Tutor::create([
            'name' => 'Spanish Name',
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
            'credits_required' => 2,
            'description' => 'I can eat chocolate',
            'location' => 'Cordoba, Spain',
            'languages' => '["Spanish","Portuguese","Arabic"]',
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
