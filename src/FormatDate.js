import React from 'react';
import './FormatDate.css';

export default function FormatDate(props) {
  console.log(props.date);
  let weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let weekDay = weekDays[props.date.getDay()];

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let month = months[props.date.getMonth()];
  let day = props.date.getDate();
  let year = props.date.getFullYear();

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${hours}`;
  }

  return (
    <ul className="date">
      <li>{weekDay}</li>
      <li>
        {month} {day} {year}
      </li>
      <li>
        {hours}:{minutes}
      </li>
    </ul>
  );
}
