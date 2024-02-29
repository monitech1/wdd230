const range = document.querySelector('#rating');

range.addEventListener('change', getRating);
range.addEventListener('input', getRating);

/* get the rating */
function getRating() {
    range.innerHTML = range.value;
}
