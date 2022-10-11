import React, { useState } from 'react';
import './WeatherTemperature.css';

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState('celsius');

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit('fahrenheit');
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit('celsius');
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === 'celsius') {
    return (
      <div className="WeatherTemperature">
        <h2>{Math.round(props.celsius)}</h2>
        <span className="unit">
          {' '}
          °C |{' '}
          <a href="/" className="unit" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h2>{Math.round(fahrenheit())}</h2>
        <span className="unit">
          {' '}
          <a href="/" className="unit" onClick={showCelsius}>
            °C
          </a>{' '}
          | °F
        </span>
      </div>
    );
  }
}
