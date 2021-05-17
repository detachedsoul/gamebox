let navToggle           =   document.querySelector('.nav-toggle-btn');
let navContent          =   document.querySelector('.sidebar');
let searchToggleBtn     =   document.querySelector('.search-toggle-btn');
let searchContent       =   document.querySelector('.top-nav');

searchToggleBtn.addEventListener('click', () => {
    searchContent.classList.toggle('top-nav-show');
});

navToggle.addEventListener('click', () => {
    navContent.classList.toggle('show-sidebar');
    navToggle.classList.toggle('nav-toggle-close');
});