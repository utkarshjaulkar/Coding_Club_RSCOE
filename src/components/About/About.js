import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './About.css'

const About = () => {
  return (
    <>
      <Navbar />

      <div className="about">
        <div class="card">
          <div class="card__inner">
            <div class="card__face card__face--front">
              <img src="./images/logo.png" />
            </div>
            <div class="card__face card__face--back">
              <div class="card__content">
                <div class="card__header">
                  <img src="./images/logo.png" alt="AA" class="pp" />
                  <h2>Coding Club RSCOE</h2>
                </div>
                <div class="card__body">
                  <p>
                    The club was started by a group of students from the
                    department of CSE who wanted to interact with like-minded
                    peers and explore the world of computer science. They are
                    driven by their passion for coding and hunger to learn,
                    which has helped the club scale new heights.
                  </p>
                  <p>
                    Coding Club helps members gain in-depth knowledge of coding.
                    This helps them immensely during placements and can also
                    bring laurels to the institution through various national
                    and international programming contests.
                  </p>
                  <p>
                    <div className="benefits">Benefits of coding club:-</div>
                    <ul>
                      <li>
                        NETWORK: Coding Club comprises one of the best coders
                        from different colleges. So working, learning, and
                        interacting with the bests in the field helps a lot in
                        improving.
                      </li>
                      <li>
                        CONTESTS: The frequent contests organized by Coding Club
                        help us in improving each day, testing our knowledge and
                        skills regularly, and competing against others.
                      </li>
                      <li>
                        REFERRALS: The Coding Club offers referrals to students
                        with distinguished resumes, and helps them get into
                        their dream job.
                      </li>

                      <li>
                        SESSIONS- Sessions on Competitive Programming, machine
                        learning, android, and other coding-related topics are
                        also held in which mentors do some amazing projects.
                      </li>
                      <li>
                        MENTOR SESSIONS: Mentor sessions are also one of the
                        most affordable for many students because they have
                        learned a lot from these sessions including Machine
                        Learning, Advanced-Data structure, and Android
                        Development.
                      </li>
                      <li>
                        OPPORTUNITIES: In the world of fake friends (Who never
                        shares valuable content), the coding club provides
                        opportunities to grab internships
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
