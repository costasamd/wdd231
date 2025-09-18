const url = 'https://github.com/costasamd/wdd231/blob/main/chamber/data/members.json';
const cards = document.getElementById('cards');

async function getBussinessData() {
    const response = await fetch(url);
    const data = await response.json();
//console.table(data.members);
    displayBussiness(data.members);
}

const displayBussiness = ((members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        let bussinessName = document.createElement('h2');
        let infoAddress = document.createElement('p');
        let infoPhone = document.createElement('p');
        let infoUrl = document.createElement('a');
        let logo = document.createElement('img');

        bussinessName.textContent = `${member.name} `;

        infoAddress.textContent = `Address: ${member.address}`;
        infoPhone.textContent = `Phone: ${member.phone}`;
        infoUrl.textContent = `Website: ${member.url}`;
        infoUrl.setAttribute('href', member.url);
        
        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        card.appendChild(logo);
        card.appendChild(bussinessName);
        card.appendChild(infoAddress);
        card.appendChild(infoPhone);
        card.appendChild(infoUrl);

        cards.appendChild(card);
    });
})

getBussinessData();


