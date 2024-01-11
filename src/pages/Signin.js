import React, { useState } from "react";
import "./signin.css";
import ieee from "../images/logo.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../contexts/Firebase";

export default function Signin() {
  const { currentUser } = useAuth();

  const [emailAddr, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [pass, setPass] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, emailAddr, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        rerouteToHomePage();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  //OnClickRegister
  const navigate = useNavigate();
  const rerouteToRegisterPage = () => {
    navigate("/register");
  };

  const rerouteToHomePage = () => {
    navigate("/");
  };

  return (
    <body class="d-flex align-items-center py-4 bg-body-tertiary">
      <div className="maindiv">
        <main class="form-signin w-100 m-auto">
          <form onSubmit={handleSignIn}>
            <img class="mb-4" src={ieee} alt="" width="220" height="130" />
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
            {currentUser && "Already signed in as " + currentUser.email}
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{ marginBottom: "5px" }}
                onChange={handleEmailChange}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                style={{ marginBottom: "15px" }}
                onChange={handlePassChange}
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button
              class="btn btn-primary w-100 py-2"
              type="submit"
              style={{ marginBottom: "15px" }}
            >
              Sign in
            </button>
            Don't have an account?
            <button
              class="btn btn-secondary w-100 py-2"
              onClick={rerouteToRegisterPage}
              style={{ marginTop: "5px", paddingBottom: "15px" }}
            >
              Register
            </button>
          </form>
        </main>
        <script
          src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>
      </div>
    </body>
  );
}
