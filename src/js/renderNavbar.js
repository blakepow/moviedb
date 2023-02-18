const params = window.location.pathname;

const renderNavbar = () => {
    const navbar = document.querySelector('#navbar');
    navbar.innerHTML = `
        <ul>
          <li class="${params === '/' && 'active'}"><a href="/">Home</a></li>
          <li class="${params === '/src/watchlist.html' && 'active'}"><a href="${params !== '/src/watchlist.html' ? './src/watchlist.html' : ''}">Watchlist</a></li>
        </ul>
    `;
}

renderNavbar()

export default renderNavbar;
