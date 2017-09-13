<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    public function cube()
    {
        // It should be noted that if belongsToMany does NOT limit 
        // the number of entries in the card and cube table, 
        // it should probibly not be used. Or rework the relationship
        return $this->belongsToMany(Cube::class, 'cube_cards');
    }
}
