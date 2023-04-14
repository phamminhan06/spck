const API_KEY = "4269652c5e1b6a66a34f9d3d16ecc098";
const searchInput = document.getElementById("search-input");
const temperature = document.querySelector(".temperature");
const sunset = document.querySelector(".sunset");
const sunrise = document.querySelector(".sunrise");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const DEFAULT_VALUE = "DEFAULT_VALUE"

searchInput.addEventListener("change", (event) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`
    )
    .then((response) => response.json())
    .then((data) => {
        console.log("data", data);
        cityName.innerHTML = data.name || DEFAULT_VALUE;
        temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
        windSpeed.innerHTML = data.wind.speed
        sunset.innerHTML = data.sys.sunset
        sunrise.innerHTML = data.sys.sunrise
        humidity.innerHTML = data.main.humidity
        weatherState.innerHTML = data.weather[0].description
        weatherIcon.innerHTML = data.weather[0].icon
    });
});