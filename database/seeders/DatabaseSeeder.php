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
            'image' => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.charactour.com%2Fhub%2Fcharacters%2Fview%2FPatrick-Star.SpongeBob-SquarePants&psig=AOvVaw3n_m6XhNPp3a1ASAInBs1w&ust=1724780182904000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICk9YKZk4gDFQAAAAAdAAAAABAE',
            'credits_required' => 3,
            'description' => 'I can eat chocolate',
            'english' => true
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
