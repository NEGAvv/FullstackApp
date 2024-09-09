<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Services</title>
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="/css/style.css">
</head>
<body class="bg-gray-50">

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
        <h1 class="text-6xl font-bold head-text">Our Services</h1>
        <ul class="list-disc text-lg text-gray-700 space-y-4 mt-4">
            <li>Full Stack Development</li>
            <li>Java EE Development</li>
        </ul>
    </main>

</body>
</html>
