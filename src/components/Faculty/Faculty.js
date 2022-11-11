import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Faculty.css'
import 'animate.css'

const Faculty = () => {
  return (
    <>
      <Navbar />

      <div className="card-profile">
        <div class="faculty-div-1 animate__animated animate__fadeIn">
          <div class="our-team ">
            <div class="picture">
              <img class="img-fluid" src="./team-images/Avinash-sir.png" />
            </div>
            <div class="team-content">
              <h3 class="name">Prof. Avinash Golande</h3>
              <h4 class="title">Assistant Professor</h4>
            </div>
            <ul class="social"> </ul>
          </div>
        </div>
        <div class="faculty-div-1 animate__animated animate__fadeIn">
          <div class="our-team ">
            <div class="picture">
              <img class="img-fluid" src="./team-images/amruta-mam.png" />
            </div>
            <div class="team-content">
              <h3 class="name">Prof. Amruta Hingmire</h3>
              <h4 class="title">Assistant Professor</h4>
            </div>
            <ul class="social"> </ul>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 animate__animated animate__bounceInRight"></div>
      </div>
      <Footer />
    </>
  )
}

export default Faculty
