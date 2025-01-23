import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";

function WelcomePage() {
  const [name, setName] = useState(""); 
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/habit", { state: { name } }); // Pass name to HabitPage
  };

  return (
    <div className="main-container">
      <div className="container">
        <h1>Welcome to Your Habit Tracker</h1>
        <input
          type="text"
          placeholder="Kindly add your name"
          onChange={(e) => setName(e.target.value)} 
        />
        <button type="button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
