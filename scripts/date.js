const year = document.getElementById('currentyear');
const lastmod = document.getElementById('lastModified');

const today = new Date();

year.innerHTML = today.getFullYear();
lastmod.innerHTML = `Last Modified: ${document.lastModified}`;