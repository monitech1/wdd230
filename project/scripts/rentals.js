
const urlrentals = "https://github.com/monitech1/wdd230/blob/main/project/data/rentals.json";

const rentalsInfo = document.querySelector('#rentals');

const getRentals = async () => {
    try {
        const response = await fetch(urlrentals);
        const data = await response.json();
        displayRentals(data.rentals);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let rentalType = document.createElement('h3');
        let numberPerson = document.createElement('p');
        let milleage = document.createElement('p');
        let insurance = document.createElement('p');
        let pricehalfday = document.createElement('h4');
        let pricefullday = document.createElement('h4');

        card.setAttribute('max-width', '300px');
        card.classList.add('rentals-card');

        image.setAttribute('src', rental.image);
        image.setAttribute('alt', `Logo of ${rental.rentaltype}`);
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');
        image.setAttribute('target', '_blank');
        image.classList.add('rentals-image');
        rentalType.textContent = `${rental.rentaltype}`;
        rentalType.classList.add('rentals-info');
        numberPerson.classList.add('rentals-info');
        if (rental.numberperson > 1) {
            numberPerson.textContent = `${rental.numberperson} persons`;
        } else {
            numberPerson.textContent = `${rental.numberperson} person`;
        }
        milleage.textContent = `✔️ Unlimited milleage`;
        milleage.classList.add('rentals-info');
        insurance.textContent = `✔️ Damage insurance included`;
        insurance.classList.add('rentals-info');
        pricehalfday.textContent = `Half Day: ${rental.reservation.halfday}`;
        pricehalfday.classList.add('pricehd');
        pricefullday.textContent = `Full Day: ${rental.reservation.fullday}`;
        pricefullday.classList.add('pricefd');

        card.appendChild(image);
        card.appendChild(rentalType);
        card.appendChild(numberPerson);
        card.appendChild(milleage);
        card.appendChild(insurance);
        card.appendChild(pricehalfday);
        card.appendChild(pricefullday);

        rentalsInfo.appendChild(card);
    })
}

getRentals();
