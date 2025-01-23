import React from "react";
import { useLocation } from "react-router-dom";
import Hello from "../Components/Hello";
import "./Habit.css";

function HabitPage() {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" };

  return (
    <>
      <Hello nom={name} /> {/* Pass name to Hello */}
      <div className="input-container">
        <input type="text" placeholder="Enter a new habit" className="input-habit" />
        <button className="add-habit"> Add Habit</button>
      </div>
      

    </>
  );
}

export default HabitPage;
