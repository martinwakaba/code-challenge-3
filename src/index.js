// Define the API endpoint for movie data
const apiEndpoint = 'http://localhost:3000/films';

// Function to fetch movie data
async function fetchMovieData() {
    try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return [];
    }
}

// Function to display movie details and film list
function displayMovieDetailsAndList(movieData) {
    const filmsList = document.getElementById('films');
    const movieDetails = document.getElementById('movie-details');

    // Populate the film list
    filmsList.innerHTML = ''
    movieData.forEach((movie) => {
        const filmItem = document.createElement('li');
        filmItem.classList.add('film', 'item');
        filmItem.textContent = movie.title;

        // Add a click event listener to display movie details when clicked
        filmItem.addEventListener('click', () => {
            displayMovieDetails(movie);
        })

        filmsList.appendChild(filmItem);
    });

    // Display details of the first movie by default
    if (movieData.length > 0) {
        displayMovieDetails(movieData[0]);
    }
}
