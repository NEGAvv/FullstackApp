@extends('layouts.layout')

@section('title', 'Edit Advertisement')

@section('content')
    <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-3xl font-bold mb-6">Edit Advertisement</h1>

        <form action="/advertisements/{{ $advertisement->id }}" method="POST">
            @csrf
            @method('PUT')

            <div class="mb-4">
                <label for="title" class="block text-lg mb-1">Title</label>
                <input type="text" name="title" id="title" value="{{ $advertisement->title }}" class="w-full border border-gray-300 rounded p-2 focus:border-yellow-500 focus:ring-yellow-500 transition">
            </div>

            <div class="mb-4">
                <label for="description" class="block text-lg mb-1">Description</label>
                <textarea name="description" id="description" class="w-full border border-gray-300 rounded p-2 focus:border-yellow-500 focus:ring-yellow-500 transition">{{ $advertisement->description }}</textarea>
            </div>

            <button type="submit" class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors">Update</button>
        </form>

        <a href="/advertisements" class="text-blue-500 mt-4 inline-block hover:underline">Back to list</a>
    </div>
@endsection
