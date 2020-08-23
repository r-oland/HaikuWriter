<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Haiku extends Model {
    protected $table = 'haiku';

    protected $fillable = [
        'title', 'line1', 'line2', 'line3',
    ];

}