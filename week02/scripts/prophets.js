const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.getElementById('cards');

async function getProphetsData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);

    displayProphets(data.prophets);
}

const displayProphets = ((prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let infoDate = document.createElement('p');
        let infoPlace = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name}, ${prophet.lastname} `;

        infoDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        infoPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}, ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(infoDate);
        card.appendChild(infoPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
        
    });
});

getProphetsData();

