import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div>
            <section class="contact-sections">
                <h2>Contactenos</h2>
                <div class="contact-form-container">
                    <div class="contact-buttons">
                        <button class="contact-type-btn">Persona natural</button>
                        <button class="contact-type-btn">Empresa</button>
                    </div>
                    <form class="contact-form">
                        <input type="text" name="name" placeholder="Ingresa tu nombre" required />
                        <input type="email" name="email" placeholder="Ingresa tu email" required />
                        <textarea name="message" placeholder="Escribe tu mensaje" required></textarea>
                        <button type="submit" class="submit-btn">Enviar</button>
                    </form>
                </div>
            </section>

            <section class="whatsapp-section">
                <div class="whatsapp-container">
                    <div class="whatsapp-content">
                        <h2>Escríbenos por WhatsApp</h2>
                        <p>Contáctanos por WhatsApp para una respuesta más rápida.</p>
                        <div class="whatsapp-details">
                            <button class="whatsapp-btn">
                                <img src="/assets/phone.png" alt="WhatsApp Icon" />
                                Enviar mensaje
                            </button>
                            <p class="whatsapp-number">+123 456 789</p>
                        </div>
                    </div>
                    <div class="whatsapp-image">
                        <img src="/assets/Whatsapp.png" alt="Imagen Descriptiva" />
                    </div>
                </div>
            </section>


            <section className="location-section">
                <h2>Ubiquenos</h2>
                <div className="location-container">
                    <div className="location-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31578.274582049704!2d-74.31461358504431!3d-8.373668208179735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a3b2374b2e291b%3A0xc8439c6e2894100d!2sComunidad%20Nativa%20de%20Nueva%20Betania%2025000!5e0!3m2!1ses-419!2spe!4v1724785146445!5m2!1ses-419!2spe"
                            title="Ubicación de la empresa"
                            width="800"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="contact-info">
                        <h3>Dirección</h3>
                        <p>Calle Falsa 123, Ciudad Ejemplo, País</p>
                        <h3>Teléfono</h3>
                        <p>+1 (123) 456-7890</p>
                        <h3>Correo</h3>
                        <p>info@ejemplo.com</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Contacts;
