// dom-utils.js

// dom selectors
const icon = document.querySelector('.icon');
const currTemp = document.querySelector('#current-temp');
const feelsLike = document.querySelector('#feels-like');
const humidity = document.querySelector('#humidity');
const precipProb = document.querySelector('#precipProb');


export const fillCurrentConditions = function(weatherData) {
    icon.textContent = weatherData.days[0].icon;
    currTemp.textContent = `${weatherData.currentConditions.temp}°`;
    feelsLike.textContent = `${weatherData.currentConditions.feelslike}°`;
    humidity.textContent = `${weatherData.currentConditions.humidity}%`;
    precipProb.textContent = `${weatherData.currentConditions.precipprob}%`;
}