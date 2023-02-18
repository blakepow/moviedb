//add movie to watchlist in local storage
export const addToWatchlist = (movie) => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    const movieExists = watchlist.find((item) => item.id === movie.id);
    if (!movieExists) {
        watchlist.push(movie);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }
}

