import React from 'react';

import './Weather.css';

export default function Weather() {
  return (
    <div className="Weather">
      <section>
        <div className="row">
          <div className="col">
            <ul>
              <li>
                <h1>Kyiv</h1>
              </li>
              <li>Rain</li>
              <li>Humidity: 0 %</li>
              <li>Wind speed: 0 km/h</li>
            </ul>
          </div>
          <div className="col">
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Rain" />
          </div>
          <div className="col">
            <h2>23</h2>
            <span>°C</span>
          </div>
        </div>
      </section>
    </div>
  );
}
