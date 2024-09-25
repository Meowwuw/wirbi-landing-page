import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';
import BubbleBackground from './BubbleBackground'; // Import the Bubble Background

const slides = [
  {
    title: "Transformando la tecnología para tu negocio",
    description: "Somos una empresa de tecnología que ofrece soluciones innovadoras para impulsar el crecimiento de tu negocio",
    buttons: [
      { text: "Contáctanos", primary: true },
      { text: "Nuestros servicios", primary: false }
    ]
  },
  {
    title: "Innovación a tu alcance",
    description: "Descubre cómo nuestras soluciones tecnológicas pueden revolucionar tu empresa",
    buttons: [
      { text: "Explora más", primary: true },
      { text: "Casos de éxito", primary: false }
    ]
  },
  {
    title: "Impulsa tu negocio al siguiente nivel",
    description: "Aprovecha el poder de la tecnología para escalar y optimizar tus operaciones",
    buttons: [
      { text: "Empieza ahora", primary: true },
      { text: "Aprende más", primary: false }
    ]
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-carousel">
      <BubbleBackground /> {/* Add the bubble background */}
      {slides.map((slide, index) => (
        <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <div className="hero-buttons">
            {slide.buttons.map((button, btnIndex) => (
              <button key={btnIndex} className={button.primary ? '' : 'nuestros-servicios'}>
                {button.text}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="chevron left-chevron">&lt;</button>
      <button onClick={nextSlide} className="chevron right-chevron">&gt;</button>
    </div>
  );
};

export default HeroCarousel;
