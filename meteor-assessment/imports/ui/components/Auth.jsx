import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { AuthCollection } from "../../api/auth";
import { AlertsCollection } from "../../api/alerts";
import Register from "./Regiser";
import Login from "./Login";

const Auth = () => {
  return (
    <div className="auth">
      <Register />
      <Login />
    </div>
  );
};

export default Auth;
