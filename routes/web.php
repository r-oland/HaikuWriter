<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    $records = [
        ['name' => 'Dirt', 'year' => '1990', 'genre' => 'grunge'],
        ['name' => 'Ten', 'year' => '1993', 'genre' => 'grunge'],
        ['name' => 'Broken machine', 'year' => '2016', 'genre' => 'rock'],
    ];

    return view('index', ["records" => $records]);
});