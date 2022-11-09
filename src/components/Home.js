import { Button } from "react-bootstrap";
import Navbar from "./Navbar/Navbar";
import "./Home.css";
import Footer from "./Footer/Footer";
import Letter from "./utilities/Letter/Letter";
import Tips from "./Weekly_Tips/Tips";
import "animate.css";
import UEvents from "./Upcomming_Events/UEvents";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-div">
        <div className="home-container">
          <div className="home-1 animate__animated animate__bounceInUp">
            <Letter />
            <div className="button-div">
              <a
                href="https://linktr.ee/codingclub_rscoe"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  className="button animate__animated animate__bounceInUp"
                  variant="dark"
                >
                  Register
                </Button>
                {/* <button className="button animate__animated animate__bounce" href="">
                Register
              </button> */}
              </a>
            </div>
          </div>
          <div className="home-2 animate__animated animate__backInDown ">
            <img src="./assets/home.gif" alt="" />
          </div>
        </div>
      </div>
      <UEvents />
      <Tips />
      <Footer />
    </>
  );
};

export default Home;
