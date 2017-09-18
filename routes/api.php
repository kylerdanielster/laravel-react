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

Route::get('/cube/cards/{cube}', 'CubeController@index');

//Could set up a custom controller CustomController@cubeCard

Route::get('/card/{card}', 'CardController@index');

// Leaving the request object for now, I may want this to be a post endpoint
Route::get('/search/{name}', function (Request $request, $name) {
    $client = new GuzzleHttpClient();

    $response = $client->request('GET',
        'https://api.scryfall.com/cards/named?fuzzy=' . $name);

// Will want to use this to get all versions later
//    $response = $client->request('GET',
//        'https://api.scryfall.com/cards/search?q=%2B%2B%21' . " . $name . ");

    return $response->getBody();
});

// Endpoint for adding a card to a cube, using attach?
//Route::post('/addCard'/
