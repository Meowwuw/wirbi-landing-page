import React from 'react';
import './AboutUs.css';
import Timeline from './Timeline';

const AboutUs = () => {
    return (
        <div className="about-us-container">

            <section className="about-us-intro">
                <div className="about-us-text">
                    <p>Somos una empresa de tecnología que se dedica a <br /> brindar soluciones innovadoras a nuestros clientes.<br />
                        Nuestra misión es transformar la forma en que las<br /> empresas utilizan la tecnología para impulsar su<br /> crecimiento y éxito.</p>
                </div>
                <div className="about-us-image">
                    {/* Aquí se podría incluir un icono o imagen */}
                    <img src="/assets/About.png" alt="Empresa" />
                </div>
            </section>

            <section className="about-us-history">
                <Timeline />
            </section>

            <section className="about-us-mission">
                <h2>Nuestra Misión, Valores y Logros</h2>
                <div className="mission-values-container">
                    <div className="mission-values-item">
                        <div className="icon" style={{ backgroundColor: '#4A90E2' }}>
                            <img src="/assets/mission-icon.png" alt="Misión Icono" />
                        </div>
                        <h3>Nuestra Misión</h3>
                        <p>Nuestra misión es ayudar a nuestros clientes a alcanzar sus objetivos a través de soluciones tecnológicas innovadoras y personalizadas.</p>
                    </div>
                    <div className="mission-values-item">
                        <div className="icon" style={{ backgroundColor: '#9013FE' }}>
                            <img src="/assets/values-icon.png" alt="Valores Icono" />
                        </div>
                        <h3>Nuestros Valores</h3>
                        <p>Nos guiamos por un conjunto de valores que nos definen como empresa: innovación, excelencia, integridad y compromiso.</p>
                    </div>
                    <div className="mission-values-item">
                        <div className="icon" style={{ backgroundColor: '#D0021B' }}>
                            <img src="/assets/achievements-icon.png" alt="Logros Icono" />
                        </div>
                        <h3>Nuestros Logros</h3>
                        <p>A lo largo de los años, hemos logrado importantes hitos, como el reconocimiento como empresa innovadora y el crecimiento exponencial.</p>
                    </div>
                </div>
            </section>


            <section className="about-us-team">
                <h2>Nuestro equipo</h2>
                <p>Conoce a los miembros clave de nuestro equipo administrativo.</p>
                <div className="team-container">
                    <div className="team-member">
                        <img src="/assets/imagen1.png" alt="John Doe" width={300} />
                        <div>
                            <h3>John Doe</h3>
                            <p>CEO</p>
                            <p>John es el fundador y CEO de Wirbi. Con más de 15 años de experiencia en el sector tecnológico, lidera el equipo con visión y pasión.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="/assets/imagen2.png" alt="Jane Smith" width={300}/>
                        <div>
                            <h3>Jane Smith</h3>
                            <p>CTO</p>
                            <p>Jane es la CTO de Wirbi. Con un doctorado en Ciencias de la Computación, lidera el equipo de ingeniería y es responsable de la innovación tecnológica de la empresa.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="/assets/imagen3.png" alt="Michael Johnson" width={300}/>
                        <div>
                            <h3>Michael Johnson</h3>
                            <p>CFO</p>
                            <p>Michael es el CFO de Wirbi. Con más de 20 años de experiencia en finanzas corporativas, es responsable de la gestión financiera y la planificación estratégica de la empresa.</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="contact-section">
                <h2>Contáctenos</h2>
                <div className="contact-container">
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153167!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1a41b31%3A0x5045675218ce6e0!2z44CSMTAwMCBBdXN0cmFsaWEsIE1lbGJvdXJuZSBWSUMsIEHDpXNha2kg4oSY44KS44Gr44OG44Oq44K_44O844Or44Ki44Oh44Kk44O844OX44Kn44O8!5e0!3m2!1sja!2sjp!4v1532582317980"
                            width="600"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            title="Google Maps"
                        ></iframe>
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

export default AboutUs;
