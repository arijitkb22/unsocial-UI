import React, { useRef, useState } from "react";
import { useAuth } from "../store/auth-store";
import LoginPage from "./LoginPage";
import axios from "axios";

function RegisterPage() {
  const { register } = useAuth();
  const [isRegistered, setIsRegistered] = useState(false);

  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [proffession, setProffession] = useState("");
  // const [collage, setCollage] = useState("");
  // const [company, setCompany] = useState("");
  // const [city, setCity] = useState("");
  // const [techStack, setThchStack] = useState([]);
  // const [interests, setInterests] = useState([])
  // const [dob, setDob] = useState("");

  const email = useRef("");
  const username = useRef("");
  const password = useRef("");
  const proffession = useRef("");
  const collage = useRef("");
  const company = useRef("");
  const city = useRef("");
  const techStack = useRef("");
  const interests = useRef("");
  const dob = useRef("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const techStacks = techStack.current.value.split(",");
    const interestValues = interests.current.value.split(",");

    const payload = {
      email: email.current.value,
      userName: username.current.value,
      password: password.current.value,
      proffession: proffession.current.value,
      collage: collage.current.value,
      company: company.current.value,
      city: city.current.value,
      techStack: techStacks,
      interests: interestValues,
      dob: dob.current.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/register",
        payload
      );
      console.log("User added:", response.data);
    } catch (error) {
      console.error("There was an error adding the user!", error);
    }

    register(payload);
    setIsRegistered(true);
  };

  return (
    <div>
      {isRegistered ? (
        <LoginPage />
      ) : (
        <>
          <h1 className="login-header">Welcome to unsocial</h1>
          <div className="register-form">
            <h3 className="reg-header">Please Register Here</h3>
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="mb-3">
                <label htmlFor="email">Email :</label>
                <input
                  className="email-input"
                  type="text"
                  name="email"
                  id="email"
                  ref={email}
                  placeholder="abc@gmail.com"
                />
                <label htmlFor="user">Username :</label>
                <input
                  className="username-input"
                  type="text"
                  name="user"
                  id="user"
                  ref={username}
                  placeholder="@Username"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password :</label>
                <input
                  className="password-input"
                  type="password"
                  name="password"
                  id="password"
                  ref={password}
                  placeholder="Please use 8 char"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="professions">Professions :</label>
                <input
                  className="professions-input"
                  type="text"
                  name="professions"
                  id="professions"
                  ref={proffession}
                  placeholder="Software Devloper"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="collage">Collage/School :</label>
                <input
                  className="collage-input"
                  type="text"
                  name="collage"
                  id="collage"
                  ref={collage}
                  placeholder="ABC company"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="company">Company :</label>
                <input
                  className="company-input"
                  type="text"
                  name="usecompanyr"
                  id="company"
                  ref={company}
                  placeholder="ABC company"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city">City :</label>
                <input
                  className="city-input"
                  type="text"
                  name="city"
                  id="city"
                  ref={city}
                  placeholder="Kolkata"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="techStack">TechStack :</label>
                <input
                  className="techStack-input"
                  type="text"
                  name="techStack"
                  id="techStack"
                  ref={techStack}
                  placeholder="JAVA,Spring,React"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="interests">Interests :</label>
                <input
                  className="interests-input"
                  type="text"
                  name="interests"
                  id="interests"
                  ref={interests}
                  placeholder="Reading,Coding"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="dob">Date of Birth :</label>
                <input
                  className="dob-input"
                  type="date"
                  name="dob"
                  id="dob"
                  ref={dob}
                  placeholder="Your username"
                />
              </div>

              <button type="submit" className="btn btn-primary register-btn">
                Register
              </button>
            </form>
            <p>
              Already registered? click here to{" "}
              <a href="#" onClick={() => setIsRegistered(true)}>
                logIn
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default RegisterPage;
