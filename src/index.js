import './style.css';
import {getWeather} from './modules/api-calls'
import {fillCurrentConditions} from './modules/dom-utils'


async function weatherWidget() {
    try {
        const currentWeather = await getWeather();
        fillCurrentConditions(currentWeather);
    } catch (err) {
        console.error(err);
    }
}

weatherWidget();