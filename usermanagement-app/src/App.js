import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Giris from "./pages/Giris";
import Panel from "./pages/Panel";

function App() {
  return (

      <div className="App">
        <Routes>
          <Route path="/" element={<Giris />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </div>

  );
}

export default App;
