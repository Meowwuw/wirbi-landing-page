import React from 'react';
import './Customers.css';

const Customers = () => {
    return (
        <section className="customers-section">
            <h2>Nuestros clientes</h2>
            <div className="customer-logos">
                <img src="/assets/clients4.gif" alt="Cliente 4" />
                <img src="/assets/clients2.png" alt="Cliente 2" />
                <img src="/assets/clients3.png" alt="Cliente 3" />
                <img src="/assets/clients1.gif" alt="Cliente 1" />

            </div>

            <h2>Testimonios</h2>
            <div className="testimonials">

                <div className="testimonial-item">
                    <p>"Acme Tech ha sido un socio estratégico clave para nosotros. Su equipo de expertos nos ha ayudado a transformar nuestro negocio con soluciones innovadoras."</p>
                    <h4>
                        <img src="/assets/person-icon.png" alt="Persona Icono" />
                        John Doe
                    </h4>
                    <p>CEO, Empresa XYZ</p>
                </div>
                <div className="testimonial-item">
                    <p>"Trabajar con Acme Tech ha sido una experiencia excepcional. Su enfoque en la calidad y la atención al cliente es realmente impresionante."</p>
                    <h4>
                        <img src="/assets/person-icon.png" alt="Persona Icono" />
                        Sarah Miller</h4>
                    <p>Directora de TI, Empresa ABC</p>
                </div>
                <div className="testimonial-item">
                    <p>"Acme Tech ha sido un socio confiable y de confianza. Su capacidad para entender nuestras necesidades y proporcionar soluciones a medida es realmente impresionante."</p>
                    <h4>
                        <img src="/assets/person-icon.png" alt="Persona Icono" />Lisa Martinez</h4>
                    <p>Gerente de Proyectos, Empresa DEF</p>
                </div>
            </div>

            <h2>Nuestros partners</h2>
            <div className="partners-logos">
                <img src="/assets/ibm.png" alt="Partner 1" />
                <img src="/assets/huawei.png" alt="Partner 2" />
                <img src="/assets/huawei.png" alt="Partner 3" />
                <img src="/assets/ibm.png" alt="Partner 4" />
            </div>
        </section>
    );
};

export default Customers;
