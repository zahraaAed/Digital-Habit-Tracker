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
        <button onClick={addHabit}>Add Habit</button>
      </div>

      <div className="predefined-habits">
        <div className="habit-box">
          <p>Select a predefined habit:</p>
          <button>The First Predefined Habit</button>
          <button>The Second Predefined Habit</button>
          <button>The Third Predefined Habit</button>
          <button>The Fourth Predefined Habit</button>
        </div>
      </div>
    </>
  );
}

export default HabitPage;
