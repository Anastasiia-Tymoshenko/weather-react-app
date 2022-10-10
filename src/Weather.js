import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      condition: response.data.weather[0].description,
      //date: date,
      humidity: response.data.main.humidity,
      iconUrl: 'http://openweathermap.org/img/wn/10d@2x.png',
      location: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <ul className="date">
              <li>Tuesday</li>
              <li>September 13 2022</li>
              <li>07:14 PM</li>
            </ul>
          </div>

          <div className="col">
            <form>
              <label for="search-line" className="form-lable">
                Change location
              </label>
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Start typing..."
                autoComplete="off"
              />
              <input
                type="submit"
                className="btn btn-info btn-sm"
                value="Search"
              />
              <button type="button" className="btn btn-warning btn-sm">
                Current
              </button>
            </form>
          </div>
        </div>

        <section>
          <div className="row">
            <div className="col">
              <ul className="current-weather">
                <h1>{weatherData.location}</h1>

                <li className="text-capitalize">{weatherData.condition}</li>
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind speed: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
            <div className="col">
              <img src={weatherData.iconUrl} alt={weatherData.condition} />
            </div>
            <div className="col">
              <h2>{Math.round(weatherData.temperature)}</h2>
              <span> °C</span>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    const apiKey = 'bbaf82554bcf373d103d5f004dcf90e3';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return 'Loading...';
  }
}
