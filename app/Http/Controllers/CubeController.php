<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cube;

class CubeController extends Controller
{
    // This version with the Cube param may become 
    // part of a new controller and change to index()
    public function index(Cube $cube)
    {
        return $cube->cards;
        //return Cube::all();
    }
 
    public function show(Cube $cube)
    {
        return $cube;
    }

    public function store(Request $request)
    {
        $cube = Cube::create($request->all());

        return response()->json($cube, 201);
    }

    public function update(Request $request, Cube $cube)
    {
        $cube->update($request->all());

        return response()->json($cube, 200);
    }

    public function delete(Cube $cube)
    {
        $cube->delete();

        return response()->json(null, 204);
    }
}
