# FLATDANGO MOVIES Web App

## Overview

FLATDANGO MOVIES is a web application that displays a list of movies and their details. It ensures that the DOM (Document Object Model) is fully loaded before displaying the movie data. Users can click on a movie in the list to view its details, and if tickets are available, they can buy them.

## Getting Started

Before you begin using the FLATDANGO MOVIES web app, ensure that you have set up the required environment and dependencies.

1. Clone or download the project from the [FLATDANGO MOVIES repository](https://github.com/your-repo-url).

2. Open the project folder in your preferred code editor.

3. If necessary, make any desired changes to the code or configuration.

4. Launch a local development server or use your preferred method to serve the web app.

5. Open a web browser and navigate to the URL where the app is being served (e.g., http://localhost:your-port).

6. You should now see the FLATDANGO MOVIES web app in action.

## Code Explanation

The FLATDANGO MOVIES web app is built using JavaScript and relies on the following main code components:

- **DOMContentLoaded Event Listener**: This event listener ensures that the DOM is fully loaded before executing the `fetchMovieData` function. It helps prevent issues related to manipulating the DOM elements before they are available.

- **API Endpoint**: The `apiEndpoint` variable holds the URL where movie data is fetched from. In this code, it's set to `http://localhost:3000/films`, but you should replace it with the actual API endpoint you intend to use.

- **fetchMovieData Function**: This function uses the Fetch API to request movie data from the specified API endpoint. If successful, it returns the data; otherwise, it logs an error.

- **displayMovieDetailsAndList Function**: This function populates the movie list in the DOM and sets up click event listeners on each movie item. When a movie is clicked, it calls the `displayMovieDetails` function to display its details.

- **displayMovieDetails Function**: This function displays the details of a selected movie in the DOM, including the movie's poster, title, runtime, showtime, available tickets, and a "Buy Ticket" button. Clicking the "Buy Ticket" button allows users to purchase tickets if they are available.

- **Load Event Listener**: This event listener, attached to the `window`, ensures that the web app waits for all resources to load before attempting to fetch and display movie data.

## Usage

To use the FLATDANGO MOVIES web app:

1. Open the app in a web browser.

2. The movie list is displayed on the left, and the details of the first movie are shown by default on the right.

3. Click on any movie in the list to view its details.

4. If tickets are available for a movie, you can click the "Buy Ticket" button to purchase one. The available ticket count will decrease, and you'll see an alert if the showing is sold out.

## Troubleshooting

If you encounter any issues with the app, such as an error loading movie data or other unexpected behavior, consider the following:

- Check that the API endpoint (specified in `apiEndpoint`) is correct and accessible.
- Verify that the movie data follows the expected format.
- Ensure that your development environment is correctly set up, and the server is running.

For further assistance, please refer to the documentation or contact the developers.

Enjoy using FLATDANGO MOVIES!