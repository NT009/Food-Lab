import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logofoodlab.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigationbar.css";

const Navigationbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="bg-body-tertiary navigationbar"
      fixed="top"
    >
      <Container fluid>
        <img className="navigationbar_image" src={logo} alt="foodlogo"></img>
        <Navbar.Brand href="#home">Food Lab</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navigationlink ms-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Gallery">Gallery</Nav.Link>
            <Nav.Link href="#Co-traveller">traveller</Nav.Link>
            <Nav.Link href="#FAQs">FAQs</Nav.Link>
            <Nav.Link href="#Contact-us">Contacts</Nav.Link>
            <Nav.Link href="#Register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigationbar;
