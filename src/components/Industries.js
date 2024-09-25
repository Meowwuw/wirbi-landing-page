import React from 'react';
import './Industries.css';

const Industries = () => {
    const industriesData = [
        {
            icon: '/assets/laptop.png',
            iconColor: 'linear-gradient(to right, #375FC1, #8BB6FF)',
            gradientColor: 'linear-gradient(to right, rgba(55, 95, 193, 0.3), rgba(139, 182, 255, 0.3))',
            title: 'Salud',
            description: 'Brindamos soluciones tecnológicas avanzadas para hospitales y clínicas, mejorando la eficiencia y calidad del servicio.'
        },
        {
            icon: '/assets/code.png',
            iconColor: 'linear-gradient(to right, #943F84, #C77AB9)',
            gradientColor: 'linear-gradient(to right, rgba(148, 63, 132, 0.3), rgba(199, 122, 185, 0.3))',
            title: 'Finanzas',
            description: 'Nuestras herramientas ayudan a instituciones financieras a gestionar riesgos y mejorar la toma de decisiones.'
        },
        {
            icon: '/assets/base-datos.png',
            iconColor: 'linear-gradient(to right, #E53E3E, #FF5D6F)',
            gradientColor: 'linear-gradient(to right, rgba(237, 20, 51, 0.3), rgba(255, 93, 111, 0.3))',
            title: 'Educación',
            description: 'Desarrollamos plataformas educativas personalizadas para mejorar la experiencia de aprendizaje.'
        },
        {
            icon: '/assets/nube.png',
            iconColor: 'linear-gradient(to right, #2F855A, #38A169)',
            gradientColor: 'linear-gradient(to right, rgba(47, 133, 90, 0.3), rgba(56, 161, 105, 0.3))',
            title: 'Retail',
            description: 'Ofrecemos soluciones para optimizar la gestión de inventarios y mejorar la experiencia del cliente.'
        }
    ];

    return (
        <section className="industries-section">
            <h2>Nuestras Industrias</h2>
            <div className="industries-container">
                {industriesData.map((industry, index) => (
                    <div className="industry-item" key={index}>
                        <div className="icon" style={{ background: industry.iconColor }}>
                            <img src={industry.icon} alt={industry.title} />
                        </div>
                        <h3>{industry.title}</h3>
                        <p>{industry.description}</p>
                        <div className="gradient-bg-industries" style={{ background: industry.gradientColor }}></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Industries;
