document.addEventListener('DOMContentLoaded', function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Set the copyright information in the first paragraph
    const copyrightParagraph = document.querySelector('footer p:first-child');
    if (copyrightParagraph) {
        const copyrightText = `© ${2024} Monigan Daniel, Ghana Kumasi`;
        copyrightParagraph.innerHTML = copyrightText;
    }

    // Get the last modified date
    const lastModifiedDate = new Date(document.lastModified);

    // Set the last modified date in the second paragraph
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last modified: ${lastModifiedDate.toDateString()}`;
    }
});
