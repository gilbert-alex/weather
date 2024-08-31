import './style.css';
import {
    getWeather,
    getGif,
} from './modules/api-calls'
import {
    fillWeatherIcon,
    fillCurrentConditions,
    fillWeatherGif,
} from './modules/dom-utils'

async function weatherWidget() {
    try {
        const weatherData = await getWeather(fillCurrentConditions);
        let iconName = await weatherData.currentConditions.icon;
        fillWeatherIcon(iconName);

    } catch (err) {
        console.error(err);
    }
}

weatherWidget();
// feather.replace();