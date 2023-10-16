import React from "react";
import { Auth, Home } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/signin" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/signup/verify" element={<Auth />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
