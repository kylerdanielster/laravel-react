<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CubeController extends Controller
{
    public function index()
    {
        return Cube::all();
    }
 
    public function show($id)
    {
        return Cube::find($id);
    }

    public function store(Request $request)
    {
        return Cube::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $article = Cube::findOrFail($id);
        $article->update($request->all());

        return $article;
    }

    public function delete(Request $request, $id)
    {
        $article = Cube::findOrFail($id);
        $article->delete();

        return 204;
    }
}
