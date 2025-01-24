import React, { useState } from "react"; 
import { useLocation } from "react-router-dom";
import Hello from "../Components/Hello";
import "./Habit.css";

function HabitPage() {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" };

  const [newHabit, setNewHabit] = useState("");
  const [habits, setHabits] = useState([]);

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, newHabit]);
      setNewHabit(""); // Clear input field after adding
    }
  };

  const predefined = [
    "The First Predefined Habit",
    "The Second Predefined Habit",
    "The Third Predefined Habit",
    "The Fourth Predefined Habit",
  ];

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

      {/* Displaying the list of added habits */}
      <div className="added-habits">
        <h3>Your Habits:</h3>
        <ul>
          {habits.map((habit, index) => (
            <li key={index}>{habit}</li>
          ))}
        </ul>
      </div>

      {/* Predefined habits */}
      <div className="predefined-habits">
        <div className="habit-box">
          <p>Select a predefined habit:</p>
          {predefined.map((habit, index) => (
            <button key={index}>{habit}</button>
          ))}
        </div>
      </div>
    </>
  );
}

export default HabitPage;
