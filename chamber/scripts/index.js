// Date and Last Modified Script--------------------------------------------------//

const year = document.getElementById('year');
const lastmod = document.getElementById('lastModified');

const today = new Date();

year.innerHTML = `${today.getFullYear()} | Manchester UK`;
lastmod.innerHTML = `Last Modified: ${document.lastModified}`;



// Spotlight Script-----------------------------------------------------------------//

const spotlight = document.querySelector('#spotlight');
const urlSpot = './data/members.json';

async function getSpotlightData() {
    const response = await fetch(urlSpot);
    const data = await response.json();


    //console.table(data.members);
    displaySpotlight(data.member);
}

const displaySpotlight = (members) => {

    // Filter members with Gold or Silver membership
    const filteredMembers = members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');

    // Shuffle the filtered members array
    for (let i = filteredMembers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredMembers[i], filteredMembers[j]] = [filteredMembers[j], filteredMembers[i]];
    }

    // Select the first three members from the shuffled array
    const selectedMembers = filteredMembers.slice(0, 3);

    selectedMembers.forEach(member => {
        let card = document.createElement('div');
        card.classList.add('highlight');

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
        logo.setAttribute('width', '250');
        logo.setAttribute('height', '150');

        membershipLevel.textContent = `Membership: ${member.membershipLevel}`;

        card.appendChild(logo);
        card.appendChild(bussinessName);
        //card.appendChild(infoAddress);
        card.appendChild(infoPhone);
        card.appendChild(infoUrl);
        card.appendChild(membershipLevel);

        spotlight.appendChild(card);
    });
}
    
getSpotlightData();
