import Navbar from "../Navbar/Navbar";
import Profile from "../utilities/ProfileCard/Profile";
import Footer from "../Footer/Footer";
import "./Faculty.css";
import "animate.css";

const Faculty = () => {
  return (
    <>
      <Navbar />

      <div className="card-profile">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 animate__animated animate__bounceInLeft">
          <Profile name="Prof.Avinash Golande" position="" />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 animate__animated animate__bounceInRight">
          <Profile name="Prof.Amruta Hingmire" position="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faculty;
