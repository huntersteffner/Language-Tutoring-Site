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
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
            'credits_required' => 2,
            'description' => 'I can eat chocolate',
            'location' => 'New York, USA',
            'english' => true,
            'ranges' => "[\"spanish\",\"english\"]"
        ]);
        Tutor::create([
            'name' => 'Brazilian Name',
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
            'credits_required' => 2,
            'description' => 'I can eat chocolate',
            'location' => 'Sao Paulo, Brazil',
            'portuguese' => true,
            'spanish' => true
        ]);
        Tutor::create([
            'name' => 'German Name',
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
            'credits_required' => 3,
            'description' => 'I can eat chocolate',
            'location' => 'Munich, Germany',
            'german' => true,
            'english' => true,
            'french' => true
        ]);
        Tutor::create([
            'name' => 'Japanese Name',
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
            'credits_required' => 2,
            'description' => 'I can eat chocolate',
            'location' => 'Kyoto, Japan',
            'japanese' => true,
            'english' => true,
        ]);
        Tutor::create([
            'name' => 'Chinese Name',
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
            'credits_required' => 2,
            'description' => 'I can eat chocolate',
            'location' => 'Beijing, China',
            'japanese' => true,
            'mandarine' => true,
        ]);
        Tutor::create([
            'name' => 'French Name',
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
            'credits_required' => 1,
            'description' => 'I can eat chocolate',
            'location' => 'Nice, France',
            'french' => true,
        ]);
        Tutor::create([
            'name' => 'Spanish Name',
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
            'credits_required' => 1,
            'description' => 'I can eat chocolate',
            'location' => 'Lima, Peru',
            'spanish' => true,
            'english' => true,
        ]);
        Tutor::create([
            'name' => 'Spanish Name',
            'image' => 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp',
            'credits_required' => 2,
            'description' => 'I can eat chocolate',
            'location' => 'Cordoba, Spain',
            'japanese' => true,
            'spanish' => true,
            'german' => true
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
