import React from "react";
import "./sidebar.css"; 

const Sidebar = () => {
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
      <ul>
        <li>Completed</li>
        <li>Incompleted</li>
        <li>Progress</li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
