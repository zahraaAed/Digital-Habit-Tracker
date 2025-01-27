import React from "react";
import "./sidebar.css";
import { useDrop } from "react-dnd";

const Sidebar = ({ habitsList, onDrop }) => {
  if (!habitsList) {
    console.error("habitsList is not passed to Sidebar");
    return null;
  }

  const [{ isOver: isOverCompleted }, dropCompleted] = useDrop(() => ({
    accept: "HABIT",
    drop: (item) => {
      onDrop(item, "Completed"); // Set the status to "Completed"
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const [{ isOver: isOverInProgress }, dropInProgress] = useDrop(() => ({
    accept: "HABIT",
    drop: (item) => {
      onDrop(item, "In Progress"); // Set the status to "In Progress"
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const [{ isOver: isOverIncompleted }, dropIncompleted] = useDrop(() => ({
    accept: "HABIT",
    drop: (item) => {
      onDrop(item, "Incompleted"); // Set the status to "Incompleted"
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const currentDate = new Date();
  const dayName = currentDate.toLocaleDateString(undefined, { weekday: "long" });
  const day = currentDate.getDate();
  const month = currentDate.toLocaleDateString(undefined, { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="sidebar">
      <div className="date">
        <p>
          {dayName} {day} {month}, {year}
        </p>
      </div>
      <div className="status">
        <h2>Status</h2>

        {/* Completed dropzone */}
        <ul
          ref={dropCompleted}
          className={isOverCompleted ? "dropzone-active" : "dropzone"}
        >
          <li>Completed</li>
          {habitsList
            .filter((habit) => habit.status === "Completed")
            .map((habit, index) => (
              <li key={index}>{habit.habitName}</li>
            ))}
        </ul>

        {/* In Progress dropzone */}
        <ul
          ref={dropInProgress}
          className={isOverInProgress ? "dropzone-active" : "dropzone"}
        >
          <li>In Progress</li>
          {habitsList
            .filter((habit) => habit.status === "In Progress")
            .map((habit, index) => (
              <li key={index}>{habit.habitName}</li>
            ))}
        </ul>

        {/* Incompleted dropzone */}
        <ul
          ref={dropIncompleted}
          className={isOverIncompleted ? "dropzone-active" : "dropzone"}
        >
          <li>Incompleted</li>
          {habitsList
            .filter((habit) => habit.status === "Incompleted")
            .map((habit, index) => (
              <li key={index}>{habit.habitName}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
