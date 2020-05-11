import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Spinner from "./Spinner";
import axios from "axios";

function Weather() {
  let [city, setCity] = useState("");
  let [hasResults, setHasResults] = useState(false);
  let [weatherResults, setWeatherResults] = useState(Object);
  let [loading, setLoading] = useState(false);
  let unitSystem = "metric";

  function getCurrentLocationWeather() {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLoading(true);
      getCityWeather(
        null,
        position.coords.latitude,
        position.coords.longitude,
        unitSystem
      );
    });
  }

  function getCityWeather(city, latitude, longitude, unitSystem) {
    let key = "491127d7fac80a30edab9961c6790b41";
    let url;
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&&units=${unitSystem}`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&&units=${unitSystem}`;
    }

    axios.get(url).then(updateWeather);
  }
  function updateWeather(response) {
    if (response) {
      setWeatherResults({
        cityName: response.data.city.name,
        temperature: Math.round(response.data.list[0].main.temp),
        unitSystem: unitSystem,
        description: response.data.list[0].weather[0].description,
        humidity: response.data.list[0].main.humidity,
        wind: Math.round(response.data.list[0].wind.speed),
        dateTime: formatDate(response.data.list[0].dt),
        weatherIcon: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
      });
    }
    setLoading(false);
    setHasResults(true);
  }

  function formatDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let weekDay = days[date.getDay()];
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${weekDay} ${addZero(hour)}:${addZero(minutes)}`;
  }

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function updateCity(event) {
    let newCity = event.target.value.trim();
    if (newCity && newCity.length > 0) {
      setCity(newCity);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      setLoading(true);
      getCityWeather(city, null, null, unitSystem);
      event.target.reset();
    }
  }

  function handleChildClick(cityName, units) {
    setCity(cityName);
    unitSystem = units;
    setLoading(true);
    getCityWeather(city, null, null, unitSystem);
  }

  return (
    <div className="Weather">
      <div className="row">
        <div className="col mr-0">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="cityName"
                    placeholder="Type a city..."
                    autoComplete="off"
                    autoFocus="on"
                    maxLength="100"
                    onChange={updateCity}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-outline-secondary ml-1 mr-3"
                  id="search-location"
                  value="Search"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  id="current-location"
                  onClick={getCurrentLocationWeather}
                >
                  Current City
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : hasResults ? (
        <CurrentWeather
          weatherData={weatherResults}
          onChildClick={handleChildClick}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Weather;
