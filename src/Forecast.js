import React from "react";
import "./Forecast.css";

function Forecast() {
  let forecast = {
    forecastDays: ["Fri", "Sat", "Sun", "Mon", "Tue"],
    forecastIcons: ["http://openweathermap.org/img/wn/10d@2x.png"],
    description: "Partly Cloudy",
    forecastTemperatures: [19],
    currentUnit: "C",
  };

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-12 forecast-section">
          <table className="table table-borderless">
            <thead>
              <tr id="forecast-days" className="week-days">
                <th scope="col">{forecast.forecastDays[0]}</th>
                <th scope="col">{forecast.forecastDays[1]}</th>
                <th scope="col">{forecast.forecastDays[2]}</th>
                <th scope="col">{forecast.forecastDays[3]}</th>
                <th scope="col">{forecast.forecastDays[4]}</th>
              </tr>
            </thead>
            <tbody>
              <tr id="forecast-icons">
                <td>
                  <img
                    src={forecast.forecastIcons[0]}
                    alt={forecast.description}
                    title={forecast.description}
                    id="forecast-icon"
                  />
                </td>
                <td>
                  <img
                    src={forecast.forecastIcons[0]}
                    alt={forecast.description}
                    title={forecast.description}
                    id="forecast-icon"
                  />
                </td>
                <td>
                  <img
                    src={forecast.forecastIcons[0]}
                    alt={forecast.description}
                    title={forecast.description}
                    id="forecast-icon"
                  />
                </td>
                <td>
                  <img
                    src={forecast.forecastIcons[0]}
                    alt={forecast.description}
                    title={forecast.description}
                    id="forecast-icon"
                  />
                </td>
                <td>
                  <img
                    src={forecast.forecastIcons[0]}
                    alt={forecast.description}
                    title={forecast.description}
                    id="forecast-icon"
                  />
                </td>
              </tr>
              <tr id="forecast-temperatures" className="week-temperatures">
                <td>
                  {forecast.forecastTemperatures[0]}º
                  <span className="used-unit"> {forecast.currentUnit}</span>
                </td>
                <td>
                  {forecast.forecastTemperatures[0]}º
                  <span className="used-unit"> {forecast.currentUnit}</span>
                </td>
                <td>
                  {forecast.forecastTemperatures[0]}º
                  <span className="used-unit"> {forecast.currentUnit}</span>
                </td>
                <td>
                  {forecast.forecastTemperatures[0]}º
                  <span className="used-unit"> {forecast.currentUnit}</span>
                </td>
                <td>
                  {forecast.forecastTemperatures[0]}º
                  <span className="used-unit"> {forecast.currentUnit}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
