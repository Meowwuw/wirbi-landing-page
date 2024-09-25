import React from 'react';
import './Services.css';

const Services = () => {
  const serviceData = [
    {
      icon: 'https://storage.googleapis.com/landing-page-w/assets/code.png',
      iconColor: 'linear-gradient(to right, #375FC1, #8BB6FF)',
      gradientColor: 'linear-gradient(to right, rgba(55, 95, 193, 0.3), rgba(139, 182, 255, 0.3))',
      title: 'Desarrollo de software',
      description: 'Creamos aplicaciones web y móviles a medida para satisfacer tus necesidades'
    },
    {
      icon: 'https://storage.googleapis.com/landing-page-w/assets/nube.png',
      iconColor: 'linear-gradient(to right, #943F84, #C77AB9)',
      gradientColor: 'linear-gradient(to right, rgba(148, 63, 132, 0.3), rgba(199, 122, 185, 0.3))',
      title: 'Servicios en la Nube',
      description: 'Migramos y gestionamos tus sistemas en la nube de manera segura y eficiente'
    },
    {
      icon: 'https://storage.googleapis.com/landing-page-w/assets/IT.png',
      iconColor: 'linear-gradient(to right, #ED1433, #FF5D6F)',
      gradientColor: 'linear-gradient(to right, rgba(237, 20, 51, 0.3), rgba(255, 93, 111, 0.3))',
      title: 'Infraestructura IT',
      description: 'Diseñamos y gestionamos tu infraestructura tecnológica para optimizar tu rendimiento'
    }
  ];

  return (
    <section className="services">
      <div className="services-header">
        <h2>Nuestros Servicios</h2>
        <p>Ofrecemos una amplia gama de servicios tecnológicos para ayudar a tu empresa a crecer y prosperar.</p>
      </div>
      <div className="service-list">
        {serviceData.map((service, index) => (
          <div className="service" key={index}>
            <div className="icon" style={{ background: service.iconColor }}>
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="gradient-bg-services" style={{ background: service.gradientColor }}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
