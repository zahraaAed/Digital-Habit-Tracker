import React from "react";
import "./habitcomponent.css";
import { useDrag } from 'react-dnd';

const HabitTracker = ({ habit, onDelete, onEdit, onToggleStatus }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'HABIT', // Make sure this matches the 'accept' in Sidebar
      item: habit,
 
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div className="habit-item" ref={drag} style={{
      opacity: isDragging ? 0.5 : 1,  // Change opacity when dragging
      transition: 'opacity 0.2s ease', // Optional: smooth opacity transition
    }}>
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
  )
};  

export default HabitTracker;


