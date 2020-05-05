import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    cityName: "Lisbon",
    temperature: 18,
    unit: "C",
    date: "Thursday 18:00",
    description: "Partly Cloudy",
    humidity: 80,
    wind: 10,
    windUnit: "m/s",
    weatherIcon: "http://openweathermap.org/img/wn/10d@2x.png",
    unitLink: "F"
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-12">
          <div className="current-city">
            <h2 id="current-city">Lisbon</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="current-day-time">
            Last Updated on{" "}
            <span id="current-day-time">{weatherData.date}</span>
          </div>
          <div id="weather-description" className="current-weather">
            {weatherData.description}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-7 current-temperature">
          <div className="row">
            <div className="col-sm-3">
              <img
                src={weatherData.weatherIcon}
                alt={weatherData.description}
                title={weatherData.description}
                id="weather-icon"
              />
            </div>
            <div className="col-sm-9">
              <h1>
                <span id="current-temperature">
                  {weatherData.temperature} º
                </span>
                <span id="current-unit">{weatherData.unit}</span>
                <span className="units">
                  {" "}
                  |
                  <a href="/" id="unit-link">
                    {weatherData.unitLink}
                  </a>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="col-5 weather-stats">
          <div className="row">
            Humidity:&nbsp;
            <span id="humidity">{weatherData.humidity}%</span>
          </div>
          <div className="row">
            Wind:&nbsp;
            <span id="wind">{weatherData.wind}</span>
            <span id="wind-unit">{weatherData.windUnit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
