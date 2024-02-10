const darkMode = document.querySelector('.switch input[type="checkbox"]');
const body = document.querySelector('body');
const boxevent = document.querySelector('.events-box');
const contacts = document.querySelectorAll('.contact');

darkMode.addEventListener('change', () => {
    if (darkMode.checked) {
		body.classList.add('dark-style');
        boxevent.style.background = '#333333';
        contacts.forEach(contact => {
            contact.style.color = 'white';
        });
	} 
    else {
        body.classList.remove('dark-style');
        boxevent.style.background = '#E9F1EE';
        contacts.forEach(contact => {
            contact.style.color = '#274F32';
        });
    }
});
