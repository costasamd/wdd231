const menu = document.querySelector('.navigation-index');
const hambutton = document.querySelector('#menuHam-index');

//add event listener//

hambutton.addEventListener('click', () => {
    menu.classList.toggle('show');
    hambutton.classList.toggle('show');
});

