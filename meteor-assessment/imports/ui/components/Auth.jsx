import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { AuthCollection } from "../../api/auth";
import Register from "./Regiser";
import Login from "./Login";

const Auth = () => {
  // const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  const users = useTracker(() => AuthCollection.find({}).fetch());

  useEffect(() => {
    console.log("USERS: ", users);
  });

  return (
    <div className="auth">
      <Register />
      <Login />

      <h1>{users.length}</h1>
      {users &&
        users.map((user, i) => (
          <div key={i}>
            <h1>{user.email}</h1>
            <p>{user._id}</p>
          </div>
        ))}
    </div>
  );
};

export default Auth;
