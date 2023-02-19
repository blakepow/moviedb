//get movies from local storage
import {removeFromSaved} from "./saveMovie.js";

const getMoviesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('saved'));
}

let saved = document.getElementById('saved-movies');

//put the movies in the DOM
const renderMovies = () => {
    getMoviesFromLocalStorage().forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        const { title, poster_path, overview, release_date, vote_average, backdrop_path } = movie;
        movieEl.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt="${title}">
            <article>
                <h2>${title}</h2>
                <p>${overview}</p>
                <p>Release date: ${release_date}</p>
                <p>Rating: ${vote_average}</p>
                <button id="remove-btn">Remove</button>
            </article>
        `;

        const removeButton = movieEl.querySelector('#remove-btn');
        removeButton.addEventListener('click', () => {
            removeFromSaved(movie);
            saved.removeChild(movieEl);
        })

        saved.appendChild(movieEl);
    })
}

// getMoviesFromLocalStorage()
renderMovies(getMoviesFromLocalStorage())
