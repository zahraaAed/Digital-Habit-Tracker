import React from 'react'
import WelcomePage from './Pages/WelcomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from './Components/Hello';
import HabitPage from './Pages/HabitPage';
import "./App.css";



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<WelcomePage />} />

      <Route path="/hello" element={<Hello/>}/>

  <Route path="/habit" element={<HabitPage/>}/>
    </Routes>
  </Router>
  )
}

export default App
