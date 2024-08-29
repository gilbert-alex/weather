const desc = document.querySelector('#desc');

const url = new URL('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/seattle')

url.searchParams.append('unitGroup', 'us');
url.searchParams.append('key', process.env.API_KEY_WEATHER);
url.searchParams.append('contentType', 'json');


fetch(url.toString())
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        desc.textContent = response.days[0].icon;
    })
    .catch(function(err) {
        console.log(err);
    })

