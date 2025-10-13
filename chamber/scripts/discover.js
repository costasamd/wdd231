// Date and Last Modified Script--------------------------------------------------//

const year = document.getElementById('year');
const lastmod = document.getElementById('lastModified');

const today = new Date();

year.innerHTML = `${today.getFullYear()} | Manchester UK`;
lastmod.innerHTML = `Last Modified: ${document.lastModified}`;

// Directory Script-----------------------------------------------------------------//

const url = './data/places.json';
const cards = document.querySelector('#cards');

async function getPlacesData() {
    const response = await fetch(url);
    const data = await response.json();
//console.table(data.members);
    displayPlaces(data.places);
}

const displayPlaces = (places) => {
    places.forEach(place => {
        let card = document.createElement('section');
        let placeName = document.createElement('h2');
        let placeAddress = document.createElement('p');
        let placeDesc = document.createElement('p');
        let photo = document.createElement('img');
        let learn = document.createElement('button');
        

        placeName.textContent = `${place.name} `;

        photo.setAttribute('src', place.image);
        photo.setAttribute('alt', `Logo of ${place.name}`);
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', '300');
        photo.setAttribute('height', '200');

        placeDesc.textContent = `${place.description}`;
        placeAddress.textContent = `${place.address}`;
        learn.textContent = 'Learn More';

        card.appendChild(placeName);
        card.appendChild(photo);
        card.appendChild(placeDesc);
        card.appendChild(placeAddress);
        card.appendChild(learn);

        cards.appendChild(card);
    });
}

getPlacesData();


// Navigation Script----------------------------------------------------------------//

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menuHam');

//add event listener//

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


// Local storage for visits----------------------------//

const message = document.querySelector('#msg');

let numVisits = Number(window.localStorage.getItem("visits")) || 0;

//store date--------------//

let dateSys = Number(localStorage.getItem("date"));

let timeStamp = Date.now();

const msToDay = 86400000; 

//convey message to user--------------//


if (numVisits === 0) {
    message.textContent = 'Welcome! Let us know if you have any questions.';
} else {

    const lastVisit = Math.floor((timeStamp - dateSys) / msToDay);

    if (lastVisit < 1) {
        message.textContent = 'Back so soon! Awesome!';
    } else {
        message.textContent = `Your last visit was ${lastVisit} day(s) ago.`
    }
}

//increase visit count-----------//

numVisits++;
localStorage.setItem("visits", numVisits);

//save new date----------------//

localStorage.setItem("date", timeStamp);