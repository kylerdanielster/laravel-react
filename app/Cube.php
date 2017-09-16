<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cube extends Model
{
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
     protected $guarded = ['id'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
     protected $fillable = [
        'cube_name', 'user_id'
    ];

    // Assign (the method is 'attatch(*value or model)') cards to the cube 
    // using the pivot_table 'cube_cards'
    // If I understand correctly, Cube->CardElement->attatch(card) or detatch(card)
    // $cube = App\Cube::first(); find a cube
    // $card = App\Card::where([ (name/id) ], 'brainstorm/1234')->first(); find a card
    // $cube->cards()->attach($card[->id]); Create the relationship on the pivot table
    // So their will be cubes and cards and attaching/detaching them creates deletes
    // the relationship in the pivot table
    // Will need to make sure my database calls are not n+1. This should fo it
    // App\Cube::with('cards')->get();

    public function cards()
    {
        // It should be noted that if belongsToMany does NOT limit 
        // the number of entries in the card and cube table, 
        // it should probibly not be used. Or rework the relationship
        return $this->belongsToMany(Card::class, 'cube_cards');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
