import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { AuthCollection } from "../../api/auth";
import { AlertsCollection } from "../../api/alerts";
const Login = () => {
  const users = useTracker(() => AuthCollection.find({}).fetch());

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginInfo;

  const loginOnChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const loginOnSubmit = (e) => {
    e.preventDefault();

    let readyToLogin = true;

    if (email === "" || password === "") {
      AlertsCollection.insert({
        text: "Please enter all credentials.",
      });
      readyToLogin = false;
    }

    let userEmails = users.map((user) => user.email);

    if (readyToLogin) {
      if (userEmails.includes(email)) {
        const thisUser = users.find((user) => user.email === email);

        if (thisUser.password === password) {
          localStorage.setItem("user", email);
          window.location.href = "/dashboard";
        } else {
          AlertsCollection.insert({
            text: "Invalid credentials.",
          });
        }
      } else {
        AlertsCollection.insert({
          text: "User do not exist. Please try again.",
        });
      }
    }
  };

  return (
    <div className="login">
      <form type="submit" onSubmit={(e) => loginOnSubmit(e)}>
        <input type="email" name="email" value={loginInfo.email} placeholder="Enter Email" onChange={(e) => loginOnChange(e)} />
        <input type="password" name="password" value={loginInfo.password} placeholder="Enter Password" onChange={(e) => loginOnChange(e)} />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
