<?php

use Illuminate\Http\Request;
use GuzzleHttp\Client as GuzzleHttpClient;;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Leaving the request object for now, I may want this to be a post endpoint
Route::get('/search/{name}', function (Request $request, $name) {
    $client = new GuzzleHttpClient();

    $response = $client->request('GET',
        'https://api.scryfall.com/cards/named?fuzzy=' . $name);

    return $response->getBody();
});
