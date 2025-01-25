import React, { useState } from "react";
import HabitTracker from "../Components/habitcomponent";
import Hello from "../Components/Hello";
import { useLocation } from "react-router-dom";
import "./Habit.css";

function HabitPage() {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" };

  const [showModal, setShowModal] = useState(false); // Controls the modal visibility
  const [newHabit, setNewHabit] = useState(""); // Input for new habits
  const [habitsList, setHabitsList] = useState([]); // List of all habits
  const [editingIndex, setEditingIndex] = useState(null); // Tracks which habit is being edited
  const [editedHabit, setEditedHabit] = useState(""); // Tracks the value being edited in the modal

  const predefinedHabits = [
    "The First Predefined Habit",
    "The Second Predefined Habit",
    "The Third Predefined Habit",
    "The Fourth Predefined Habit",
  ];

  // Add a new habit from input
  const handleAddHabit = () => {
    if (newHabit.trim()) {
      setHabitsList([...habitsList, newHabit]); // Add the habit to the list
      setNewHabit(""); // Clear the input
    }
  };

  // Add a predefined habit
  const handleAddPredefinedHabit = (habit) => {
    setHabitsList([...habitsList, habit]);
  };

  // Delete a habit
  const handleDeleteHabit = (index) => {
    const updatedHabits = habitsList.filter((_, i) => i !== index); // Remove the selected habit
    setHabitsList(updatedHabits);
  };

  // Open the modal for editing a habit
  const handleEditHabit = (index) => {
    setEditingIndex(index); // Save the index of the habit being edited
    setEditedHabit(habitsList[index]); // Pre-fill the input with the habit name
    setShowModal(true); // Show the modal
  };

  // Save the edited habit
  const handleSaveEdit = () => {
    if (editedHabit.trim()) {
      const updatedHabits = [...habitsList];
      updatedHabits[editingIndex] = editedHabit; // Update the habit at the editingIndex
      setHabitsList(updatedHabits); // Save the updated list
      setShowModal(false); // Close the modal
      setEditingIndex(null); // Clear the editing state
      setEditedHabit(""); // Clear the input field
    }
  };

  // Close the modal without saving
  const handleCloseModal = () => {
    setShowModal(false);
    setEditedHabit(""); // Reset the edited habit field
    setEditingIndex(null); // Clear the editing state
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
      <div className="habit-list">
        {habitsList.map((habitName, index) => (
          <HabitTracker
            key={index}
            habitName={habitName} // Pass habit name
            onDelete={() => handleDeleteHabit(index)} // Pass delete handler
            onEdit={() => handleEditHabit(index)} // Pass edit handler
          />
        ))}
      </div>

      {/* Modal for Editing Habit */}
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
    </div>
  );
}

export default HabitPage;
