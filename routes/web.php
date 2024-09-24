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

Route::get('/advertisements', [AdvertismentController::class, 'index'])->name('advertisements.index');
Route::get('/advertisements/create', [AdvertismentController::class, 'create'])->name('advertisements.create');
Route::post('/advertisements', [AdvertismentController::class, 'store'])->name('advertisements.store');
Route::get('/advertisements/{id}', [AdvertismentController::class, 'show'])->name('advertisements.show');
Route::get('/advertisements/{id}/edit', [AdvertismentController::class, 'edit'])->name('advertisements.edit');
Route::put('/advertisements/{id}', [AdvertismentController::class, 'update'])->name('advertisements.update');
Route::delete('/advertisements/{id}', [AdvertismentController::class, 'destroy'])->name('advertisements.destroy');


Route::get('/redirect', RedirectController::class);