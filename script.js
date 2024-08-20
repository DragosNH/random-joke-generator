const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why couldn't the leopard play hide and seek? Because he was always spotted.",
    "What do you call a factory that makes good products? A satisfactory!"
];

// Function to show a random joke
function showRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const selectedJoke = jokes[randomIndex];
    document.querySelector('.jokeDisplay').textContent = selectedJoke;
}

document.querySelector('.btn').addEventListener('click', showRandomJoke);