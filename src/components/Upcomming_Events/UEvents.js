import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './UEvents.css'

const UEvents = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 43)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Upcoming Events</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            Expert talk on GSoC and Open Source
          </h3>
          <h5 className="vertical-timeline-element-title">
            By:- Mr.Sagar Utekar
          </h5>

          <p>
            {' '}
            💡 REGISTER NOW -{' '}
            <a href="https://forms.gle/ZRWQPujVSsmLRLZF7" target="_blank">
              https://forms.gle/ZRWQPujVSsmLRLZF7
            </a>
          </p>
          <div className="upcoming1">
            <img src="./images/sargar_utekar.png" />
          </div>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            Coding club Handover ceremony and big brain competition felicitation
          </h3>
        </VerticalTimelineElement> */}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
    </>
  )
}

export default UEvents
