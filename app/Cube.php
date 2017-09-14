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
    // something like that
    // So their will be cubes and cards and attaching them creates
    // the relationship in the pivot table
    // Will need to make sure my database calls are not n+1 

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
