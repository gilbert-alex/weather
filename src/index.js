import './style.css';
import {
    getWeather,
    getGif,
} from './modules/api-calls'
import {
    fillCurrentConditions,
    fillWeatherGif,
} from './modules/dom-utils'



async function weatherWidget() {
    try {
        const weatherData = await getWeather(fillCurrentConditions);
        let searchTerm = await weatherData.currentConditions.icon;
        searchTerm = searchTerm.replace('-', '+');
        searchTerm += '+weather';
        console.log(searchTerm);
        await getGif(searchTerm, fillWeatherGif);
    } catch (err) {
        console.error(err);
    }
}

weatherWidget();