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
        $this->call(UsersTableSeeder::class);
        // $this->call(App\Cube::class);
        // $this->call(App\Card::class);
        
        $cubeIds = App\Cube::pluck('id')->all();
        $cardName = App\Card::pluck('name');
        $cardIds = App\Card::pluck('id')->all();

        foreach($cubeIds as $id) {
            foreach($cardIds as $cid) {
                DB::table('cube_cards')->insert([

                    'cube_id' => $id,

                    'card_id' => $cid
                ]);
            }
        }
        
    }
}
