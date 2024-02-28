// get the current year and insert it into the footer
document.querySelector('#year').textContent = new Date().getFullYear();

// get the last modified date and insert it into the footer
document.querySelector('#lastModified').textContent = document.lastModified;