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
             // I am going to try simplifying this
             // If I dont have any issues, keep it simple
             $table->integer('card_id');//->unsigned()->index();
             //$table->foreign('card_id')->references('id')->on('cards')->onDelete('cascade');
             $table->integer('cube_id');//->unsigned()->index();
             //$table->foreign('cube_id')->references('id')->on('cubes')->onDelete('cascade');
             $table->string('name');
             $table->primary(['name', 'cube_id']);
             //$table->unique('cube_id', 'name');
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
