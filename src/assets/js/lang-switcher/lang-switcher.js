document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("langClient") === null || localStorage.getItem("langClient") === 'en') {
    if (document.location.pathname.slice(0, 3) !== '/en') {
      document.location.pathname = '/en' + document.location.pathname;
    } else {
      localStorage.setItem('langClient', document.all[0].lang);
    }
  } else if (localStorage.getItem("langClient") === 'ru') {
    if (document.location.pathname.slice(0, 3) === '/en') {
      document.location.pathname = document.location.pathname.slice(3, document.location.pathname.length);
    } else {
      localStorage.setItem('langClient', document.all[0].lang);
    }
  }
  
  const enLanguageStyles = document.querySelectorAll('.lang-switcher__en');
  const ruLanguageStyles = document.querySelectorAll('.lang-switcher__ru');

  goToEnPage = function() {
    localStorage.setItem('langClient', 'en');
    return document.location.href = '/en' + document.location.pathname;
  }

  goToRuPage = function() {
    localStorage.setItem('langClient', 'ru');
    return document.location.href = document.location.pathname.replace(/^.{3}/, '');
  }

  if (document.location.pathname.slice(0, 3) === '/en') {
    for (let enLanguageStyle of enLanguageStyles) {
      enLanguageStyle.classList.add("lang-weight__bold");
    }
    for (let ruLanguageStyle of ruLanguageStyles) {
      ruLanguageStyle.classList.remove("lang-weight__bold");
    }
  } else {
    for (let enLanguageStyle of enLanguageStyles) {
      enLanguageStyle.classList.remove("lang-weight__bold");
    }
    for (let ruLanguageStyle of ruLanguageStyles) {
      ruLanguageStyle.classList.add("lang-weight__bold");
    }
  }
})