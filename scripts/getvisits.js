const visitDisplay = document.getElementById('visits');

// Get the number of visits from local storage
let numVisits = Number(localStorage.getItem('numVisits-list')) || 0;

// Display the number of visits if there are any, otherwise display a welcome message
if (numVisits != 0) {
    visitDisplay.innerHTML = `Page Visits: ${numVisits}`;
} else {
    visitDisplay.innerHTML = `This is your first visit, welcome!`;
}

// Increment the number of visits and save it to local storage
numVisits++;
localStorage.setItem('numVisits-list', numVisits);