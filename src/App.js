import './App.css';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Github from './pages/Github';
import Docker from './pages/Docker';
import Kubernetes from './pages/Kubernetes';
import GCP from './pages/GCP';
import devops_img from "./images/grey-plexus-networking-2_gs4bVa0k.mp4"

function App() {
  return (
    <div className='App'>
      <video autoPlay muted loop>
        <source src={devops_img} type='video/mp4'></source>
      </video>    
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/github" element={<Github/>} />
          <Route exact path="/docker" element={<Docker/>} />
          <Route exact path="/kubernetes" element={<Kubernetes/>} />
          <Route exact path="/gcp" element={<GCP/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
