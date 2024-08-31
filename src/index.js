import './style.css';
import {
    getWeather,
    getGif,
} from './modules/api-calls'
import {
    fillWeatherIcon,
    fillCurrentConditions,
    fillWeatherGif,
    onError,
} from './modules/dom-utils'

async function weatherWidget() {
    try {
        const weatherData = await getWeather(fillCurrentConditions);
        let iconName = weatherData.currentConditions.icon;
        fillWeatherIcon(iconName);

    } catch (err) {
        console.error(err);
        onError();
    }
}

weatherWidget();
// feather.replace();