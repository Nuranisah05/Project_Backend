<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = News::all();
        if (!empty($news)) {
            $response = [
                'message' => 'Menampilkan data semua News',
                'data' => $news, 
            ];
            return response()->json($response, 200);
        } else {
            $response = [
                'massage' => 'Data tidak ada'
            ];
            return response()->json($response, 200);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $news = News::create($request->all());

        $response = [
            'message' => 'Data news berhasil dibuat',
            'data' => $news, 
        ];

        return response()->json($response, 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $news = News::find($id);

        if ($news) {
            $response = [
                'message' => 'get detail news',
                'data' => $news
            ];

            return response()->json($response, 200);
        } else {
            $response = [
                'message' => 'Data not found'
            ];

            return response()->json($response, 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $news = News::find($id);

        if ($news) {
            $response = [
                'message' => 'Data telah berahsil di update',
                'data' => $news -> update($request->all())
            ];
            return response()->json($response, 200);
        } else {
            $response = [
                'message' => 'Data not found'
            ];

            return response()->json($response, 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $news = News::find($id);

        if ($news) {
            $response = [
                'message' => 'Student is delate',
                'data' => $news->delate()
            ];

            return response()->json($response, 200);
        } else {
            $response = [
                'message' => 'Data not found'
            ];
 
            return response()->json($response, 404);
        }
    }
}
