import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from './timelineElements';
import './Timeline.css';

const Timeline = () => {
  let workIconStyles = { background: "#BD2A5E" };

  return (
    <div>
      <h2 className="title">Nuestra historia</h2>
      <p>Wirbi fue fundada en xxx con el objetivo de transformar la forma en que las<br /> empresas utilizan la tecnología. 
      A lo largo de los años, hemos crecido y <br />evolucionado para convertirnos en una de las empresas líderes en el sector.</p>
      <VerticalTimeline>
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            dateClassName="date"
            iconStyle={workIconStyles}
            icon={<img src="/assets/work.png" alt="Work Icon" />}  
          >
            <h3 className="vertical-timeline-element-title">
              {element.title}
            </h3>
            <p id="description">{element.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
