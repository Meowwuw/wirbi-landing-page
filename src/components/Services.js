import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services">
            <h2>Nuestros Servicios</h2>
            <p>Ofrecemos una amplia gama de servicios tecnológicos para ayudar a tu empresa a crecer y prosperar.</p>
            <div className="service-list">
                <div className="service">
                    <div className="icon" style={{ backgroundColor: '#375FC1' }}><img src="https://storage.googleapis.com/landing-page-w/assets/code.png" alt="Desarrollo de software" /></div>
                    <h3>Desarrollo de software</h3>
                    <p>Creamos aplicaciones web y móviles a medida para satisfacer tus necesidades</p>
                </div>
                <div className="service">
                    <div className="icon" style={{ backgroundColor: '#943F84' }}><img src="https://storage.googleapis.com/landing-page-w/assets/nube.png" alt="Servicios en la Nube" /></div>
                    <h3>Servicios en la Nube</h3>
                    <p>Migramos y gestionamos tus sistemas en la nube de manera segura y eficiente</p>
                </div>
                <div className="service">
                    <div className="icon" style={{ backgroundColor: '#ED1433' }}><img src="https://storage.googleapis.com/landing-page-w/assets/IT.png" alt="Infraestructura IT" /></div>
                    <h3>Infraestructura IT</h3>
                    <p>Diseñamos y gestionamos tu infraestructura tecnológica para optimizar tu rendimiento</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
