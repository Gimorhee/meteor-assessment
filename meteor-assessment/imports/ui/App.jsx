import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Auth from "../ui/components/Auth";
import Dashboard from "../ui/components/Dashboard";

export const App = () => (
  <div className="app">
    <h1>Welcome!</h1>

    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </div>
);
