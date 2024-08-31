// api-calls.js

export const getWeather = function () {
    const url = new URL('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/seattle')

    url.searchParams.append('unitGroup', 'us');
    url.searchParams.append('key', process.env.API_KEY_WEATHER);
    url.searchParams.append('contentType', 'json');


    return fetch(url.toString())
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`HTTP ERROR: status: ${response.status}`);
            }
            return response.json();
        })
        .then(function(data) {
            console.log(data); // debug -- TODO: remove when complete
            return data;
        })
        .catch(function(err) {
            throw err;
        })
}