import React, {useState} from "react";
import axios from 'axios';

export default function Weather(){
    let [city, setCity] = useState("");
    //let [load, setLoad] = useState(false);
    let [temp, setTemp] = useState("");
    let [desc, setDesc] = useState("");
    let [humidity, setHumidity] = useState("");
    let [wind, setWind] = useState("");
    let [icon, setIcon] = useState("");

    function showWeather(response) {
        // setLoad(true);
        setTemp(response.data.main.temp);
        setDesc(response.data.weather[0].description);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        setIcon(
          `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );
      }

      function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeather);
      }
    
      function changedCity(event) {
        event.preventDefault();
        setCity(event.target.value);
      }

    let weatherData = {
        city: "New York",
        temperature: 19,
        date: "Monday 10:00",
        description: "Cloudy",
        imgUrl: "https://openweathermap.org/img/wn/10d@2x.png",
        humidity: 80,
        wind: 10
      };
    return (
    <div className="Weather" class="container">
      <div className="Search" class="input-details" id="search-form">
        <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="city-input"
          autocomplete="off"
          name="text"
          class="input-box"
          placeholder="Enter a city to search"
          onChange={changedCity}
        />
        <button id="btnSearch" class="search-btn">
          <div class="fas fa-search search-icon"></div>
        </button>
        <button id="btnLocation" class="location-btn">
          <div class="fa-solid fa-location-dot location-icon"></div>
        </button>
        </form>
        
      </div>
      <div class="city-details">
        <h1 id="city">{city}</h1>
        <p id="date">{weatherData.date}</p>
        <p id="desc">{desc}</p>
      </div>
      <div class="weather-container">
        <div class="weather-icon">
          <img
            src={icon}
            alt={desc}
            id="icon"
          />
          <p class="celcius" id="temp">
            {Math.round(temp)}℃
          </p>
          <span class="link-style">
            <a href="#" id="clink" class="active">
              ℃
            </a>
            |
            <a href="#" id="flink">
              ℉
            </a>
          </span>
        </div>
        <div class="weather-details">
          <ul>
            <li>
              <i class="fa-solid fa-water tiny-icon"></i> Humidity:
              <span id="humid">{humidity} %</span>
            </li>
            <li>
              <i class="fa-solid fa-wind tiny-icon"></i> Wind:
              <span id="wind">{wind} km/h</span>
            </li>
          </ul>
        </div>
        
      </div>
      <a href="https://github.com/oliviaphyu/weather-react">Open Source code</a> by Phyu Sin Lin.
    </div>
    );
}