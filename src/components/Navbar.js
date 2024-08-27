import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src="/assets/logo copy.png" alt="Logo" />
                </Link>
            </div>
            <ul className="navbar-menu">
                <li><Link to="/aboutus">Nosotros</Link></li>
                <li><Link to="/industries">Industrias</Link></li>
                <li><Link to="/customers">Clientes</Link></li>
                <li><Link to="/events">Eventos</Link></li>
                <li><Link to="/contacts">Contáctenos</Link></li>
                <li><Link to="#"><img src="/assets/idioma.png" alt="EN/ES" /></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
