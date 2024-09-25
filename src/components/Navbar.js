import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    // Definir rutas donde el texto debe ser negro
    const blackTextRoutes = ['/aboutus', '/industries', '/customers', '/events'];

    // Verificar si la ruta actual es una de las definidas
    const isBlackText = blackTextRoutes.includes(location.pathname);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src="/assets/logo copy.png" alt="Logo" />
                </Link>
            </div>
            <ul className="navbar-menu">
                <li><Link to="/aboutus" className={isBlackText ? 'black-text' : ''}>Nosotros</Link></li>
                <li><Link to="/industries" className={isBlackText ? 'black-text' : ''}>Industrias</Link></li>
                <li><Link to="/customers" className={isBlackText ? 'black-text' : ''}>Clientes</Link></li>
                <li><Link to="/events" className={isBlackText ? 'black-text' : ''}>Eventos</Link></li>
                <li><Link to="/contacts" className={isBlackText ? 'black-text' : ''}>Contáctenos</Link></li>
                <li><Link to="#"><img src="/assets/idioma.png" alt="EN/ES" /></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
