import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Carousel from 'react-bootstrap/Carousel'
import './Timeline.css'

const Timeline = () => {
  return (
    <>
      <Navbar />

      <div className="timeline-title">
        <h2> Coding Club RSCOE Events Timeline</h2>
      </div>

      <div className="timeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 43)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Events timeline</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>Timeline of events</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">
              FY Induction 2022
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <Carousel className="carousel">
              <Carousel.Item interval={800}>
                <img
                  className="carousel-image d-block w-100 h-100 "
                  src="./events-images/induction-1.jpeg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  className="d-block w-100"
                  src="./events-images/induction-2.jpeg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  className="d-block w-100"
                  src="./events-images/induction-3.jpeg"
                  alt="third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  className="d-block w-100"
                  src="./events-images/induction-4.jpeg"
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  className="d-block w-100"
                  src="./events-images/induction-5.jpeg"
                  alt="Fifth slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  className="d-block w-100"
                  src="./events-images/induction-6.jpeg"
                  alt="Sixth slide"
                />
              </Carousel.Item>
            </Carousel>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">
              Big Brain competion
            </h3>
            <p className="vertical-timeline-element-subtitle">
              The Big Brain’s Contest in Association with #CodingClubRSCOE. That
              was conducted for second year students at JSPM's Rajarshi Shahu
              College of Engineering. The contest consisted of 3 Rounds
            </p>
            <p>1. Aptitude 2. Technical 3. Interview.</p>
            <Carousel className="carousel">
              <Carousel.Item interval={800}>
                <img
                  className="carousel-image d-block w-100 h-100 "
                  src="./events-images/bigbrain-1.jpeg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  className="d-block w-100"
                  src="./events-images/bigbrain-2.jpeg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  className="d-block w-100"
                  src="./events-images/bigbrain-3.jpeg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  className="d-block w-100"
                  src="./events-images/bigbrain-4.jpeg"
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">
              Cube Competition
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <Carousel className="carousel">
              <Carousel.Item interval={800}>
                <img
                  className="carousel-image d-block w-100 h-100 "
                  src="./events-images/cube-1.jpeg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img
                  className="d-block w-100"
                  src="./events-images/cube-2.jpeg"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          />
        </VerticalTimeline>
      </div>
      <Footer />
    </>
  )
}

export default Timeline
