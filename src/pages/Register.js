import React, { useState } from "react";
import ieee from "../images/logo.jpg";
import "./signin.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../contexts/Firebase";

export default function Register() {
  const [emailAddr, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [pass, setPass] = useState(null);
  const [ConfirmPass, setConfirmPass] = useState(null);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const handleConfirmPass = (event) => {
    setConfirmPass(event.target.value);
  };

  const navigate = useNavigate();
  const rerouteToSignInPage = () => {
    navigate("/signin");
  };

  const handleClick = (event) => {
    event.preventDefault();
    const email = createUserWithEmailAndPassword(auth, emailAddr, ConfirmPass)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        rerouteToSignInPage();
        // alert(`Registered succesfully, Email: ${emailAddr}, ${pass}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(`${errorCode}, ${errorMessage}`);
      });
  };

  return (
    <body class="d-flex align-items-center py-4 bg-body-tertiary">
      <div className="maindiv">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
        </symbol>

        <main class="form-signin w-100 m-auto">
          <form>
            <img class="mb-4" src={ieee} alt="" width="220" height="130" />
            <h1 class="h3 mb-3 fw-normal">Register an account</h1>
            <div class="form-floating">
              <input
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{ marginBottom: "5px" }}
                onChange={handleUsername}
              />
              <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating">
              <input
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                style={{ marginBottom: "5px" }}
                onChange={handleEmail}
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                style={{ marginBottom: "5px" }}
                onChange={handlePass}
              />
              <label for="floatingInput">Password</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                style={{ marginBottom: "15px" }}
                onChange={handleConfirmPass}
              />
              <label for="floatingPassword">Confirm Password</label>
            </div>
            <button
              class="btn btn-primary w-100 py-2"
              type="submit"
              style={{ marginTop: "5px", paddingBottom: "15px" }}
              onClick={handleClick}
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
