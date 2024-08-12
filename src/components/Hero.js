import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <h1>Transformando la<br />tecnología para tu<br />negocio</h1>
            <p>Somos una empresa de tecnología que ofrece soluciones<br /> innovadoras para impulsar el crecimiento de tu negocio</p>
            <div className="hero-buttons">
                <button>Contactanos</button>
                <button className="nuestros-servicios">Nuestros servicios</button>
            </div>
        </div>
    );
};

export default Hero;
