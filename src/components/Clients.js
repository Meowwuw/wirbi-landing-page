import React from 'react';
import './Clients.css';

const Clients = () => {
    return (
        <div className="clients">
            <h2>Nuestros Clientes</h2>
            <p>Confiamos en las mejores empresas. Ayudamos a compañías de todos los tamaños a alcanzar sus objetivos.</p>
            <div className="client-grid">
                {/*Imágenes/logos como recursos estáticos */}
                {[...Array(6)].map((_, index) => (
                    <div className="client-logo" key={index}>
                        <img src='https://storage.googleapis.com/landing-page-w/assets/clients.jpg' alt="Cliente" />
                    </div>
                    
                ))}
            </div>
            <div className="client-buttons">
                <button className="contact">Contáctanos</button>
                <button className="more-info">Más información</button>
            </div>

        </div>
    );
};

export default Clients;
