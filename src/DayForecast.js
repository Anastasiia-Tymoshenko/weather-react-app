import React from 'react';

export default function DayForecast(props) {
  console.log(props.data);
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function weekDay() {
    let date = new Date(props.data.dt * 1000);
    let weekDay = date.getDay();
    let weekDays = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];

    return weekDays[weekDay];
  }

  function date() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDate();
    let months = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ];
    let month = months[date.getMonth()];

    return `${day}/${month}`;
  }
  function icon() {
    let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return iconUrl;
  }

  return (
    <div className="DayForecast">
      <h4>
        {weekDay()} {date()}
      </h4>
      <img
        className="forecast-icon"
        src={icon()}
        alt={props.data.weather[0].description}
      />
      <span>
        <strong>{maxTemperature()}</strong> {minTemperature()}
      </span>
    </div>
  );
}
