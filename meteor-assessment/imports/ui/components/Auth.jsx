import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { AuthCollection } from "../../api/auth";
import { AlertsCollection } from "../../api/alerts";
import Register from "./Regiser";
import Login from "./Login";

const Auth = () => {
  const users = useTracker(() => AuthCollection.find({}).fetch());
  const alerts = useTracker(() => AlertsCollection.find({}).fetch());

  useEffect(() => {
    console.log("ALERTS: ", alerts);
    if (alerts.length > 0) {
      alerts.map((alert) => {
        setTimeout(() => {
          AlertsCollection.remove(alert._id);
        }, 3000);
      });
    }
  }, [alerts]);

  return (
    <div className="auth">
      <Register />
      <Login />

      {/* <h1>{users.length}</h1>
      {users &&
        users.map((user, i) => (
          <div key={i}>
            <h1>{user.email}</h1>
            <p>{user._id}</p>
          </div>
        ))} */}

      <ul>
        {alerts.map((alert) => (
          <li>{alert.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Auth;
