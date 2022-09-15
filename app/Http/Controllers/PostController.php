<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostStoreRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index()
    {
        return PostResource::collection(Post::orderBy('id', 'DESC')->paginate(10));
    }




    public function store(PostStoreRequest $request)
    {


        $image_name = '';
        $image_path = '';
        $file = $request->file('image');
        if ($file) {
            $image_name = date('YmdHis') . "-" . $request->title . "." . $file->getClientOriginalExtension();
            $file->move(public_path('images/posts'), $image_name);
            $image_path = 'images/posts/' . $image_name;
        }


        Post::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $image_path,
            'is_published' => $request->is_published === 'true' ? true : false,
        ]);

        return response()->json("success");
    }

    public function show(Post $post)
    {
        return new PostResource($post);
    }



    public function update(PostStoreRequest $request, Post $post)
    {

        $image_name = '';
        $image_path = $post->image;
        $file = $request->file('image');
        if ($file) {

            $image_name = date('YmdHis') . "-" . $request->title . "." . $file->getClientOriginalExtension();
            $file->move(public_path('images/posts'), $image_name);

            if (is_file(public_path($image_path))) {
                unlink(public_path($image_path));
            }
            $image_path = 'images/posts/' . $image_name;
        }
        $post->update([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $image_path,
            'is_published' => $request->is_published === 'true' ? true : false,
        ]);
        return response()->json('success');
    }


    public function destroy(Post $post)
    {
        if (is_file(public_path($post->image))) {
            unlink(public_path($post->image));
        }
        $post->delete();
        return response()->json('success');
    }
}
