import {renderMovies} from "./renderMovies.js";

let category = 'popular';

const nowPlayingButton = document.querySelector('#now_playing');
nowPlayingButton.addEventListener('click', () => {
    renderMovies('now_playing');
});

const popularButton = document.querySelector('#popular');
popularButton.addEventListener('click', () => {
    renderMovies('popular');
});

const topRatedButton = document.querySelector('#top_rated');
topRatedButton.addEventListener('click', () => {
    renderMovies('top_rated');
});

const upcomingButton = document.querySelector('#upcoming');
upcomingButton.addEventListener('click', () => {
    renderMovies('upcoming');
});


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        renderMovies(button.id);
    });
})


renderMovies(category);


