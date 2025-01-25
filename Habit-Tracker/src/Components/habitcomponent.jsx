import React from "react";
import "./habitcomponent.css";

const HabitTracker = ({ habitName, onDelete, onEdit }) => {
  return (
    <div className="habit-item">
      <p>{habitName}</p>
      <div className="days">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
          <button key={index}>{day}</button>
        ))}
      </div>
      <div className="buttons">
        <button className="delete-habit" onClick={onDelete}>
          Delete Habit
        </button>
        <button className="edit-habit" onClick={onEdit}>
          Edit Habit
        </button>
      </div>
    </div>
  );
};

export default HabitTracker;
