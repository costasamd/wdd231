const url = './data/members.json';
const cards = document.getElementById('cards');

async function getBussinessData() {
    const response = await fetch(url);
    const data = await response.json();
//console.table(data.members);
    displayBussiness(data.member);
}

const displayBussiness = ((members) => {
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
        infoUrl.textContent = `${member.name} Website`;
        infoUrl.setAttribute('href', member.website);
        
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
})

getBussinessData();


