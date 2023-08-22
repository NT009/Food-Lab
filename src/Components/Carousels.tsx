import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import cslimg1 from "../images/carousel1.jpg";
import cslimg2 from "../images/carousel2.jpg";
import cslimg3 from "../images/carousel3.jpg";
import "./carousels.css";

function Carousels() {
  return (
    <div className="carousels">
      <Carousel>
        <Carousel.Item>
          <img src={cslimg1} alt="corsel1" className="carouselimg"></img>
          <Carousel.Caption>
            <h2>
              Empowering Society <br /> Through Science
            </h2>
            <p>
              Food Lab is one point solution for all <br />
              food safety needs
            </p>
            <Button variant="success">Get Started</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={cslimg2} alt="corsel1" className="carouselimg"></img>
          <Carousel.Caption>
            <h2>
              Empowering Society <br /> Through Science
            </h2>
            <p>
              Food Lab is one point solution for all <br />
              food safety needs
            </p>
            <Button variant="success">Get Started</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={cslimg3} alt="corsel1" className="carouselimg"></img>
          <Carousel.Caption>
            <h2>
              Empowering Society <br /> Through Science
            </h2>
            <p>
              Food Lab is one point solution for all <br />
              food safety needs
            </p>
            <Button variant="success">Get Started</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
