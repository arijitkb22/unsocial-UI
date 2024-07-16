import React, { useState } from "react";
import { useAuth } from "../store/auth-store";
import RegisterPage from "./RegisterPage";
import axios from "axios";

function LoginPage() {
  const { user, login } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setusers] = useState([]);

  const handleOnClick = async () => {
    if (email === "" || password === "") {
      alert("Enter username and password");
    } else {
      login({ userName: email, password: password });
      try {
        const response = await axios.get("http://localhost:8080/login", {
          params: { userName: email, password: password },
        });
        console.log("User login:", response.data);
      } catch (error) {
        console.error("There was an error adding the user!", error);
      }
     
    }

    // if (isRegistered == false) {
    //   const newUser = { email, password };
    //   setusers([...users, newUser]);
    //   localStorage.setItem("users", JSON.stringify([...users, newUser]));
    //   setIsRegistered(true);
    //   console.log("registered successfully, logIn to continue");
    //   alert("registered successfully, logIn to continue");
    // } else {
    //   const userLists = JSON.parse(localStorage.getItem("users"));
    //   console.log(userLists);
    //   let user = userLists.find((o) => o.email === email);
    //   if (user) {
    //     if (user.password === password) {
    //       setIsLoggedIn(true);
    //       console.log("Successfully LoggedIn");
    //       alert("Successfully LoggedIn");
    //     } else {
    //       console.log("Wrong Password");
    //       alert("Wrong Password");
    //     }
    //   } else {
    //     console.log("userName not found");
    //     alert("userName not found");
    //   }
    // }
  };

  return (
    <div>
      {isRegistered ? (
        <div className="login-page">
          <h1 className="login-header">Welcome to unsocial</h1>
          <div className="login-form">
            <div>
              <h2>LogIn Here</h2>
            </div>
            <div className="login">
              <div className="user">
                <label htmlFor="user">Username :</label>
                <input
                  type="text"
                  name="user"
                  id="user"
                  placeholder="Your username"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="pass">Password :</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="btn btn-success" onClick={handleOnClick}>
                Login
              </button>
              <p>
                Don't have an account? click here to{" "}
                <a href="#" onClick={() => setIsRegistered(false)}>
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <RegisterPage />
      )}
    </div>
  );
}

export default LoginPage;
