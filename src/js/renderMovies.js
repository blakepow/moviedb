//change the category to see the different movies with buttons
import getMovies from "./getMovies.js";
import {addToSaved, removeFromSaved} from "./saveMovie.js";

const app = document.querySelector('#app');
const movieList = document.querySelector('.movie-list');

const savedMovies = JSON.parse(localStorage.getItem('saved')) || [];
const savedMoviesIds = savedMovies.map(movie => movie.id);


export const renderMovies = (category) => {
    movieList.classList.remove('loaded');

    //add active class to button
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('active');
    })
    document.querySelector(`#${category}`).classList.add('active');

    getMovies(category).then(data => {
        const {results} = data;
        movieList.innerHTML = '';
        results.forEach(movie => {
            const {title, poster_path, overview, release_date, vote_average, backdrop_path} = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            //check if movie is in watchlist
            if(savedMoviesIds.includes(movie.id)) {
                movieEl.classList.add('saved');
            }
            movieEl.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}">
                <article>
                    <h2>${title}</h2>
                </article>
            `;

            movieEl.addEventListener('click', () => {
                const movieDetails = document.createElement('div');
                movieDetails.innerHTML = `
                    <div class="movie-details-backdrop"></div>
                    <div class="movie-details">
                        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt="${movie.title}">
                        <article>
                            <h2>${title}</h2>
                            <p>${overview}</p>
                            <p>Release date: ${release_date}</p>
                            <p>Rating: ${vote_average}</p>
                            ${!savedMoviesIds.includes(movie.id) ? '<button class="watch_later">Save</button>' : '<span>Already saved</span>'}
                        </article>
                    </div>
                `;
                app.appendChild(movieDetails);

                const movieDetailsBackdrop = document.querySelector('.movie-details-backdrop');
                movieDetailsBackdrop.addEventListener('click', () => {
                    app.removeChild(movieDetails);
                })

                const watchLaterButton = document.querySelector('.watch_later');
                !savedMoviesIds.includes(movie.id) && watchLaterButton.addEventListener('click', () => {
                    addToSaved(movie);
                    movieEl.classList.add('saved');
                    watchLaterButton.remove();
                })

            })

            movieList.appendChild(movieEl);

        });
            movieList.classList.add('loaded');
    });
}

