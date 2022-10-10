import React from 'react';
import Weather from './Weather';
import Forecast from './Forecast';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <header className="date-search">
            <div className="row">
              <div className="col">
                <ul>
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
          </header>

          <main>
            <section>
              <Weather defaultCity="Dublin" />
            </section>

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
          </main>
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
