//change the category to see the different movies with buttons
import getMovies from "./getMovies.js";
import {addToWatchlist} from "./movieSelect.js";

const app = document.querySelector('#app');
const movieList = document.querySelector('#movie-list');

export const renderVideos = (category) => {
    getMovies(category).then(data => {
        movieList.innerHTML = '';
        data.results.forEach(movie => {
            const {title, poster_path, overview, release_date, vote_average, backdrop_path} = movie;
            const movieEl = document.createElement('div');
            movieEl.innerHTML = `
                <div class="movie">
                    <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}">
                    <article>
                        <h2>${title}</h2>
                    </article>
                </div>
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
                            <button class="watch_later">Save</button>
                        </article>
                    </div>
                `;
                app.appendChild(movieDetails);

                const movieDetailsBackdrop = document.querySelector('.movie-details-backdrop');
                movieDetailsBackdrop.addEventListener('click', () => {
                    app.removeChild(movieDetails);
                })

                const watchLaterButton = document.querySelector('.watch_later');
                watchLaterButton.addEventListener('click', () => {
                    addToWatchlist(movie);
                })

            })

            movieList.appendChild(movieEl);
        });
    });
}

