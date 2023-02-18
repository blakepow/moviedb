const params = window.location.pathname;

const renderNavbar = () => {
    const navbar = document.querySelector('#navbar');
    navbar.innerHTML = `
        <ul>
          <li class="${params === '/' && 'active'}"><a href="/">Home</a></li>
          <li class="${params === '/watchlist.html' && 'active'}"><a href="${params !== '/watchlist.html' ? 'watchlist.html' : ''}">Watchlist</a></li>
        </ul>
    `;
}

renderNavbar()

export default renderNavbar;
