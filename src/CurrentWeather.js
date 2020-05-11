import React, { useState } from "react";
import "./CurrentWeather.css";

function CurrentWeather(props) {
  function convertUnitSystem(event) {
    event.preventDefault();
    let units =
      props.weatherData.unitSystem === "metric" ? "imperial" : "metric";
    props.onChildClick(props.weatherData.cityName, units);
  }

  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-12">
          <div className="current-city">
            <h2 id="current-city">{props.weatherData.cityName}</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="current-day-time">
            Last Updated on{" "}
            <span id="current-day-time">{props.weatherData.dateTime}</span>
          </div>
          <div id="weather-description" className="current-weather">
            {props.weatherData.description}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-7 current-temperature">
          <div className="row">
            <div className="col-sm-3">
              <img
                src={props.weatherData.weatherIcon}
                alt={props.weatherData.description}
                title={props.weatherData.description}
                id="weather-icon"
              />
            </div>
            <div className="col-sm-9">
              <h1>
                <span id="current-temperature">
                  {props.weatherData.temperature} º
                </span>
                <span id="current-unit">
                  {props.weatherData.unitSystem === "metric" ? "C" : "F"}
                </span>
                <span className="units">
                  {" "}
                  |
                  <a href="/" id="unit-link" onClick={convertUnitSystem}>
                    {props.weatherData.unitSystem === "metric" ? "F" : "C"}
                  </a>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="col-5 weather-stats">
          <div className="row">
            Humidity:&nbsp;
            <span id="humidity">{props.weatherData.humidity}%</span>
          </div>
          <div className="row">
            Wind:&nbsp;
            <span id="wind">{props.weatherData.wind}</span>
            <span id="wind-unit">
              {props.weatherData.unitSystem === "metric" ? "m/s" : "mph"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
