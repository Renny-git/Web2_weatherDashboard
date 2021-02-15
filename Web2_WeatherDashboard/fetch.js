const lat = '-22.9028',

    long = '-43.2075',

    api = '8bd32c8b25477b92c6a32c7c6b7faa13',

    unit = 'metric',

    url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&appid=${api}&units=${unit}`;



console.log(url);



function updateUI(data) {

console.log(data);

}



fetch(url)

.then(function(response) {

    return response.json();

})

.then(function(data) {

    return updateUI(data);

})

.catch(function(error) {

    console.log(error);

});

		
