import React from "react";
import Header from "./Header";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-container">
          <Header />
          <Search />
          <Weather />
          <br />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
