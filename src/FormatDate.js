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

  let time = props.date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <ul className="date">
      <li>{weekDay}</li>
      <li>
        {month} {day} {year}
      </li>
      <li>{time}</li>
    </ul>
  );
}
