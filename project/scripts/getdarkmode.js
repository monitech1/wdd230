const darkMode = document.querySelector('.switch input[type="checkbox"]');
const body = document.querySelector('body');

// function to toggle dark mode
function activateDarkMode() {
    // check if the elements exist before attempting to apply changes
    if (body && boxevent && contacts && memberships) {
        // if dark mode is enabled
        if (darkMode.checked) {
            body.classList.add('dark-style');
        }
        // if dark mode is disabled
        else {
            body.classList.remove('dark-style');
            }
        }
    }

// check for dark mode preference
if (darkMode) {
    darkMode.addEventListener('change', activateDarkMode);
}

// call the function initially to apply dark mode settings if needed
activateDarkMode();