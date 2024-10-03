<?php

namespace App\Http\Controllers;

use App\Models\Advertisement; 
use Illuminate\Http\Request;

class AdvertismentController extends Controller
{ 
    public function store(Request $request)
    {
        Advertisement::create($request->only(['title', 'description', 'category', 'user_id']));

        return redirect()->route('advertisements.index'); 
    }

    public function index()
    {
        // $advertisements = Advertisement::all();
        $advertisements = Advertisement::all()->unique("title");
        return view('advertisements.index', ['advertisements' => $advertisements]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $advertisement = Advertisement::findOrFail($id);
        $advertisement->update($request->only(['title', 'description']));

        return redirect()->route('advertisements.index'); 
    }

    public function destroy($id)
    {
        $advertisement = Advertisement::findOrFail($id);
        $advertisement->delete();
        return redirect()->route('advertisements.index'); 
    }

    public function show($id)
    {
        $advertisement = Advertisement::findOrFail($id);
        return view('advertisements.show', ['advertisement' => $advertisement]); 
    }

    public function create()
    {
        return view('advertisements.create'); 
    }

    public function edit($id)
    {
        $advertisement = Advertisement::findOrFail($id);
        return view('advertisements.edit', ['advertisement' => $advertisement]); 
    }
}
