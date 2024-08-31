import './style.css';
import {getWeather} from './modules/api-calls'
import {fillCurrentConditions} from './modules/dom-utils'


async function weatherWidget() {
    try {
        const currentWeather = await getWeather();
        await fillCurrentConditions(currentWeather);
    } catch (err) {
        console.log(err);
    }
}

weatherWidget();