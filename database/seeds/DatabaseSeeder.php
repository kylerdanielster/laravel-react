<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Uncomment and run some # of times (for loop) to re seed db
        // ...maybe. For now it is better to use tinker
        // First register a user (may only need 1), then
        // factory('App\Cube', 10)->create() creates users too
        // then create a cube manually for that user, then
        // factory('App\Card', 250)->create()
        //
        //for ($i=0; $i < 5; $i++)
        //{
        //    $this->call(UsersTableSeeder::class);
        //}
        
        // Just here for reference
        //$cardName = App\Card::pluck('name');
        //$cardIds = App\Card::pluck('id')->all();

        $cubeIds = App\Cube::pluck('id')->all();
        // This may fail. It might randomly get the same card
        // twice for a cube which is not allowed
        foreach($cubeIds as $cid) {
            $cards = App\Card::all()->random(5);
            foreach($cards as $card) {
                DB::table('cube_cards')->insert([

                    'cube_id' => $cid,
                    'name' => $card->name,
                    'card_id' => $card->id
                ]);
            }
        }
        
    }
}
