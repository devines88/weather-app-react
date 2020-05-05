import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-6">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="cityName"
                placeholder="Type a city..."
                autoComplete="off"
                autoFocus="on"
                maxLength="100"
              />
            </div>
          </form>
        </div>
        <button
          type="button"
          className="btn btn-light mb-4"
          id="current-location"
        >
          Current City
        </button>
      </div>
    </div>
  );
}
