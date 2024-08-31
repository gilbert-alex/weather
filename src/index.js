import './style.css';

const desc = document.querySelector('.icon');
const currTemp = document.querySelector('#current-temp');
const feelsLike = document.querySelector('#feels-like');
const humidity = document.querySelector('#humidity');
const precipProb = document.querySelector('#precipProb');

const url = new URL('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/seattle')

url.searchParams.append('unitGroup', 'us');
url.searchParams.append('key', process.env.API_KEY_WEATHER);
url.searchParams.append('contentType', 'json');


fetch(url.toString())
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        desc.textContent = response.days[0].icon;
        fillCurrentConditions(response);
    })
    .catch(function(err) {
        console.log(err);
    })

const fillCurrentConditions = function(weatherData) {
    currTemp.textContent = `${weatherData.currentConditions.temp}°`;
    feelsLike.textContent = `${weatherData.currentConditions.feelslike}°`;
    humidity.textContent = `${weatherData.currentConditions.humidity}%`;
    precipProb.textContent = `${weatherData.currentConditions.precipprob}%`;
}