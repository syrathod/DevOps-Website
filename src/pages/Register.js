import React, { useState } from "react";
import ieee from "../images/logo.jpg";
import "./signin.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, myapp } from "../contexts/Firebase";
import { Alert } from "react-bootstrap";
import { collection, setDoc, doc } from "firebase/firestore";

export default function Register() {
  const db = getFirestore(myapp);

  const [emailAddr, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [pass, setPass] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [error, setError] = useState(null);

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

  const rerouteToHomePage = () => {
    navigate("/");
  };

  async function handleRegister(event) {
    event.preventDefault();

    if (pass === confirmPass) {
      try {
        setError("");
        await createUserWithEmailAndPassword(auth, emailAddr, confirmPass);
        await setDoc(doc(db, "users", emailAddr), {
          username: username,
          email: emailAddr,
        }).then(() => {
          rerouteToHomePage();
        });
      } catch {
        setError("Something went wrong.");
      }
    } else {
      setError("Passwords do not match.");
    }
  }

  return (
    <body class="d-flex align-items-center py-6 bg-body-tertiary">
      <div className="maindiv">
        <main class="form-signin w-100 m-auto">
          <form onSubmit={handleRegister}>
            <img class="mb-4" src={ieee} alt="" width="220" height="130" />
            <h1 class="h3 mb-3 fw-normal">Register an account</h1>
            <p style={{ maxWidth: "350px" }}>
              {error && <Alert variant="danger">{error}</Alert>}
            </p>
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
