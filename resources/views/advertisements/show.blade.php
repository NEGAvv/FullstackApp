@extends('layouts.layout')

@section('title', 'Advertisement Details')

@section('content')
    <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-3xl font-bold mb-4">{{ $advertisement->title }}</h1>
        <p class="text-lg mb-2">{{ $advertisement->description }}</p>
        <p class="text-gray-500 mb-4">Category: <span class="font-semibold">{{ $advertisement->category }}</span></p>

        <div class="flex space-x-4 mt-4">
            <a href="/advertisements/{{ $advertisement->id }}/edit" class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors">Edit</a>

            <form action="/advertisements/{{ $advertisement->id }}" method="POST" class="inline">
                @csrf
                @method('DELETE')
                <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">Delete</button>
            </form>
        </div>

        <a href="/advertisements" class="text-blue-500 mt-4 inline-block hover:underline">Back to list</a>
    </div>
@endsection
