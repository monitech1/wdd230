// create elements to link to the document
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// create an event listener for the button
button.addEventListener('click', () => {

    // check if the input value is not empty
    if (input.value != '') {

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
    });

// add an event listener for the input to allow the user to 
// press the enter key to add a new list item 
input.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        button.click();
    }
});

// create an array of list items or an empty array
let chaptersArray = getChapterList() || [];

// populate the list with the array of list items
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// function to save the list to local storage
function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
};

// function to retrieve the list from local storage
function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
};

// function to delete a list item from the array
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character which is the X button
    chaptersArray = chaptersArray.filter((item) => item !== chapter); // return everyhting expect the chapter to be deleted
    setChapterList();
};

// function to display the list
function displayList(chapter) {
    // create a new list item and a delete button
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    
    // add the input value to the list item and the delete 
    // button to the list item
    li.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');        
    li.append(deleteButton);
    list.append(li);
    // input.value = ''; // clear the input value (for convenience)

    // add an event listener for the delete button
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
        // input.value = '';
    });
    input.focus();
};
