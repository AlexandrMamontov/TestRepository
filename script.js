let tabsBtn = document.querySelectorAll('.hero__btn');
let tabsInfo = document.querySelectorAll('.hero__content');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('hero__btn--active')
    });

    e.currentTarget.classList.add('hero__btn--active');

    tabsInfo.forEach(function(element) {
      element.classList.remove('hero__content--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('hero__content--active');
  });
});