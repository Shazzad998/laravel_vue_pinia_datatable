<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostStoreRequest;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index()
    {
        return response()->json(Post::orderBy('id', 'DESC')->paginate(10));
    }




    public function store(PostStoreRequest $request)
    {
        Post::create($request->validated());

        return response()->json("success");
    }

    public function show(Post $post)
    {
        //
    }



    public function update(Request $request, Post $post)
    {
        //
    }


    public function destroy(Post $post)
    {
        //
    }
}
