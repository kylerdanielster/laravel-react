<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCubeCardPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
         Schema::create('cube_cards', function (Blueprint $table) {
             $table->integer('card_id')->unsigned()->index();
             $table->foreign('card_id')->references('id')->on('cards')->onDelete('cascade');
             $table->integer('cube_id')->unsigned()->index();
             $table->foreign('cube_id')->references('id')->on('cubes')->onDelete('cascade');
             $table->primary(['card_id', 'cube_id']);
         });
     }
 
     /**
      * Reverse the migrations.
      *
      * @return void
      */
     public function down()
     {
         Schema::drop('cube_cards');
     }
}
