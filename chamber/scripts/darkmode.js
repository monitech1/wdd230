
const darkMode = document.querySelector('.switch input[type="checkbox"]');
const body = document.querySelector('body');
const boxevent = document.querySelector('.events-box');
const contacts = document.querySelectorAll('.contact');
const memberships = document.querySelectorAll('.memberships');

// function to toggle dark mode
function toggleDarkMode() {
    // check if the elements exist before attempting to apply changes
    if (body && boxevent && contacts && memberships) {
        // if dark mode is enabled
        if (darkMode.checked) {
            body.classList.add('dark-style');
            memberships.forEach(membership => {
                membership.style.backgroundColor = '#333333';
            });
            boxevent.style.background = '#333333';
            contacts.forEach(contact => {
                contact.style.color = 'white';
            });
        }
        // if dark mode is disabled
        else {
            body.classList.remove('dark-style');
            memberships.forEach(membership => {
                membership.style.backgroundColor = '#E9F1EE';
            });
            boxevent.style.background = '#E9F1EE';
            contacts.forEach(contact => {
                contact.style.color = '#274F32';
            });
        }
    }
}

// check for dark mode preference
if (darkMode) {
    darkMode.addEventListener('change', toggleDarkMode);
}

// call the function initially to apply dark mode settings if needed
toggleDarkMode();
