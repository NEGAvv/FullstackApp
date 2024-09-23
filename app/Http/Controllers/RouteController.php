<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RouteController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function home()
    {
        return view('home');
    }

    public function about()
    {
        return view('about');
    }

    public function services()
    {
        return view('services');
    }

    public function contact()
    {
        return view('contact');
    }
}
