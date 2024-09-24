<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class AdvertismentController extends Controller
{ 
    public function store(Request $request)
    {
        DB::table('advertisements')->insert([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'category' => $request->input('category'),
            'user_id' => $request->input('user_id'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect()->route('advertisements.index'); 
    }

    public function index()
    {
        $advertisements = DB::table('advertisements')->get();
        return view('advertisements.index', ['advertisements' => $advertisements]);
    }

    public function update(Request $request, $id)
    {
        DB::table('advertisements')
            ->where('id', $id)
            ->update([
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'updated_at' => now(),
            ]);

        return redirect()->route('advertisements.index'); 
    }

    public function destroy($id)
    {
        DB::table('advertisements')->where('id', $id)->delete();
        return redirect()->route('advertisements.index'); 
    }

    public function show($id)
    {
        $advertisement = DB::table('advertisements')->where('id', $id)->first();

        if (!$advertisement) {
            abort(404, 'Advertisement not found');
        }

        return view('advertisements.show', ['advertisement' => $advertisement]); 
    }

    public function create()
    {
        return view('advertisements.create'); 
    }

    public function edit($id)
    {
        $advertisement = DB::table('advertisements')->where('id', $id)->first();

        if (!$advertisement) {
            abort(404, 'Advertisement not found');
        }

        return view('advertisements.edit', ['advertisement' => $advertisement]); 
    }
}
