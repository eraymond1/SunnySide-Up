
//apiCurrent supplys all the current weather information needed
//var apiCurrent = "https://api.weatherbit.io/v2.0/current?postal_code=06282&key=23f4eb9104a3417ebae0fd654b5b8faa";

//var apiAirQual = "https://api.weatherbit.io/v2.0/airquality?postal_code=06282&key=633d8e359dcd43f1afbf0304c7e3bd28";

//var apiAlerts = "https://api.weatherbit.io/v2.0/alerts?postal_code=06282&key=633d8e359dcd43f1afbf0304c7e3bd28";


//fetchData currently only fetching weatherbit io 
// function fetchData() {

//     fetch(apiCurrent).then(response => {
//         // console.log(response);
//         if(!response.ok){
//             throw Error("ERROR");
//         }
//         return response.json();
//     }).then(data => {

//         //using map on all variables to collect api data and parse it to display on webpage
//         var airTemp = data.data.map(current => {
//             return ` ${current.app_temp}`;
//         }).join("");
//         document.querySelector("#air-temp").insertAdjacentHTML("afterbegin","Air Temperature: " + ((airTemp * 1.8) + 32));

        
//         var weatherCond = data.data.map(current => {
//             return `${current.weather.description}`;            
//         }).join("");
//         console.log(data.data);        
//         document.querySelector("#weather-condition").insertAdjacentHTML("afterbegin", "Weather Conditions: " + weatherCond);


//         var windSpeed = data.data.map(current => {
//             return `${current.wind_spd}`;
//         }).join("");
//         document.querySelector("#wind-speed").insertAdjacentHTML("afterbegin", "Wind Speed: " + windSpeed);


//         var uvIndex = data.data.map(current => {
//             return `${current.uv}`;
//         }).join("");
//         document.querySelector("#UV-index").insertAdjacentHTML("afterbegin", "UV Index: " + uvIndex);

//         var airQuality = data.data.map(current => {
//             return `${current.aqi}`;
//         }).join("");
//         document.querySelector("#pollution").insertAdjacentHTML("afterbegin", "Air Quality: " + airQuality);
        
//     }).catch(error => {
//         console.log(error);  
//     });

// }

// fetchData();



document.querySelector('#search-form').addEventListener
    ('submit', getZipCode);


function getZipCode(event){
    //get zip from input
    var zip = document.querySelector('.input').value;
    console.log(zip);

    

    //make request
    fetch("https://api.weatherbit.io/v2.0/current?postal_code=" + zip + "&key=23f4eb9104a3417ebae0fd654b5b8faa")
    .then(response => response.json())
    .then(data => {


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

        var cityName = data.data.map(current => {
            return `${current.city_name}`;
        }).join("");
        document.querySelector(".city-name").insertAdjacentText("afterbegin","Current weather for "  + cityName);

       console.log(cityName);
        

    });

    var submitBtn = document.querySelector("#search-form");

    function reload() {

    reload = location.reload();
   
    };

    submitBtn.addEventListener("click", reload, false);  

    
    event.preventDefault();
    
  
     
}



//clearForm();



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



