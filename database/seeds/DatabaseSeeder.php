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
        // ...maybe. Might be better to use tinker
        //for ($i=0; $i < 5; $i++)
        //{
        //    $this->call(UsersTableSeeder::class);
        //}
        
        // Really wish I knew the purpose of these
        // $this->call(App\Cube::class);
        // $this->call(App\Card::class);
        
        $cubeIds = App\Cube::pluck('id')->all();
        $allCards = App\Card::all();
        //$cardName = App\Card::pluck('name');
        //$cardIds = App\Card::pluck('id')->all();

        // This may fail. It might randomly get the same card
        // twice for a cube which is not allowed
        foreach($cubeIds as $cid) {
            $cards = $allCards->random(5);
            //$cardName = App\Card::pluck('name');
            //$cardIds = App\Card::pluck('id')->all();
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
