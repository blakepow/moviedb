//add movie to saved in local storage
export const addToSaved = (movie) => {
    const saved = JSON.parse(localStorage.getItem('saved')) || [];
    const movieExists = saved.find((item) => item.id === movie.id);
    if (!movieExists) {
        saved.push(movie);
        localStorage.setItem('saved', JSON.stringify(saved));
    }
}

export const removeFromSaved = (movie) => {
    const saved = JSON.parse(localStorage.getItem('saved')) || [];
    const newSaved = saved.filter((item) => item.id !== movie.id);
    localStorage.setItem('saved', JSON.stringify(newSaved));
}
