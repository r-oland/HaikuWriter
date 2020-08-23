<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Line extends Model {
    protected $table = 'line';

    protected $fillable = [
        'line1', 'line2', 'line3',
    ];
}