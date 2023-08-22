import Card from "react-bootstrap/Card";
import Navigationbar from "../Components/Navigationbar";
import Intro from "../Components/Intro";
import Footer from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import Carousels from "../Components/Carousels";
const Home = () => {
  return (
    <div className="home">
      <Card>
        <Card.Header>
          <Navigationbar />
        </Card.Header>
        <div className="body_content">
          <Card.Body>
            <Carousels></Carousels>
            <Intro></Intro>
          </Card.Body>
        </div>
        <Card.Footer><Footer/></Card.Footer>
      </Card>
    </div>
  );
};
export default Home;
