const params = window.location.pathname;

const renderNavbar = () => {
    const navbar = document.querySelector('#navbar');
    navbar.innerHTML = `
        <ul>
          <li class="${params === '/' && 'active'}"><a href="/">Home</a></li>
          <li class="${params === '/saved.html' && 'active'}"><a href="${params !== '/saved.html' ? 'saved.html' : ''}">Saved</a></li>
        </ul>
    `;
}

renderNavbar()

export default renderNavbar;
