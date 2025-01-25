import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Hello from "../Components/Hello";
import "./Habit.css";

function HabitPage() {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" };
  const [newHabit,setNewHabit]=useState();

  return (
  
    <div className="habit-container">
      <Hello nom={name} /> {/* Pass name to Hello */}
      {/* <div className="input-container">
        <input type="text" placeholder="Enter a new habit" className="input-habit" />
        <button className="add-habit"> Add Habit</button>
      </div> */}
      <div className="add-habit">
        <input
          type="text"
          value={newHabit}
          placeholder="Enter a new habit"
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button>Add Habit</button>
      </div>

      <div className="predefined-habits">
        <div className="habit-box">
          <h1>Select a predefined habit</h1>
          <button>The First Predefined Habit</button>
          <button>The Second Predefined Habit</button>
          <button>The Third Predefined Habit</button>
          <button>The Fourth Predefined Habit</button>
        </div>
      </div>
    </div>
  
  );
}

export default HabitPage;