<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Cube::class, function (Faker $faker) {
    return [
        'cube_name' => $faker->word,
        'user_id' => function () {
            return factory('App\User')->create()->id;
        }
    ];
});

$factory->define(App\Card::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'set' => $faker->word,
        'image_url' => $faker->imageUrl($width = 260, $height = 360),
        'unique_id' => $faker->uuid
    ];
});
