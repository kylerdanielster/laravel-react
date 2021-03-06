<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Card extends Model
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
        'name', 'set', 'image_uri', 'unique_id'
    ];

    public function cube()
    {
        // It should be noted that if belongsToMany does NOT limit 
        // the number of entries in the card and cube table, 
        // it should probibly not be used. Or rework the relationship
        return $this->belongsToMany(Cube::class, 'cube_cards');
    }

    // This changes the route to get by name instead of id
    // api/cube/cards/Brainstorm - case sensitive
    public function getRouteKeyName()
    {
        return 'name';
    }
}
