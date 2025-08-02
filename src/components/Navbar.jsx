import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  const [activeItem, setActiveItem] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (item) => {
    setActiveItem(item);
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="top-bar">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="contact-info">
          <span><i className="fas fa-phone"></i> +51 996133033 / +51 955329346</span>
          <span><i className="fas fa-envelope"></i> tsanchezgruas@gmail.com</span>
          <span className="lang">ES - EN</span>
        </div>
      </div>

      <nav className="main-nav">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logo} alt="Logo Grúas" className="logo" />
        </Link>

        <button className="menu-toggle" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>

        <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className="dropdown">
            <a
              href="#"
              onClick={() => handleClick('servicios')}
              className={activeItem === 'servicios' ? 'active' : ''}
            >
              Servicios ▾
            </a>
            <ul className="dropdown-menu">
              <li><Link to="/servicio/grua-telescopica">Alquiler de grúa telescópica</Link></li>
              <li><Link to="/servicio/transporte-pesado">Alquiler de transporte de carga pesada</Link></li>
              <li><Link to="/servicio/semitrailer">Alquiler semitrailer grúa</Link></li>
              <li><Link to="/servicio/accesorios">Alquiler de accesorios (canastilla)</Link></li>
              <li><Link to="/servicio/mantenimiento">Mantenimiento de grúas articuladas</Link></li>
            </ul>
          </li>

          <li>
            <a
              href="#"
              onClick={() => handleClick('proyectos')}
              className={activeItem === 'proyectos' ? 'active' : ''}
            >
              Proyectos
            </a>
          </li>

          <li className="dropdown">
            <a
              href="#"
              onClick={() => handleClick('nosotros')}
              className={activeItem === 'nosotros' ? 'active' : ''}
            >
              Nosotros ▾
            </a>
            <ul className="dropdown-menu">
              <li><a href="/nosotros#historia">Historia</a></li>
              <li><a href="/nosotros#mision">Misión</a></li>
              <li><a href="/nosotros#vision">Visión</a></li>
              <li><a href="/nosotros#valores">Nuestros valores</a></li>
            </ul>
          </li>

          <li>
            <a
              href="#"
              onClick={() => handleClick('blog')}
              className={activeItem === 'blog' ? 'active' : ''}
            >
              Blog
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={() => handleClick('contacto')}
              className={activeItem === 'contacto' ? 'active' : ''}
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* ✅ Botón Cotizar correctamente alineado */}
        <button className="cotizar-btn" onClick={() => navigate('/cotizar')}>
          Cotizar
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
