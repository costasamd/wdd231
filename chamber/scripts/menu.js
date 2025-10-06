const menu = document.querySelector('.navigation');
const hambutton = document.querySelector('#menuHam');

//add event listener//

hambutton.addEventListener('click', () => {
    menu.classList.toggle('show');
    hambutton.classList.toggle('show');
});

