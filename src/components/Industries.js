import React from 'react';
import './Industries.css';

const Industries = () => {
    return (
        <section className="industries-section">
            <h2>Nuestras Servicios</h2>
            <div className="industries-container">
                <div className="industry-item">
                    <div className="icon" style={{ backgroundColor: '#375FC1' }}>
                        <img src="/assets/laptop.png" alt="Salud Icono" />
                    </div>
                    <h3>Salud</h3>
                    <p>Brindamos soluciones tecnológicas avanzadas para hospitales y clínicas, mejorando la eficiencia y calidad del servicio.</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
                <div className="industry-item">
                    <div className="icon" style={{ backgroundColor: '#943F84' }}>
                        <img src="/assets/code.png" alt="Code Icono" />
                    </div>
                    <h3>Finanzas</h3>
                    <p>Nuestras herramientas ayudan a instituciones financieras a gestionar riesgos y mejorar la toma de decisiones.</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
                <div className="industry-item">
                    <div className="icon" style={{ backgroundColor: '#E53E3E' }}>
                        <img src="/assets/base-datos.png" alt="Educación Icono" />
                    </div>
                    <h3>Educación</h3>
                    <p>Desarrollamos plataformas educativas personalizadas para mejorar la experiencia de aprendizaje.</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
                <div className="industry-item">
                    <div className="icon" style={{ backgroundColor: '#2F855A' }}>
                        <img src="/assets/nube.png" alt="Retail Icono" />
                    </div>
                    <h3>Retail</h3>
                    <p>Ofrecemos soluciones para optimizar la gestión de inventarios y mejorar la experiencia del cliente.</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
                <div className="industry-item">
                    <div className="icon" style={{ backgroundColor: '#E53E3E' }}>
                        <img src="/assets/mobile.png" alt="Retail Icono" />
                    </div>
                    <h3>Retail</h3>
                    <p>Ofrecemos soluciones para optimizar la gestión de inventarios y mejorar la experiencia del cliente.</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
            </div>
        </section>
    );
}

export default Industries;
