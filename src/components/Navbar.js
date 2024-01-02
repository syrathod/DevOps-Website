import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const location = useLocation();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand > <Link to="/">IEEE DevOps</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/github" className={location.pathname==="/github"?"activeNavLink":""}>GitHub</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/docker" className={location.pathname==="/docker"?"activeNavLink":""} >Docker</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/kubernetes" className={location.pathname==="/kubernetes"?"activeNavLink":""}>Kubernetes</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/gcp" className={location.pathname==="/gcp"?"activeNavLink":""}>GCP</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;
