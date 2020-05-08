import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        <span>Open-source code by Inês Nunes on </span>
        <a
          href="https://github.com/devines88/weather-app-react"
          target="_blank"
          rel="noOpener noReferrer"
        >
          GitHub
        </a>
        <span>, hosted on </span>
        <a
          href="https://unruffled-turing-0eade8.netlify.app"
          target="_blank"
          rel="noOpener noReferrer"
        >
          Netlify
        </a>
      </small>
    </div>
  );
}
