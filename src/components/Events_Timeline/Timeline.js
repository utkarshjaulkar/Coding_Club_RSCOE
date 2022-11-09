import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Timeline.css";

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
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
           
            iconStyle={{ background: "rgb(33, 150, 43)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Events timeline
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
             Timeline of events
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Month Year"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title"></h3>
            <h4 className="vertical-timeline-element-subtitle">
              Event 5
            </h4>
            <p>
              Details of Event
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Month Year"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title"></h3>
            <h4 className="vertical-timeline-element-subtitle">
              Event 4
            </h4>
            <p>
              Details of Event
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Month Year"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title"></h3>
            <h4 className="vertical-timeline-element-subtitle">
              Event 3
            </h4>
            <p>
              Details of Event
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Month Year"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title"></h3>
            <h4 className="vertical-timeline-element-subtitle">
              Event 2
            </h4>
            <p>
              Details of Event
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Month Year"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title"></h3>
            <h4 className="vertical-timeline-element-subtitle">
              Event 1
            </h4>
            <p>
              Details of Event
            </p>
          </VerticalTimelineElement>
          
          
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          />
        </VerticalTimeline>
      </div>
      <Footer />
    </>
  );
};

export default Timeline;
