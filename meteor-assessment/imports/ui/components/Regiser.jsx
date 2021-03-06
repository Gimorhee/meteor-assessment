import React, { useEffect, useState } from "react";
import { AuthCollection } from "../../api/auth";
import { AlertsCollection } from "../../api/alerts";
import { useTracker } from "meteor/react-meteor-data";
// import { Redirect } from "react-router-dom";

const Regiser = () => {
  const users = useTracker(() => AuthCollection.find({}).fetch());

  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = registerInfo;

  const registerOnChange = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  };

  const registerOnSubmit = (e) => {
    e.preventDefault();

    let readyToRegister = true;

    // Check if user entered all inputs
    if (email === "" || password === "" || password2 === "") {
      AlertsCollection.insert({
        text: "Please enter all credentials.",
      });

      readyToRegister = false;
    }

    // Check if user entered same passwords
    if (password !== password2) {
      AlertsCollection.insert({
        text: "Password do not match. Please try again.",
      });
      readyToRegister = false;
    }

    // Check if the user is already registered
    users.map((user) => {
      if (user.email === email) {
        AlertsCollection.insert({
          text: "This email is taken. Please try with another.",
        });
        readyToRegister = false;
      }
    });

    if (readyToRegister) {
      AuthCollection.insert({
        email,
        password,
      });

      localStorage.setItem("user", email);
      setRegisterInfo({ email: "", password: "", password2: "" });
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="register">
      <form type="submit" onSubmit={(e) => registerOnSubmit(e)}>
        <input type="email" name="email" value={email} placeholder="Enter Email" onChange={(e) => registerOnChange(e)} />
        <input type="password" name="password" value={password} placeholder="Enter Password" onChange={(e) => registerOnChange(e)} />
        <input type="password" name="password2" value={password2} placeholder="Confirm Password" onChange={(e) => registerOnChange(e)} />
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default Regiser;
