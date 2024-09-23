<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RouteController;
use App\Http\Controllers\RedirectController;
use App\Http\Controllers\AdvertismentController;

Route::get('/', [RouteController::class, 'index']);
Route::get('/home', [RouteController::class, 'home']);
Route::get('/about', [RouteController::class, 'about']);
Route::get('/services', [RouteController::class, 'services']);
Route::get('/contact', [RouteController::class, 'contact']);

Route::get('/advertisment/{id}', [AdvertismentController::class, 'show']);

Route::get('/redirect', RedirectController::class);