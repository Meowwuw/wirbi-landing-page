import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Soluciones</a></li>
                <li><a href="#">Industrias</a></li>
                <li><a href="#">Clientes</a></li>
                <li><a href="#">Eventos</a></li>
                <li><a href="#">Contáctenos</a></li>
                <li><a href="#"><img src="/assets/idioma.png" alt="EN/ES" /></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
