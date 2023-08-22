import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../images/logofoodlab.jpg";
import "./footer.css";

function Footer() {
  return (
    <Container className="footer" fluid>
      <Row className="footer_address">
        <Col md={4}>
          <ul>
            <li className="logo_and_name">
              <img src={logo} alt="no img" />
              <h4>
                <b>Food Lab</b>
              </h4>
            </li>
            <li>203,Abc road, xyz</li>
            <li>
              <b>Phone</b> : +91 44 4569 2128
            </li>
            <li>
              <b>Email </b>: admin@parikshan.net.in
            </li>
          </ul>
        </Col>
        <Col md={8}>
          <Row className="footer_link">
            <Col md>
              <ul className="footer_link_first_part">
                <li className="footer_link_heading">
                  <b>Useful Link</b>
                </li>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#home">Services</a>
                </li>
                <li>
                  <a href="#home">Training Registration</a>
                </li>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#home">Services</a>
                </li>
              </ul>
            </Col>
            <Col md>
              <ul className="footer_link_second_part">
                <li>
                  <a href="#home">Support</a>
                </li>
                <li>
                  <a href="#home">Contact Us</a>
                </li>
              </ul>
            </Col>
            <Col md>
              <ul className="footer_link_thrid_part">
                <li className="footer_link_heading">
                  <b>Site Map</b>
                </li>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#home">Services</a>
                </li>
                <li>
                  <a href="#home">Training Registration</a>
                </li>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#home">Services</a>
                </li>
                <li>
                  <a href="#home">Training Registration</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="copyright_notice">
        <Col md>Food Lab Inc. &#169; Copyright 2022.All Rights Reserved.</Col>
      </Row>
    </Container>
  );
}

export default Footer;
