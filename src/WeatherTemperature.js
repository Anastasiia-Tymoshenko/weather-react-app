import React from 'react';
import './WeatherTemperature.css';

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h2>{Math.round(props.celsius)}</h2>
      <span className="unit"> °C</span>
    </div>
  );
}
