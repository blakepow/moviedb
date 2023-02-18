//get movies from local storage
const getMoviesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('watchlist'));
}

let watchlist = document.getElementById('watchlist');

//put the movies in the DOM
const renderMovies = () => {
    getMoviesFromLocalStorage().forEach(movie => {
        const movieEl = document.createElement('div');
        const { title, poster_path, overview, release_date, vote_average } = movie;
        movieEl.innerHTML = `
            <div class="movie">
                <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}">
                <article>
                    <h2>${title}</h2>
                    <p>${overview}</p>
                    <p>Release date: ${release_date}</p>
                    <p>Rating: ${vote_average}</p>
                    <button id="remove-btn">Remove</button>
                </article>
            </div>
        `;

        const removeButton = movieEl.querySelector('#remove-btn');
        removeButton.addEventListener('click', () => {
            removeMovie(movie);
            watchlist.removeChild(movieEl);
        })

        watchlist.appendChild(movieEl);
    })
}

const removeMovie = (movie) => {
    const movies = getMoviesFromLocalStorage();
    const newMovies = movies.filter(m => m.id !== movie.id);
    localStorage.setItem('watchlist', JSON.stringify(newMovies));
}

// getMoviesFromLocalStorage()
renderMovies(getMoviesFromLocalStorage())
