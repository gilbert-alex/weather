// api-calls.js

export const getWeather = function () {
    const url = new URL('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/seattle')

    url.searchParams.append('unitGroup', 'us');
    url.searchParams.append('key', process.env.API_KEY_WEATHER);
    url.searchParams.append('contentType', 'json');


    return fetch(url.toString())
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            return response;
        })
        .catch(function(err) {
            console.log(err);
        })
}