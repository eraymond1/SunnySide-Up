
//apiCurrent supplys all the current weather information needed
//var apiCurrent = "https://api.weatherbit.io/v2.0/current?postal_code=06282&key=23f4eb9104a3417ebae0fd654b5b8faa";

//var apiAirQual = "https://api.weatherbit.io/v2.0/airquality?postal_code=06282&key=633d8e359dcd43f1afbf0304c7e3bd28";

//var apiAlerts = "https://api.weatherbit.io/v2.0/alerts?postal_code=90210&key=23f4eb9104a3417ebae0fd654b5b8faa";

document.querySelector('#search-form').addEventListener
    ('submit', getZipCode);


function getZipCode(event){

    
    //get zip from input
    var zip = document.querySelector('.input').value;
    console.log(zip);

    if(isNaN(zip)){
        alert("must input numbers only!");
    } else if(!((/^[0-9]{5}$/.test(zip)))){
        alert("Please enter a 5 digit zip code!");
    }

    

    //make request
    fetch("https://api.weatherbit.io/v2.0/current?postal_code=" + zip + "&key=23f4eb9104a3417ebae0fd654b5b8faa")
    .then(response => response.json())
    .then(data => {

        console.log(data);
        var airTemp = data.data.map(current => {
            return ` ${current.app_temp}`;
        }).join("");
        document.querySelector("#air-temp").insertAdjacentHTML("afterbegin","Air Temperature: " + ((airTemp * 1.8) + 32));

        var weatherCond = data.data.map(current => {
            return `${current.weather.description}`;            
        }).join("");
       // console.log(data.data);        
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

       //console.log(cityName);
        

    });

    fetch("https://api.weatherbit.io/v2.0/alerts?postal_code=" + zip + "&key=23f4eb9104a3417ebae0fd654b5b8faa")
    .then(response => {
        if(!response.ok) {
            throw Error("ERROR");
        }

        return response.json();
    })
    .then(data => {
        console.log(data);

        var weatherAlerts = data.alerts
        .map(alerts => {
            return `<p> ${alerts.description}</p>`;
        })
        .join("");

        if(Object.keys(data.alerts).length) {
            document.querySelector(".alert-text").insertAdjacentHTML("afterbegin", "Current Alerts: " + weatherAlerts);
            
        }else {
            weatherAlerts = "Great Day for Sailing!";
            document.querySelector(".alert-text").insertAdjacentHTML("afterbegin", weatherAlerts);
            
        }
        
    })
    .catch(error => {
        console.log(error);
    });

    var submitBtn = document.querySelector("#search-form");

    function reload() {

    reload = location.reload();
   
    };

    submitBtn.addEventListener("click", reload, false);  

    
    event.preventDefault();
    
  
     
}



