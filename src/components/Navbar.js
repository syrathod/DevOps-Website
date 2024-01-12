import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { auth, myapp } from "../contexts/Firebase";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function NavBar() {
  const { currentUser } = useAuth();
  const [userInfo, setUserInfo] = useState(null);

  const db = getFirestore(myapp);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const docRef = doc(db, "users", currentUser.email);
        const docSnap = await getDoc(docRef);
        setUserInfo(docSnap.data().username);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    if (currentUser) {
      fetchUserInfo();
    }
  }, [currentUser, db]);

  // async function getUserInfo() {
  //   const docRef = doc(db, "users", currentUser.email); // ~
  //   const docSnap = await getDoc(docRef);
  //   // return "Hi";
  //   console.log(String(docSnap.data().username));
  //   return "Hi";
  // }

  const navigate = useNavigate();
  const rerouteToSignInPage = () => {
    navigate("/signin");
  };

  const handleLogin = () => {
    rerouteToSignInPage();
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const location = useLocation();
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand>
            <Link to="/">IEEE DevOps</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/github"
                className={
                  location.pathname === "/github" ? "activeNavLink" : ""
                }
              >
                GitHub
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/docker"
                className={
                  location.pathname === "/docker" ? "activeNavLink" : ""
                }
              >
                Docker
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/kubernetes"
                className={
                  location.pathname === "/kubernetes" ? "activeNavLink" : ""
                }
              >
                Kubernetes
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/gcp"
                className={location.pathname === "/gcp" ? "activeNavLink" : ""}
              >
                GCP
              </Link>
            </Nav.Link>
            <button
              type="button"
              class="btn btn-success"
              style={{
                marginLeft: "40px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              onClick={currentUser ? handleLogout : handleLogin}
            >
              {currentUser ? "Log Out" : "Sign In"}
            </button>
          </Nav>
          {currentUser && (
            <p style={{ color: "white", marginTop: "13px", fontSize: "17px" }}>
              Hello
              <span style={{ color: "#0f9048", fontWeight: "bold" }}>
                {" "}
                @{userInfo}
              </span>
            </p>
          )}
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;
