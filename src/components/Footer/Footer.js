import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-section">
          <div className="footer-cta ">
            <div className="single-cta">
              <i className="fas fa-map-marker-alt"></i>
              <div className="cta-text">
                <h4>Find us</h4>
                <span>
                  JSPM Rajarshi shahu college of engineering , Tathawade,
                  Service Rd, Ashok Nagar, Tathawade, Pimpri-Chinchwad,
                  Maharashtra 411033
                </span>
              </div>
            </div>

            <div className="single-cta">
              <i className="fas fa-phone"></i>
              <div className="cta-text">
                <h4>Call us</h4>
                <span>Swasti Rai: 9766515250 </span>
                <span>Aryan Jain: 7498401239</span>
              </div>
            </div>

            <div className="single-cta">
              <i className="far fa-envelope-open"></i>
              <div className="cta-text">
                <h4>Mail us</h4>
                <span>codingclub@jspmrscoe.edu.in</span>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-logo">
              <img src="./images/logo.png" className="img-fluid" alt="logo" />
            </div>
          </div>
          <div className="footer-content-1">
            <div className="footer-social-icon">
              <span>Follow us</span>
              <a
                href="https://www.instagram.com/codingclub_rscoe/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images/insta.png" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/coding-club-rscoe/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images/linkedin.png" alt="" />
              </a>
              <a
                href="https://discord.com/invite/aEDeRazqPa"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images/discord.png" alt="" />
              </a>
            </div>
            <div className="developer">
              <p>
                {" "}
                Developed with ❤️ By{" "}
                <a href="https://www.linkedin.com/in/utkarsh-jaulkar/">
                  Utkarsh Jaulkar
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="row">
            <div className="">
              <div className="copyright-text">
                <p>
                  Copyright &copy; {new Date().getFullYear()}, All Right
                  Reserved
                </p>
                <div className="last">Coding Club RSCOE</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
