function sumbit() {
    let city = document.querySelector("#entercity").value;
    axios.get(`https://api.weatherapi.com/v1/current.json?key=d347dfb1a00b4f86add45435242510&q=${city}`)
.then(function(response){
    console.log(response.data);
    let devpoint = response.data.current.dewpoint_c;
    document.querySelector("#devpoint-c").innerText = "" + `${devpoint}` + "°C"
    // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
    let country = response.data.location.country;
    document.querySelector("#country").innerText = "Country :" + `${country}`
    // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
    let city = response.data.location.name;
    document.querySelector("#city").innerText = "City :" + `${city}`
    // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
    let provience = response.data.location.region;
    document.querySelector("#provience").innerText = "Provience :" + `${provience}`
    // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
    let temperature = response.data.current.
    dewpoint_f;
    document.querySelector("#temperature").innerText = "Fahrenheit :" + `${temperature}`+ "°F"
    // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
    let felllike = response.data.current.feelslike_c;
    document.querySelector("#felllike").innerText = "Feelslike:" + `${felllike}` + "°C"
    // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
    let humidity = response.data.current.humidity;
    document.querySelector("#humidity").innerText = "Humidity :" + `${humidity}` + "%"
    // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
    let visibility = response.data.current.wind_kph;
    document.querySelector("#visibility").innerText = "Visibility :" + `${visibility}` + " Km"
    // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
    let windspeed = response.data.current.vis_km
    ;
    document.querySelector("#windspeed").innerText = "Wind Speed :" + `${windspeed}` + "kmp/h"
})
}