import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState(null);

  function updateCity(event) {
    let newCity = event.target.value.trim();
    if (newCity && newCity.length > 0) {
      setCity(newCity);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    event.target.reset();
    alert(city);
  }

  return (
    <div className="Search">
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
                >
                  Current City
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
