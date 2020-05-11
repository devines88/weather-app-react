import React from "react";

function Spinner() {
  return (
    <div className="d-flex align-items-center">
      <strong>Loading...</strong>
      <div
        className="ml-auto spinner-border spinner-border-sm text-secondary"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
}

export default Spinner;
