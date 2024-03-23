const url = "https://raw.githubusercontent.com/monitech1/wdd230/main/chamber/data/members.JSON";

const directory = document.querySelector('#directory');

/* getMembers is a function that fetches the json file
and displays the members listed in the directory */
const getMembers = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

/* displayMembers is a function that creates a card for each member
and displays the member's image, name, address, phone, and website */
const displayMembers = (members) => {
    members.forEach((member) => {
        // create the elements
        let card = document.createElement('section');
        let image = document.createElement('img');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        // set the card attributes
        card.setAttribute('max-width', '300px');

        // set the attributes and text content
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');
        image.setAttribute('target', '_blank'); // open the link in a new tab
        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.href = `${member.website}`;
        website.textContent = `${member.website}`;

        // append the elements to the card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        // append the card to the directory
        directory.appendChild(card);
    })
}

// call the getMembers function
getMembers();