import React from 'react';
import './Contact.css'; 

const Contact = () => {
    return (
        <div className="contact-section">
            <h2>Contáctanos</h2>
            <p>¿Tienes alguna pregunta o necesitas más información? Déjanos tus datos y nos pondremos en contacto contigo.</p>
            <form className="contact-form">
                <input type="text" placeholder="Nombre" name="name" required />
                <input type="email" placeholder="Correo Electronico" name="email" required />
                <textarea placeholder="Mensaje" name="message" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;
