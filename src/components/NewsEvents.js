import React from 'react';
import './NewsEvents.css';

const NewsEvents = () => {
    return (
        <div className="news-events">
            <h2>Noticias y eventos</h2>
            <p>Mantente actualizado con las últimas noticias, eventos y contenido de nuestro blog.</p>
            <div className="news-container">
                {[...Array(3)].map((_, index) => (
                    <div className="news-item" key={index}>
                        <div className="news-image">
                            <img src='https://storage.googleapis.com/landing-page-w/assets/news.jpg' alt="Noticia" />
                        </div>
                        <h3>Título de la Noticia</h3>
                        <p>Descubre cómo la IA esta revolucionando la forma en que las empresas operan y toman decisiones.</p>
                        <button>Leer más</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsEvents;
