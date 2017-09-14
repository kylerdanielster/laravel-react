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
