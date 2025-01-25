import React from "react";
import "../assets/sidebar.css"; // Import the sidebar CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Status</h2>
      <ul>
        <li>Completed</li>
        <li>Incompleted</li>
        <li>Progress</li>
      </ul>
    </div>
  );
};

export default Sidebar;