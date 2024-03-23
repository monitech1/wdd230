
const pleinfeux = document.querySelector('.plein-feux');

const url = "https://raw.githubusercontent.com/monitech1/wdd230/main/chamber/data/members.JSON";

/* getSpotlight is a function that fetches the json file
and displays the members listed in the spotlight */
const getSpotlight = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json()
            displaySpotlight(data.members)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
};

/* displaySpotlight is a function that creates a card for each silver or gold 
member of the Chamber and displays the member's logo, name, address, phone, and website */
const displaySpotlight = (members) => {
    // filter the members array to only include gold and silver members
    let randomMembers = members.filter(member => 
        member.membership === "gold" || member.membership === "silver"); 
    
    randomMembers.sort(() => Math.random() - 0.5); // shuffle the array
    let spotlightMembers = randomMembers.slice(0, 3); // get the first 3 members in the shuffled array
    
    spotlightMembers.forEach((member) => {
        let spotlightCard = document.createElement('section');
        spotlightCard.classList.add('spotlight-card');  // add a class to the card
        
        let cardBox = document.createElement('div');
        cardBox.classList.add('card-img'); // add a class to the card-img
        spotlightCard.appendChild(cardBox);
        
        let picture = document.createElement('picture');
        cardBox.appendChild(picture);
        
        let sourcePic = document.createElement('source');
        sourcePic.setAttribute('srcset', member.image.replace('300.webp', '180.webp'));
        sourcePic.setAttribute('media', '(max-width: 200px)');
        picture.appendChild(sourcePic);

        let image = document.createElement('img');
        image.classList.add('card-img'); // add a class to the image
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');
        image.setAttribute('target', '_blank'); // open the link in a new tab
        picture.appendChild(image);
        
        let name = document.createElement('h3');
        let email = document.createElement('p');
        email.classList.add('contact'); // add a class to the email
        let phone = document.createElement('p');
        phone.classList.add('contact'); // add a class to the phone
        let website = document.createElement('a');
        website.classList.add('contact'); // add a class to the website
        
        name.textContent = `${member.name}`;
        email.textContent = `${member.email}`;
        phone.textContent = `${member.phone}`;
        website.href = `${member.website}`;
        website.textContent = `${member.website}`;

        spotlightCard.appendChild(name);
        spotlightCard.appendChild(email);
        spotlightCard.appendChild(phone);
        spotlightCard.appendChild(website);

        pleinfeux.appendChild(spotlightCard);

    });
};

getSpotlight();
