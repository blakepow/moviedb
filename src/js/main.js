import {renderVideos} from "./renderVideos.js";

let category = 'popular';

const nowPlayingButton = document.querySelector('#now_playing');
nowPlayingButton.addEventListener('click', () => {
    renderVideos('now_playing');
});

const popularButton = document.querySelector('#popular');
popularButton.addEventListener('click', () => {
    renderVideos('popular');
});

const topRatedButton = document.querySelector('#top_rated');
topRatedButton.addEventListener('click', () => {
    renderVideos('top_rated');
});

const upcomingButton = document.querySelector('#upcoming');
upcomingButton.addEventListener('click', () => {
    renderVideos('upcoming');
});


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        renderVideos(button.id);
    });
})


renderVideos(category);


