import React, { useState } from 'react';
import './Habit-Tracker/src/Components/habitcomponent.css';

const HabitTracker = () => {
  const [habit, setHabit] = useState('');
  const [habitsList, setHabitsList] = useState([
    { name: 'Book reading', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    { name: 'Meeting', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    { name: 'Event', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  ]);

  const handleAddHabit = () => {
    if (habit) {
      setHabitsList([...habitsList, { name: habit, days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }]);
      setHabit('');
    }
  };

  const handleDeleteHabit = (index) => {
    const updatedHabits = habitsList.filter((_, i) => i !== index);
    setHabitsList(updatedHabits);
  };

  return (
    <div className="container">
      <h1>Welcome, Name!</h1>
      <div className="add-habit">
        <input
          type="text"
          placeholder="Enter a new habit"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
        />
        <button onClick={handleAddHabit}>Add Habit</button>
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
      <div className="habit-list">
        {habitsList.map((habitItem, index) => (
          <div key={index} className="habit-item">
            <p>{habitItem.name}</p>
            <div className="days">
              {habitItem.days.map((day, i) => (
                <button key={i}>{day}</button>
              ))}
            </div>
            <button className="delete-habit" onClick={() => handleDeleteHabit(index)}>
              Delete Habit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitTracker;
