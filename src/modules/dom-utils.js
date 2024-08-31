// dom-utils.js

// dom selectors
const icon = document.querySelector('.icon');
const currTemp = document.querySelector('#current-temp');
const feelsLike = document.querySelector('#feels-like');
const humidity = document.querySelector('#humidity');
const precipProb = document.querySelector('#precipProb');
const weatherGif = document.querySelector('#current-weather-gif')


export const fillCurrentConditions = function(weatherData) {
    icon.textContent = weatherData.currentConditions.icon;
    currTemp.textContent = `${weatherData.currentConditions.temp}°`;
    feelsLike.textContent = `${weatherData.currentConditions.feelslike}°`;
    humidity.textContent = `${weatherData.currentConditions.humidity}%`;
    precipProb.textContent = `${weatherData.currentConditions.precipprob}%`;
}

export const fillWeatherGif = function(gifData) {
    const n = Math.floor(Math.random() * gifData.data.length);
    weatherGif.src = gifData.data[n].images.original.url;
}