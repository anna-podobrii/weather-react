import React, { useState } from "react";
import "./index.css";
import axios from "axios";

export default function MainInfo(props) {
  let [city, setCity] = useState(props.city);
  let [weather, setWeather] = useState(null);
  let [desc, setDesc] = useState(null);
  let [hum, setHum] = useState(null);
  let [wind, setWind] = useState(null);
  let [img, setImg] = useState(`04d`);
  let [press, setPress] = useState(null);
  let [littleDesc, setLittleDesc] = useState(null);
  let [min, setMin] = useState(null);
  let [max, setMax] = useState(null);
  let [name, setName] = useState(null);
  let [array, setArray] = useState(null);
   

  function showCity(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3d512dee9da8b831b3d6680a9d730dd9&units=metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d512dee9da8b831b3d6680a9d730dd9&units=metric`;
   
    function handleResponse(response) {
      setWeather(Math.round(response.data.main.temp));
      setDesc(response.data.weather[0].description);
      setHum(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setImg(response.data.weather[0].icon);
      setPress(response.data.main.pressure);
      setLittleDesc(response.data.weather[0].main);
      setMin(Math.round(response.data.main.temp_min));
      setMax(Math.round(response.data.main.temp_max));
      setName(city);
    };
    function getDisplayForecast(response) {
      setArray(response.data.list);
    };
axios.get(apiUrl).then(getDisplayForecast);
    axios.get(url).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function showFarenheit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3d512dee9da8b831b3d6680a9d730dd9&units=imperial`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d512dee9da8b831b3d6680a9d730dd9&units=imperial`;
    function handleResponse(response) {
      setWeather(Math.round(response.data.main.temp));
      setDesc(response.data.weather[0].description);
      setHum(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setImg(response.data.weather[0].icon);
      setPress(response.data.main.pressure);
      setLittleDesc(response.data.weather[0].main);
      setMin(Math.round(response.data.main.temp_min));
      setMax(Math.round(response.data.main.temp_max));
      setName(city);
    }
    function getDisplayForecast(response) {
      setArray(response.data.list);
    }
    axios.get(url).then(handleResponse);
    axios.get(apiUrl).then(getDisplayForecast);
    let forecastElement = document.querySelector("#windUnit");
    forecastElement.innerHTML = `m/h`;
  }

  function showCelsium(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3d512dee9da8b831b3d6680a9d730dd9&units=metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d512dee9da8b831b3d6680a9d730dd9&units=metric`;
    function handleResponse(response) {
      setWeather(Math.round(response.data.main.temp));
      setDesc(response.data.weather[0].description);
      setHum(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setImg(response.data.weather[0].icon);
      setPress(response.data.main.pressure);
      setLittleDesc(response.data.weather[0].main);
      setMin(Math.round(response.data.main.temp_min));
      setMax(Math.round(response.data.main.temp_max));
      setName(city);
    }
function getDisplayForecast(response) {
  setArray(response.data.list);
}
    let forecastElement = document.querySelector("#windUnit");
    forecastElement.innerHTML = `km/h`;
axios.get(apiUrl).then(getDisplayForecast);
    axios.get(url).then(handleResponse);
  }

  function formatDayWithTimestamp(timestamp) {
    let date = new Date(timestamp * 1000);
    // let day = date.getDate()
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = `${days[date.getDay()]}`;
    return day;
  }
  function formatDates(timestamp) {
    let date = new Date(timestamp * 1000);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let info = `${date.getDate()} ${months[date.getMonth()]}`;
    return info;
  }

  function daily(number) {
    let numb = number - 7;
          return (
              <div className="col next-weather-item">
                {" "}
                <img
                  src={`./images/${array[number].weather[0].icon}.png`}
                  alt=""
                  width="40"
                  className="images"
                />
                <div className="day" id="day-one">
                  {formatDayWithTimestamp(array[number].dt)}
                </div>
                <div className="date" id="date-one">
                  {formatDates(array[number].dt)}
                </div>
                <div className="temp">
                  {" "}
                  <span id="forecast-min">{Math.round(array[numb].main.temp_min)}</span>°
                  / <span id="forecast-max">{Math.round(array[number].main.temp_max)}</span>
                  °
                </div>
              </div>
            
          );
  }
  if (weather && array !== null) {
    return (
      <div>
        <div className="MainInfo">
          <div className="Search">
            <form
              className="container px-4"
              id="search-form"
              onSubmit={showCity}
            >
              <div className="col-auto search-place">
                <input
                  className="form-control"
                  type="text"
                  id="exampleDataList"
                  placeholder="Type to search..."
                  onChange={updateCity}
                />

                <button type="submit" className="btnn">
                  <img src="./images/search.png" alt="" width="30" />
                </button>
              </div>
            </form>
            {/* <button type="click" className="btn-current">
              <img src="images/Subtract.png" alt="" id="local-button" />
            </button> */}
          </div>
          <div className="next-days-title" id="date-string">
            Today
          </div>
          <div className="container main-block">
            <div className="row align-items-start" id="main-bar">
              <div className="col text-center">
                <img
                  src={`./images/${img}.png`}
                  alt=""
                  width="80"
                  className="images"
                  id="weatherIcon"
                />
                <span className="today-temperature">
                  <span id="temp">{weather}</span>
                  <a id="c" href="showCelsium" onClick={showCelsium}>
                    °C
                  </a>
                  <a id="f" href="showCelsium" onClick={showFarenheit}>
                    /°F
                  </a>
                </span>
              </div>
              <div className="col">
                <ul>
                  <li>
                    <img src="images/temp.png" alt="" width="20" />
                    High / Low <span id="high">{min}</span>°/
                    <span id="low">{max}</span>°
                  </li>
                  <li>
                    <img src="images/raindrops.png" alt="" width="20" />
                    Humidity <span id="humidity">{hum}</span>%
                  </li>
                  <li>
                    <img src="images/wind.png" alt="" width="20" />
                    Wind <span id="wind">{wind}</span>{" "}
                    <span id="windUnit">km/h</span>
                  </li>
                  <li>
                    <img src="images/presure.png" alt="" width="20" />
                    Pressure <span id="presure">{press}</span> mb
                  </li>
                </ul>
              </div>
              <div className="col place">
                <div id="city-name">{capitalizeFirstLetter(name)}</div>
                <div id="name-weather">{littleDesc}</div>
                <div id="description-weather">
                  {capitalizeFirstLetter(desc)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="next-days-title">Next 5 days weather</div>
        <div className="container" id="forecast-place">
          <div className="row">
            {" "}
            {daily(8)}
            {daily(16)}
            {daily(24)}
            {daily(32)}
            {daily(39)}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <form className="container px-4" id="search-form" onSubmit={showCity}>
          <div className="col-auto search-place">
            <input
              className="form-control"
              type="text"
              id="exampleDataList"
              placeholder="Type to search..."
              onChange={updateCity}
            />

            <button type="submit" className="btnn">
              <img src="./images/search.png" alt="" width="30" />
            </button>
          </div>
        </form>
        {/* <button type="click" className="btn-current">
          <img src="images/Subtract.png" alt="" id="local-button" />
        </button> */}
      </div>
    );
  }
}
