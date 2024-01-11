import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Github from "./pages/Github";
import Docker from "./pages/Docker";
import Kubernetes from "./pages/Kubernetes";
import GCP from "./pages/GCP";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import devops_img from "./images/grey-plexus-networking-2_gs4bVa0k.mp4";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <video autoPlay muted loop>
          <source src={devops_img} type="video/mp4"></source>
        </video>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <NavBar />
                  <Home />
                </div>
              }
            />
            <Route
              exact
              path="/github"
              element={
                <div>
                  <NavBar />
                  <Github />
                </div>
              }
            />
            <Route
              exact
              path="/docker"
              element={
                <div>
                  <NavBar />
                  <Docker />
                </div>
              }
            />
            <Route
              exact
              path="/kubernetes"
              element={
                <div>
                  <NavBar />
                  <Kubernetes />
                </div>
              }
            />
            <Route
              exact
              path="/gcp"
              element={
                <div>
                  <NavBar />
                  <GCP />
                </div>
              }
            />
            <Route
              exact
              path="/signin"
              element={
                <div>
                  <Signin />
                </div>
              }
            />
            <Route
              exact
              path="/register"
              element={
                <div>
                  <Register />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
