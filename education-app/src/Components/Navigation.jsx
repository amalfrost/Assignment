import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./ComponentStyle.css";
function Navigation() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    // <Navbar bg="primary" expand="lg">
    //   <Container className="navcontainer">
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse className="nav-elemets" id="basic-navbar-nav">
    //       <Nav className="">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //     <Navbar.Collapse className="nav-elemets" id="basic-navbar-nav">
    //       <Nav className="">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <header>
    <div className="header__left">
      <h3 className="nav-head">
        <AiFillBank />
        LOGO
      </h3>
      <nav ref={navRef}>
        <div className="nav-items">
          <Link to={"/"}>
            <a >Dashboard</a>
          </Link>
          <Link to={"/courses"}>
          <a >Courses</a>
          </Link>
          <Link to={"/discussions"}>
          <a>Discussions</a>
          </Link>
          
          
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navigation;
