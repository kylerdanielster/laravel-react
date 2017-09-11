<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cube extends Model
{
    public function cards()
    {
        return $this->hasMany('App\Card');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
