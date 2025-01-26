import React from "react";
import "./habitcomponent.css";

const HabitTracker = ({ habit, onDelete, onEdit, onToggleStatus }) => {
  return (
    <div className="habit-item">
  
      <p>{habit.habitName}</p>
      <div className="days">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
          <button
            key={index}
            onClick={() => onToggleStatus(day)} 
            style={{
              backgroundColor: habit.dates[day] ? "#D1FFBD" : "#FFEEC9",
            }}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Edit and Delete Buttons */}
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


