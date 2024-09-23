<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdvertismentController extends Controller
{ 
    public function show($id)
    {
        $advertisments = [
            1 => [
                'title' => 'Laptop',
                'description' => 'A powerful laptop with 16GB RAM and 512GB SSD.',
                'category' => 'Electronics',
                'user_id' => 1
            ],
            2 => [
                'title' => 'Smartphone',
                'description' => 'Latest model with 128GB storage and 5G support.',
                'category' => 'Electronics',
                'user_id' => 2
            ],
            3 => [
                'title' => 'Desk Chair',
                'description' => 'Ergonomic chair for home office.',
                'category' => 'Furniture',
                'user_id' => 3
            ]
        ];

        if (!isset($advertisments[$id])) {
            abort(404, 'Product not found');
        }

        return view('advertisment.show', ['advertisment' => $advertisments[$id]]);
    }
}
