import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import FoodDetails from "./pages/FoodDetails"; 
import Panel from "./pages/Panel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/italian/:id" element={<FoodDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
