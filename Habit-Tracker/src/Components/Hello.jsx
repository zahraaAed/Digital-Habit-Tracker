import React from "react";
import "./Hello.css";

function Hello({ nom }) {
  return (
    <div className="Hello-container">
      <div className="Hello-sub-container">
        <h1>Welcome, {nom}!</h1>
      </div>
    </div>
  );
}

export default Hello;
