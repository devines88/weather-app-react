import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Weather from "./Weather";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-container">
          <Header />
          <Weather />
        </div>
        <Footer />
      </div>
    </div>
  );
}
