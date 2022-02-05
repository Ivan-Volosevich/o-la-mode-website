
document.addEventListener('DOMContentLoaded', () => {
  const modalPopupThank = document.querySelector('#modal-popup-thank');

  modalPopupThank.onclick = function(e) {
    if (e.target == modalPopupThank) {
      modalPopupThank.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
      setTimeout(() => {
        modalPopupThank.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 4000)
    });    
  });

  observer.observe(modalPopupThank, { attributes : true, attributeFilter : ['style'] });

});