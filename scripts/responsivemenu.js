const hamButton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hamButton.classList.toggle('open');
});