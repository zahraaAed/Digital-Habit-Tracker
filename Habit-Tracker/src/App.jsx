import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import Hello from "./Components/Hello";
import HabitPage from "./Pages/HabitPage";
import Sidebar from "./Components/sidebar";
import "./App.css";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Render Sidebar only on specific pages */}
      {location.pathname !== "/" && <Sidebar />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/habit" element={<HabitPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;