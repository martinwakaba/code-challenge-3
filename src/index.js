// Making sure the DOM loads first before displaying the movies
document.addEventListener('DOMContentLoaded', fetchMovieData)

// Define the API endpoint for movie data
const apiEndpoint = 'https://my-json-server.typicode.com/martinwakaba/code-challenge-3/films';

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
        let rand = Math.floor(Math.random() * movieData.length)
        displayMovieDetails(movieData[rand]);
    }
}

// Function to display movie details
function displayMovieDetails(movie) {
    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p>Runtime: ${movie.runtime} mins</p>
        <p>Showtime: ${movie.showtime}</p>
        <p>Available Tickets: ${movie.capacity - movie.tickets_sold}</p>
        <button id="buy-ticket">Buy Ticket</button>
    `

    // Add a click event listener for the "Buy Ticket" button
    const buyTicketButton = document.getElementById('buy-ticket');
    buyTicketButton.addEventListener('click', () => {
        if (movie.capacity > movie.tickets_sold) {
            movie.tickets_sold++;
            alert('You bought a ticket')
            displayMovieDetails(movie);
        } else {
           let btn =  document.querySelector("#buy-ticket");
           btn.textContent = 'Sold Out';
           alert('Sorry, This Movie is Sold Out')

        }
    })
}

// trying to use the load event listener it did take a while to navigate through it but it did work
window.addEventListener('load', async () => {
    const movieData = await fetchMovieData();

    if (movieData.length > 0) {
        displayMovieDetailsAndList(movieData);
    } else {
        alert('Error loading movie data. Please try again later.');
    }
})
