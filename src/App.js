import React from 'react';
import Weather from './Weather';
import Forecast from './Forecast';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Weather defaultCity="Kyiv" />

          <section>
            <h3>5-day forecast</h3>
            <Forecast />
          </section>

          <p>
            <a
              href="https://www.accuweather.com/"
              target="_blank"
              rel="noreferrer"
            >
              More details
            </a>
          </p>
        </div>
        <footer>
          <a
            href="https://github.com/Anastasiia-Tymoshenko/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{' '}
          </a>
          by Anastasiia Tymoshenko
        </footer>
      </div>
    </div>
  );
}
