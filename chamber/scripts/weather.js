//select HTML elements in the document
const townName = document.querySelector('#town');
const currentTemp = document.querySelector('#current-temp');
const dayOne = document.querySelector('#day-1');
const dayTwo = document.querySelector('#day-2');
const dayThree = document.querySelector('#day-3');
const weatherIcon = document.querySelector('#graphic');

//api url//
const lat = "53.48";
const long = "-2.24";
const key = "0b52a537febc0df175b5465e6b795b2c";

const url = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`;

//functions//

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayWeather(data) { 
    townName.innerHTML = data.city.name;
    currentTemp.innerHTML = `Todays Temp - ${data.list[0].main.temp} &deg; C`;
    weatherIcon.src = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    weatherIcon.alt = data.list[0].weather[0].description;

    dayOne.innerHTML = `Tomorrow Temp - ${data.list[2].main.temp} &deg; C`;
    dayTwo.innerHTML = `Day After Tomorrow Temp - ${data.list[4].main.temp} &deg; C`;
    dayThree.innerHTML = `In Three Days Temp - ${data.list[6].main.temp} &deg; C`;

}

apiFetch();

