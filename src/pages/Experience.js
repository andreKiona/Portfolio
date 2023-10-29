import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";


function Experiences() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
        className="vertical-timeline-element--edution"
        date="2013 - 2014"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element--education">
            Institut technique Industiel De Kitomesa.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Kinshasa, DRC
          </h4>

          <p>Matric: High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
        className="vertical-timeline-element--edution"
        date="2016 - 2019"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element--education">
            Cape Peninsula University Of Technology.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cape Town, SA
          </h4>
          <p>Nationa Diploma: Electrical & Electronics Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - Now"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element--work">
            Technical Engineer | RMA Tech - Sensor Security Systems
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Cape Town, SA
          </h4>

          <p> 
            Providing support to client remotely and on the telephone
            Providing product training for clients and tech solutions,
            Providing board-level repairs on electroncis devices
            Providing high level technical reports on each booked in repairs.
          </p>

        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element--work">
            Front End Web Developer: Part-time Intership - EcoMoja
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Cape Town, SA
          </h4>

          <p> 
            Handling tasks on the front-end UI of the web site
            Improving the user interface with react
          </p>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experiences;