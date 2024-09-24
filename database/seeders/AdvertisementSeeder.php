<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Advertisement;
class AdvertisementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Advertisement::insert([
            [
                'title' => 'Laptop for Sale',
                'description' => 'A high-performance laptop with 16GB RAM and 512GB SSD.',
                'category' => 'Electronics',
                'user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Smartphone',
                'description' => 'Latest model with 128GB storage and 5G support.',
                'category' => 'Electronics',
                'user_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Desk Chair',
                'description' => 'Ergonomic chair for home office.',
                'category' => 'Furniture',
                'user_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
        
    }
}
