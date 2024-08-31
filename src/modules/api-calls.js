// api-calls.js

export const getWeather = async function (domCallback) {
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
            domCallback(data);
            return data; // return to main to do other stuff if i want
        })
        .catch(function(err) {
            throw err;
        })
}

export const getGif = async function (searchTerm, domCallback) {
    const url = new URL('http://api.giphy.com/v1/gifs/search');

    url.searchParams.append('api_key', process.env.API_KEY_GIF);
    url.searchParams.append('q', searchTerm);

    return fetch(url.toString())
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            domCallback(data);
        })
}