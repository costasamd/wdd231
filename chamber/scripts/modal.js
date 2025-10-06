const npOpen = document.querySelector('#npbtn');
const dialogprofit = document.querySelector('#nonProfit');
const npClose = document.querySelector('#npClose');

// function to show the dialogs

npOpen.addEventListener("click", () => {
    dialogprofit.showModal();
});

npClose.addEventListener("click", () => {
    dialogprofit.close(); 
});

// bronze membership

const bronzeOpen = document.querySelector('#bronzebtn');
const dialogBronze = document.querySelector('#brDialog');
const bronzeClose = document.querySelector('#bronzeClose');

// function to show the dialogs

bronzeOpen.addEventListener("click", () => {
    dialogBronze.showModal();
});

bronzeClose.addEventListener("click", () => {
    dialogBronze.close();
});

// silver membership

const silverOpen = document.querySelector('#silverbtn');
const dialogSilver = document.querySelector('#silDialog');
const silverClose = document.querySelector('#silverClose');

// function to show the dialogs

silverOpen.addEventListener("click", () => {
    dialogSilver.showModal();
});

silverClose.addEventListener("click", () => {
    dialogSilver.close();
});

// gold membership

const goldOpen = document.querySelector('#goldbtn');
const dialogGold = document.querySelector('#goldDialog');
const goldClose = document.querySelector('#goldClose');

// function to show the dialogs

goldOpen.addEventListener("click", () => {
    dialogGold.showModal();
});

goldClose.addEventListener("click", () => {
    dialogGold.close();
});

// Form timestamp ----------------------------------------------

document.addEventListener("DOMContentLoad", function () {
    const timestampreg = document.getElementById('timestamp');
    const now = new Date();
    timestampreg.value = now.toISOString();
});