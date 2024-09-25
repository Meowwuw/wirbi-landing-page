import React, { useState, useEffect } from 'react';
import './Timeline.css';

const timelineData = [
  {
    year: '2010',
    title: 'Fundación de Wirbi',
    image: '/assets/time1.jpg',
    description: 'Wirbi fue fundada con la visión de transformar la industria tecnológica.',
  },
  {
    year: '2015',
    title: 'Expansión a nuevos mercados',
    image: '/assets/time2.jpg',
    description: 'Wirbi expandió sus operaciones a nuevos mercados internacionales.',
  },
  {
    year: '2020',
    title: 'Reconocimiento como empresa innovadora',
    image: '/assets/linkedin1.png',
    description: 'Wirbi fue reconocida como una de las empresas más innovadoras del sector.',
  },
  {
    year: '2022',
    title: 'Crecimiento exponencial',
    image: '/assets/linkedin2.png',
    description: 'Wirbi experimentó un crecimiento exponencial, consolidándose como una de las empresas líderes en el mercado.',
  }
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (activeIndex !== prevIndex) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPrevIndex(activeIndex);
      }, 500); // Duración de la transición
      return () => clearTimeout(timer);
    }
  }, [activeIndex, prevIndex]);

  const handleYearClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const currentEvent = timelineData[activeIndex];
  const prevEvent = timelineData[prevIndex];

  return (
    <div className="timeline-container">
      <div className="years-column">
        {timelineData.map((event, index) => (
          <div
            key={index}
            className={`year ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleYearClick(index)}
          >
            {event.year}
          </div>
        ))}
      </div>
      <div className="event-details-container">
        <div className={`event-details ${isTransitioning ? 'transitioning' : ''}`}>
          <div className="image-container">
            <img src={prevEvent.image} alt={prevEvent.title} className="prev-image" />
            <img src={currentEvent.image} alt={currentEvent.title} className="current-image" />
          </div>
          <div className="event-text">

            <h3>{currentEvent.title}</h3>
            <p>{currentEvent.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;