import React from 'react';
import './Events.css';

const Events = () => {
    return (
        <section className="blog-section">
    <h2>Nuestro blog</h2>
    <div className="event-container">
        <div className="event-card">
            <h3>Próximo Evento</h3>
            <p>Únete a nosotros en nuestro próximo evento de networking.</p>
            <img src="/assets/event-icon.png" alt="Próximo Evento" />
            <button className="register-button">Registrarse</button>
        </div>
    </div>
    <div className="blog-container">
        <div className="blog-column">
            <h3>Últimas publicaciones de Blog</h3>
            <p>Descubre nuestro último artículo sobre tendencias tecnológicas.</p>
            <div className="blog-card">
                <h4>Nuevo Lanzamiento de Producto</h4>
                <p>Descubre los detalles de nuestro último producto innovador.</p>
                <img src="/assets/blog1.png" alt="Lanzamiento de Producto" />
                <a href="#" className="learn-more">Leer más</a>
            </div>
            <div className="blog-card">
                <h4>Nuevo Lanzamiento de Producto</h4>
                <p>Descubre los detalles de nuestro último producto innovador.</p>
                <img src="/assets/blog2.png" alt="Lanzamiento de Producto" />
                <a href="#" className="learn-more">Leer más</a>
            </div>
        </div>
        <div className="blog-column">
            <h3>Últimas publicaciones de LinkedIn</h3>
            <p>Descubre lo último que hemos compartido en nuestra página de LinkedIn.</p>
            <div className="blog-card">
                <h4>Artículo Destacado</h4>
                <p>Descubre nuestro último artículo sobre tendencias tecnológicas.</p>
                <img src="/assets/linkedin1.png" alt="Artículo Destacado" />
                <a href="#" className="learn-more">Leer más</a>
            </div> 
            <div className="blog-card">
                <h4>Artículo Destacado</h4>
                <p>Descubre nuestro último artículo sobre tendencias tecnológicas.</p>
                <img src="/assets/linkedin2.png" alt="Artículo Destacado" />
                <a href="#" className="learn-more">Leer más</a>
            </div>  
        </div>
    </div>
</section>
    );
};

export default Events;
