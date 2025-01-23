import React from 'react'
import { useLocation } from "react-router-dom";
import "./Hello.css";

function Hello() {
    const location = useLocation();
    const { name } = location.state || { name: "Guest" }; 
  
    return (
      <div className="Hello-container">
        <div className="Hello-sub-container">
          <h1>Welcome, {name}!</h1>
        </div>
      </div>
    );
  }
export default Hello;
