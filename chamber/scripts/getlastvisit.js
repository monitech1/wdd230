const visitDisplay = document.getElementById('visits');

// Get the current time in milliseconds
const currentTime = Date.now();

// Get the ms of the last visit from localStorage or default to 0
let lastVisit = Number(localStorage.getItem('lastVisitTime')) || 0;

// Calculate the number of milliseconds in one day
const oneDayInMs = 1000 * 60 * 60 * 24;

// Calculate the number of days since the last visit
const daysSinceLastVisit = Math.floor((currentTime - lastVisit) / oneDayInMs);

// Calculate the number of minutes since the last visit
const minsSinceLastVisit = Math.ceil((currentTime - lastVisit) / (1000 * 60));

// Display message based on the time since the last visit
if (lastVisit == 0) {
    visitDisplay.innerHTML = `Welcome! Let us know if you have any questions.`;
} else if (daysSinceLastVisit == 0 && minsSinceLastVisit > 0) {
    visitDisplay.innerHTML = `Back so soon! Awesome!`;
} else if (daysSinceLastVisit == 1){ 
    visitDisplay.innerHTML = `You last visited 1 day ago!`;
} else {
    visitDisplay.innerHTML = `You last visited ${daysSinceLastVisit} days ago!`;
}

// Update last visit time in localStorage
localStorage.setItem('lastVisitTime', currentTime);

console.log('Last visit time:', lastVisit);
console.log('Current time:', currentTime);
console.log('Days since last visit:', daysSinceLastVisit);
console.log('Mins since last visit:', minsSinceLastVisit);
