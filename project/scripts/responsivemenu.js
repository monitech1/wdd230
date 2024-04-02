const hamButton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');

/* when the hamburger button is clicked, toggle the open class
 on the mainnav and hamburger button */
hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hamButton.classList.toggle('open');
});