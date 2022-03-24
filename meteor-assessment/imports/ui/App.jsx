import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Auth from "../ui/components/Auth";
import Dashboard from "../ui/components/Dashboard";
import Alerts from "../ui/components/Alerts";

export const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

    <Alerts />
  </div>
);
