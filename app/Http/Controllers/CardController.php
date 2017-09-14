<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CardController extends Controller
{
    public function index()
    {
        return Card::all();
    }
 
    public function show($id)
    {
        return Card::find($id);
    }

    public function store(Request $request)
    {
        return Card::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $article = Card::findOrFail($id);
        $article->update($request->all());

        return $article;
    }

    public function delete(Request $request, $id)
    {
        $article = Card::findOrFail($id);
        $article->delete();

        return 204;
    }
}
