import React, { useState } from 'react';
import axios from 'axios';
import FormatDate from './FormatDate';
import WeatherTemperature from './WeatherTemperature';
import Forecast from './Forecast';
import './Weather.css';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [location, setLocation] = useState(props.defaultLocation);
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      coord: response.data.coord,
      condition: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      location: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = 'bbaf82554bcf373d103d5f004dcf90e3';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function changeLocation(event) {
    setLocation(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <FormatDate date={weatherData.date} />
          </div>

          <div className="col">
            <form onSubmit={handleSearch}>
              <label for="search-line" className="form-label">
                Change location
              </label>
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Start typing..."
                autoFocus="on"
                onChange={changeLocation}
              />
              <input
                type="submit"
                className="btn btn-info btn-sm"
                value="Search"
              />
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
              <img
                className="weather-icon"
                src={weatherData.iconUrl}
                alt={weatherData.condition}
              />
            </div>
            <div className="col">
              <WeatherTemperature celsius={weatherData.temperature} />
            </div>
          </div>
        </section>
        <Forecast coordinates={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return 'Loading...';
  }
}
