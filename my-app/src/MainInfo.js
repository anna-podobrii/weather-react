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

  function showCity(event) {
    event.preventDefault();
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

    axios.get(url).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  if (weather) {
    return (
      <div className="MainInfo">
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
          <button type="click" className="btn-current">
            <img src="images/Subtract.png" alt="" id="local-button" />
          </button>
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
                <span id="c">°C</span>
                <span id="f">/°F</span>
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
                  Wind <span id="wind">{wind}</span> km/h
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
              <div id="description-weather">{capitalizeFirstLetter(desc)}</div>
            </div>
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
        <button type="click" className="btn-current">
          <img src="images/Subtract.png" alt="" id="local-button" />
        </button>
      </div>
    );
  }
}
