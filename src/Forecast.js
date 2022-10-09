import React from 'react';

import './Forecast.css';

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <h4>Wed 14/09</h4>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Rain" />
          <span>
            <strong>25° </strong> 17°
          </span>
        </div>
        <div className="col">
          <h4>Thu 15/09</h4>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Rain" />
          <span>
            <strong>25° </strong> 17°
          </span>
        </div>
        <div className="col">
          <h4>Fri 16/09</h4>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Rain" />
          <span>
            <strong>25° </strong> 17°
          </span>
        </div>
        <div className="col">
          <h4>Sat 17/09</h4>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Rain" />
          <span>
            <strong>25° </strong> 17°
          </span>
        </div>
        <div className="col">
          <h4>Sun 18/09</h4>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Rain" />
          <span>
            <strong>25° </strong> 17°
          </span>
        </div>
      </div>
    </div>
  );
}
