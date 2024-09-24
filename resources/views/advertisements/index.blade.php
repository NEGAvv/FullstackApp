@extends('layouts.layout')

@section('title', 'Advertisements')

@section('content')
    <h1 class="text-3xl font-bold mb-6">All Advertisements</h1>

    <a href="/advertisements/create" class="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block hover:bg-blue-600 transition duration-300">Add New Advertisement</a>

    @if($advertisements->isEmpty())
        <p class="text-gray-600">No advertisements available.</p>
    @else
        <ul class="space-y-4">
        @foreach($advertisements as $advertisement)
            <li class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <a href="/advertisements/{{ $advertisement->id }}" class="text-lg font-semibold text-blue-500 hover:text-blue-600">{{ $advertisement->title }}</a>
                <p class="text-gray-700 mt-1">{{ $advertisement->description }}</p>
                <div class="mt-2 flex justify-between items-center">
                    <div class="flex-grow text-sm text-gray-500">
                        {{ \Carbon\Carbon::parse($advertisement->created_at)->format('d M, Y') }}
                    </div>
                    <div class="flex space-x-2">
                        <a href="/advertisements/{{ $advertisement->id }}/edit">
                            <button class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-colors">Edit</button>
                        </a>
                        <form action="/advertisements/{{ $advertisement->id }}" method="POST" class="inline">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-colors">Delete</button>
                        </form>
                    </div>
                </div>
            </li>
        @endforeach
        </ul>
    @endif
@endsection
