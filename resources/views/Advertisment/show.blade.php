<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $advertisment['title'] }}</title>
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="/css/style.css">
</head>
<body class="bg-gray-100">

    <nav class="w-full main-color py-4 text-center fixed top-0 left-0 z-10">
        <div class="w-[80%] mx-auto flex items-center justify-between">
            <a href="/" class="text-white text-2xl font-bold hover:text-yellow-300">
                Fullstack App
            </a>

            <div class="flex space-x-4">
                <a href="/home" class="text-white hover:text-yellow-300">Home</a>
                <a href="/about" class="text-white hover:text-yellow-300">About</a>
                <a href="/services" class="text-white hover:text-yellow-300">Services</a>
                <a href="/contact" class="text-white hover:text-yellow-300">Contact</a>
            </div>
        </div>
    </nav>

    <main class="flex flex-col items-center justify-center min-h-screen pt-16">
    <div class="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 class="text-xl font-bold mb-4 head-text">{{ $advertisment['title'] }}</h1>
        <p class="text-gray-700 mb-2"><strong>Category:</strong> {{ $advertisment['category'] }}</p>
        <p class="text-gray-700 mb-4">{{ $advertisment['description'] }}</p>
        <p class="text-sm text-gray-500">Posted by User ID: {{ $advertisment['user_id'] }}</p>
    </div>

    </main>

</body>
</html>
