import React, { useState } from "react";
import HabitTracker from "../Components/habitcomponent";
import Hello from "../Components/Hello";
import { useLocation } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from "../Components/sidebar";
import "./Habit.css";

function HabitPage() {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" };

  const [showModal, setShowModal] = useState(false); 
  const [newHabit, setNewHabit] = useState(""); 
  const [habitsList, setHabitsList] = useState([]); 
  const [editingIndex, setEditingIndex] = useState(null); // Tracks which habit is being edited
  const [editedHabit, setEditedHabit] = useState(""); // Tracks the value being edited in the modal
  const [selectedStatus, setSelectedStatus] = useState("In Progress"); // New state for selected status

  const predefinedHabits = [
    "Drink 8 glasses of water daily",
    "Exercise for 30 minutes",
    "Read for 20 minutes",
    "Write in a journal",
    "Wake up at 6:00 AM",
    "Avoid social media for an hour before bed",
    "Plan your day in the morning",
    "Spend quality time with family",
  ];

  // Add a new habit with selected status
  const handleAddHabit = () => {
    if (newHabit.trim()) {
      const newHabitObject = {
        habitName: newHabit,
        status: selectedStatus,
        dates: {
          Mon: false,
          Tue: false,
          Wed: false,
          Thu: false,
          Fri: false,
          Sat: false,
          Sun: false,
        },
      };
      setHabitsList([...habitsList, newHabitObject]);
      setNewHabit("");
    }
  };

  const handleDrop = (item, status) => {
    console.log("Dropped item:", item, "New status:", status);
    setHabitsList((prevHabits) =>
      prevHabits.map((habit) =>
        habit.habitName === item.habitName ? { ...habit, status } : habit
      )
    );
  };
  // Toggle the habit status for each day (Mon-Sun)
  const handleToggleStatus = (habitIndex, day) => {
    const updatedHabits = [...habitsList];
    updatedHabits[habitIndex].dates[day] = !updatedHabits[habitIndex].dates[day];
    setHabitsList(updatedHabits);
  };

  // Add a predefined habit
  const handleAddPredefinedHabit = (habit) => {
    const newHabitObject = {
      habitName: habit,
      status: "In Progress", // Set default status as "In Progress"
      dates: {
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
        Sun: false,
      },
    };
    setHabitsList([...habitsList, newHabitObject]);
  };

  // Delete a habit
  const handleDeleteHabit = (index) => {
    const updatedHabits = [...habitsList];
    updatedHabits.splice(index, 1);
    setHabitsList(updatedHabits);
  };

  // Open modal for editing a habit
  const handleEditHabit = (index) => {
    setEditingIndex(index);
    setEditedHabit(habitsList[index].habitName);
    setShowModal(true);
  };

  // Save the edited habit
  const handleSaveEdit = () => {
    if (typeof editedHabit === "string" && editedHabit.trim()) {
      const updatedHabits = [...habitsList];
      updatedHabits[editingIndex] = {
        ...updatedHabits[editingIndex],
        habitName: editedHabit,
      };
      setHabitsList(updatedHabits);
      setShowModal(false);
      setEditingIndex(null);
      setEditedHabit("");
    }
  };

  // Close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setEditedHabit("");
    setEditingIndex(null);
  };

  return (
    <div className="habit-container">
      <Hello nom={name} />

      {/* Add Habit Section */}
      <div className="add-habit">
        <input
          type="text"
          value={newHabit}
          placeholder="Enter a new habit"
          onChange={(e) => setNewHabit(e.target.value)}
        />
        
        <select //status dropdown
        className="select-status"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)} // Update the selected status
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Incompleted">Incompleted</option>
        </select>

        <button onClick={handleAddHabit}>Add Habit</button>
      </div>

      {/* Predefined Habits Section */}
      <div className="predefined-habits">
        <div className="habit-box">
          <h2>Select a predefined habit:</h2>
          {predefinedHabits.map((habit, index) => (
            <button key={index} onClick={() => handleAddPredefinedHabit(habit)}>
              {habit}
            </button>
          ))}
        </div>
      </div>

      {/* Render Habits List */}
      <DndProvider backend={HTML5Backend}>
        <div className="habit-list">
          {habitsList.map((habit, index) => (
            <HabitTracker
              key={index}
              habit={habit}
              onDelete={() => handleDeleteHabit(index)}
              onEdit={() => handleEditHabit(index)}
              onToggleStatus={(day) => handleToggleStatus(index, day)}
            />
          ))}
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Edit Habit</h2>
              <input
                type="text"
                value={editedHabit}
                onChange={(e) => setEditedHabit(e.target.value)}
              />
              <div className="modal-buttons">
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCloseModal}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        <Sidebar habitsList={habitsList} onDrop={handleDrop} />
      </DndProvider>
    </div>
  );
}

export default HabitPage;
