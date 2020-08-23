<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

// HAIKU
Route::get('allHaikus', 'API\HaikuController@index');
Route::post('newHaiku', 'API\HaikuController@store');
Route::post('deleteHaiku', 'API\HaikuController@destroy');

// LINE
Route::get('allLines', 'API\LineController@index');
Route::post('newLine', 'API\LineController@store');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});