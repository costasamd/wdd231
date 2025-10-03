const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = "48c0df94f63aa375aac53cc14025a957";
const long = 6.63;
const lat = 49.74;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${myKey}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
    
}

function displayResults(data) {
    console.log('hello');
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    wIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}@2.png`;
    

}

displayResults();