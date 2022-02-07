document.addEventListener("DOMContentLoaded", () => {
  let lang = document.all[0].lang;
  localStorage.setItem('langClient', lang);
  
  const enLanguageStyles = document.querySelectorAll('.lang-switcher__en');
  const ruLanguageStyles = document.querySelectorAll('.lang-switcher__ru');

  goToEnPage = function () {
    document.location.href = '/en' + document.location.pathname;
  }

  goToRuPage = function () {
    document.location.href = document.location.pathname.replace(/^.{3}/, '');
  }

  if (document.location.pathname.slice(0, 3) == '/en') {
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