<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    public function cube()
    {
        return $this->belongsTo('App\Cube');
    }
}
