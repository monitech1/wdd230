const url = "https://github.com/monitech1/wdd230/chamber/data/members.json";

const directory = document.querySelector('#directory');

const getMembers = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');
        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.href = `${member.website}`;
        website.textContent = `${member.website}`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        directory.appendChild(card);
    })
}

getMembers();
