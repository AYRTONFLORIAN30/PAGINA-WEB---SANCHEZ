import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [activeItem, setActiveItem] = useState('');
  const navigate = useNavigate();
  const handleClick = (item) => {
    setActiveItem(item);
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
        <img src={logo} alt="Logo Grúas" className="logo" />
        <ul className="menu">
          <li className="dropdown">
            <a
              href="#"
              onClick={() => handleClick('servicios')}
              className={activeItem === 'servicios' ? 'active' : ''}
            >
              Servicios ▾
            </a>
            <ul className="dropdown-menu">
              <li><a href="#">Alquiler de grúa telescópica</a></li>
              <li><a href="#">Alquiler de transporte de carga pesada</a></li>
              <li><a href="#">Alquiler semitrailer grúa</a></li>
              <li><a href="#">Alquiler de accesorios (canastilla)</a></li>
              <li><a href="#">Mantenimiento de grúas articuladas</a></li>
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
              <li><a href="#">Historia</a></li>
              <li><a href="#">Misión</a></li>
              <li><a href="#">Visión</a></li>
              <li><a href="#">Nuestros valores</a></li>
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
        <button className="cotizar-btn" onClick={() => navigate('/cotizar')}>Cotizar</button>

      </nav>
    </header>
  );
}

export default Navbar;
