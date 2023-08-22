import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import introimg from "../images/introimg.png";
import "./intro.css";
const Intro = () => {
  return (
    <Container>
      <Row className="intro_heading">
        <Col md={12}>
          <h2>Food Lab Food Safety Services</h2>
        </Col>
      </Row>
      <Row className="intro_content">
        <Col lg={5}>
          <div className="layer1">
            <div className="layer2"></div>
              <img className="layer2" src={introimg} alt="intro_image"></img>
            
          </div>
        </Col>
        <Col lg={7}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            in iure dolores. Labore reprehenderit cupiditate numquam cum unde.
            Deserunt suscipit laudantium optio ullam assumenda excepturi,
            blanditiis velit officia quia voluptatibus eveniet temporibus
            aliquid laboriosam magnam. Labore placeat accusantium numquam sed
            reiciendis eum at. Repellat hic nisi officiis optio maxime possimus.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Intro;
