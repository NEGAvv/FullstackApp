@extends('layouts.layout')

@section('title', 'Create Advertisement')

@section('content')
    <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-3xl font-bold mb-6">Create New Advertisement</h1>

        <form action="/advertisements" method="POST">
            @csrf

            <div class="mb-4">
                <label for="title" class="block text-lg mb-1">Title</label>
                <input type="text" name="title" id="title" class="w-full border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-blue-500 transition" required>
            </div>

            <div class="mb-4">
                <label for="description" class="block text-lg mb-1">Description</label>
                <textarea name="description" id="description" class="w-full border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-blue-500 transition" required></textarea>
            </div>

            <div class="mb-4">
                <label for="category" class="block text-lg mb-1">Category</label>
                <input type="text" name="category" id="category" class="w-full border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-blue-500 transition" required>
            </div>

            <div class="mb-4">
                <label for="user_id" class="block text-lg mb-1">User ID</label>
                <input type="number" name="user_id" id="user_id" class="w-full border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-blue-500 transition" required>
            </div>

            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Submit</button>
        </form>

        <a href="/advertisements" class="text-blue-500 mt-4 inline-block hover:underline">Back to list</a>
    </div>
@endsection
