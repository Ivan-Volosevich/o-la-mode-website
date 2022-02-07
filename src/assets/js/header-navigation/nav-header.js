document.addEventListener("DOMContentLoaded", () => {
  const navShadow = document.getElementById('nav-shadow');
  const navMenuToggle = document.getElementById('toggle-nav');
  const navCloseMenuToggle = document.getElementById('close-nav-toggle');
  const headerLinks = document.querySelectorAll('.header__mobile a');

  navMenuToggle.onclick = function(){
    navMenuToggle.checked === true 
    ? navShadow.style.display = 'block'
    : navShadow.style.display = 'none';
    document.body.style.overflow = 'hidden'
  };

  navCloseMenuToggle.onclick = () => {
    navMenuToggle.checked = false;
    navShadow.style.display = 'none';
    document.body.style.overflow = 'auto'
  }

  navShadow.onclick = () => {
    navMenuToggle.checked = false;
    navShadow.style.display = 'none';
    document.body.style.overflow = 'auto'
  }

  for(let headerLink of headerLinks) {
    headerLink.onclick = function() {
      navMenuToggle.checked = false;
      navShadow.style.display = 'none';
      document.body.style.overflow = 'auto'
    }
  }
})
