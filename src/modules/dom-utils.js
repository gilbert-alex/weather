// dom-utils.js

// dom selectors
const icon = document.querySelector('.icon');
const container = document.querySelector('#current-weather-container');
const currTemp = document.querySelector('#current-temp');
const feelsLike = document.querySelector('#feels-like');
const humidity = document.querySelector('#humidity');
const precipProb = document.querySelector('#precipProb');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const weatherGif = document.querySelector('#current-weather-gif')

export const fillWeatherIcon = function(iconName) {
    console.log(iconName); // debug
    icon['data-feather'] = iconName;
    feather.replace();
}

export const fillCurrentConditions = function(weatherData) {
    currTemp.textContent = `${weatherData.currentConditions.temp}°`;
    feelsLike.textContent = `${weatherData.currentConditions.feelslike}°`;
    humidity.textContent = `${weatherData.currentConditions.humidity}%`;
    precipProb.textContent = `${weatherData.currentConditions.precipprob}%`;
    sunrise.textContent = weatherData.currentConditions.sunrise;
    sunset.textContent = weatherData.currentConditions.sunset;
}

export const fillWeatherGif = function(gifData) {
    const n = Math.floor(Math.random() * gifData.data.length);
    weatherGif.src = gifData.data[n].images.original.url;
}

export const onError = function() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    const weatherRock = document.createElement('p');
    weatherRock.textContent = 'go outside and look';
    container.appendChild(weatherRock);
}