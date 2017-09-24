<?php

use Illuminate\Http\Request;
use GuzzleHttp\Client as GuzzleHttpClient;;
use App\Cube;
use App\Card;

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

Route::resource('cube', 'CubeController');
Route::resource('card', 'CardController');

Route::get('/cube/{cube}/cards', function(Cube $cube) {
    return $cube->cards;    
});

Route::get('/card/{card}', function (Card $card) {
    return $card;
});

Route::get('/search/{name}', function ($name) {
    $client = new GuzzleHttpClient();

    //$response = $client->request('GET',
    //    'https://api.scryfall.com/cards/named?fuzzy=' . $name);

    $response = $client->request('GET',
        'https://api.scryfall.com/cards/search?q=%2B%2B%21' . " . $name . ");

    return $response->getBody();
});

// Endpoint for adding a card to a cube, using attach?
Route::post('/add/card/{cube}', function(Request $request, Cube $cube) {
    //return $request;
    // need to get or create the card in the db then attach the card in the db
    // get the items for the card off of the request object and pass them
    // into the firstOrCreate as an array of [key => value pairs]
    $card = Card::firstOrCreate(['name' => $request->name, 'set' => $request->set],
        ['name' => $request->name,
        'set' => $request->set,
        'image_uri' => $request->image_uri,
        'unique_id' => $request->unique_id]
    );  
    //return $card;
    return $cube->cards()->attach($card, ['name' => $card->name]);
});

// Endpoint for removing a card from a cube, using attach?
Route::post('/remove/card/{cube}', function(Request $request, Cube $cube) {
    //return $request;
    // Gets the card in the cube 
    $card = $cube->cards->where('name', $request->name);  
    //return $card;
    return $cube->cards()->detach($card);
});
