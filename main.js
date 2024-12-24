const apiKey = 'f3daa9924bcc66b72798718a2fd42d89';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const weatherIcon = document.querySelector(".weather-image i");
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");


async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(response.status == 404){
    error.style.display = "block"
    weather.style.display = "none"
  }
  const data = await response.json(); 
  
  console.log(data)

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&#8451";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


  if (data.weather[0].main === "Clear") {
    weatherIcon.className = "fa-solid fa-sun";
  } else if (data.weather[0].description === "fog") {
    weatherIcon.className = "bi-cloud-fog";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.className = "bi-cloud-rain";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.className = "bi-cloud-drizzle";
  } else if (data.weather[0].main === "Clouds") {
    weatherIcon.className = "bi bi-cloud";
  }

  weather.style.display = "block";
  error.style.display = "none";
}



searchButton.addEventListener("click", ()=>{
  checkWeather(searchInput.value);
  searchInput.value = "";
})

searchInput.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    checkWeather(searchInput.value);
    searchInput.value = "";
  }
})

