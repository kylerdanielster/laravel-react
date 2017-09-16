<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CubeController extends Controller
{
    public function index()
    {
        return Cube::all();
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
