
//apiCurrent supplys all the current weather information needed
var apiCurrent = "https://api.weatherbit.io/v2.0/current?postal_code=06282&key=633d8e359dcd43f1afbf0304c7e3bd28";

//var apiAirQual = "https://api.weatherbit.io/v2.0/airquality?postal_code=06282&key=633d8e359dcd43f1afbf0304c7e3bd28";

//var apiAlerts = "https://api.weatherbit.io/v2.0/alerts?postal_code=06282&key=633d8e359dcd43f1afbf0304c7e3bd28";


//fetchData currently only fetching weatherbit io 
function fetchData() {

    fetch(apiCurrent).then(response => {
        // console.log(response);
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();
    }).then(data => {

        //using map on all variables to collect api data and parse it to display on webpage
        var airTemp = data.data.map(current => {
            return ` ${current.app_temp}`;
        }).join("");
        document.querySelector("#air-temp").insertAdjacentHTML("afterbegin","Air Temperature: " + ((airTemp * 1.8) + 32));

        
        var weatherCond = data.data.map(current => {
            return `${current.weather.description}`;            
        }).join("");
        console.log(data.data);        
        document.querySelector("#weather-condition").insertAdjacentHTML("afterbegin", "Weather Conditions: " + weatherCond);


        var windSpeed = data.data.map(current => {
            return `${current.wind_spd}`;
        }).join("");
        document.querySelector("#wind-speed").insertAdjacentHTML("afterbegin", "Wind Speed: " + windSpeed);


        var uvIndex = data.data.map(current => {
            return `${current.uv}`;
        }).join("");
        document.querySelector("#UV-index").insertAdjacentHTML("afterbegin", "UV Index: " + uvIndex);

        var airQuality = data.data.map(current => {
            return `${current.aqi}`;
        }).join("");
        document.querySelector("#pollution").insertAdjacentHTML("afterbegin", "Air Quality: " + airQuality);
        
    }).catch(error => {
        console.log(error);  
    });

}

fetchData();



// var airQual;
// fetch(apiCurrent, {
//     method: "POST", body: JSON.stringify(airQual)
// }).then(response => response.json()).then(json => console.log(json));

// var weatherAlerts;
// fetch(apiCurrent, {
//     method: "POST", body: JSON.stringify(weatherAlerts)
// }).then(response => response.json()).then(json => console.log(json));
//var weatherAlerts;
// fetch(apiCurrent, {
//     method: "POST", body: JSON.stringify(weatherAlerts)
// }).then(response => response.json()).then(json => console.log(json));



