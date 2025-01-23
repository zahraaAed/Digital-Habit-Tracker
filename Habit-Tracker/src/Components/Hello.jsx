import React from 'react'
import { useLocation } from "react-router-dom";

function Hello() {
    const location = useLocation();
    const { name } = location.state || { name: "Guest" }; 
  
    return (
      <div className="Hello-container">
        <div className="sub-container">
          <h1>Hello, {name}!</h1>
        </div>
      </div>
    );
  }
export default Hello;
