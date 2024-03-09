const gridBtn = document.querySelector('#directory-grid');
const listBtn = document.querySelector('#directory-list');
const display = document.querySelector('article');

gridBtn.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
});

listBtn.addEventListener('click', showList);

function showList() {
    display.classList.add('list');
    display.classList.remove('grid');
}
