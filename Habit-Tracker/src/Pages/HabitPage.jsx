import React from 'react'
import Hello from '../Components/Hello';
import "./Habit.css";

function HabitPage() {
  return (
    <div>
      <Hello/>
      <div className='inpur-container'>
        <input type='text' placeholder='Enter a new habit' className='input-habit'></input>
        <button className='add-habit'> Add Habit</button>
      </div>
    </div>
  )
}

export default HabitPage
