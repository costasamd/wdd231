// Date and Last Modified Script--------------------------------------------------//

const year = document.getElementById('year');
const lastmod = document.getElementById('lastModified');

const today = new Date();

year.innerHTML = `${today.getFullYear()} | Manchester UK`;
lastmod.innerHTML = `Last Modified: ${document.lastModified}`;

// Directory Script-----------------------------------------------------------------//

const url = './data/members.json';
const cards = document.querySelector('#cards');

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
//console.table(data.members);
    displayBusiness(data.member);
}

const displayBusiness = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        let bussinessName = document.createElement('h2');
        let infoAddress = document.createElement('p');
        let infoPhone = document.createElement('p');
        let infoUrl = document.createElement('a');
        let logo = document.createElement('img');
        let membershipLevel = document.createElement('h3');

        bussinessName.textContent = `${member.name} `;

        infoAddress.textContent = `Address: ${member.address}`;
        infoPhone.textContent = `Phone: ${member.phone}`;
        infoUrl.textContent = `Visit Website`;
        infoUrl.setAttribute('href', member.website);
        infoUrl.setAttribute('target', '_blank');
        
        logo.setAttribute('src', member.imageUrl);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        membershipLevel.textContent = `Membership: ${member.membershipLevel}`;

        card.appendChild(logo);
        card.appendChild(bussinessName);
        card.appendChild(infoAddress);
        card.appendChild(infoPhone);
        card.appendChild(infoUrl);
        card.appendChild(membershipLevel);

        cards.appendChild(card);
    });
}

getBusinessData();


// Navigation Script----------------------------------------------------------------//

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menuHam');

//add event listener//

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


