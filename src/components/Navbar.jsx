import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useNavigate, Link, useLocation } from 'react-router-dom';

function Navbar() {
  // Dropdown abierto SOLO para móvil
  const [openDropdown, setOpenDropdown] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  

  // Helpers para marcar activo según la ruta
  const isActive = (key) => {
    switch (key) {
      case 'home':
        return pathname === '/';
      case 'servicios':
        return pathname.startsWith('/servicio');
      case 'proyectos':
        return pathname.startsWith('/proyectos');
      case 'nosotros':
        return pathname === '/nosotros' || pathname.startsWith('/nosotros/');
      case 'blog':
        return pathname.startsWith('/blog');
      case 'contacto':
        return pathname.startsWith('/contacto');
      default:
        return false;
    }
  };

  // Cierra menú móvil y cualquier dropdown abierto
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown('');
  };

  // Toggle para dropdowns en móvil
  const toggleDropdown = (item, e) => {
    if (e) e.preventDefault();
    setOpenDropdown((prev) => (prev === item ? '' : item));
  };

  return (
    <header>
      {/* 🔝 Barra superior */}
      <div className="top-bar">
        <div className="social-icons">
          <a
            href="https://web.facebook.com/sanchezgruas.sac/"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/sanchezgruas?igsh=M2Z5NnZkcWJ5amxv"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/sanchezgruas/"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.tiktok.com/@sanchezgruas"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>

         {/* 📞 Contacto */}
    <div className="contact-info">
      <a href="tel:+51996046754" className="call-cta" aria-label="Llámanos al +51 996 133 033">
        <i className="fas fa-phone"></i>
        <span>(+51) 996 046 754</span>
      </a>

      <a href="tel:+51996046754" className="call-fab" aria-label="Llamar">
        <i className="fas fa-phone"></i>
      </a>

      <a href="mailto:tsanchezgruas@gmail.com" className="contact-link">
        <i className="fas fa-envelope"></i> doris.s@tgruasanchez.com
      </a>
    </div>
  </div>  {/* 👈 CIERRE DE top-bar QUE FALTABA */}

      {/* 🔽 Navbar principal */}
      <nav className="main-nav">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMobileMenu();
          }}
        >
          <img src={logo} alt="Logo Grúas" className="logo" />
        </Link>

        <button
          className="menu-toggle"
          onClick={() =>
            setMobileMenuOpen((prev) => {
              const next = !prev;
              if (!next) setOpenDropdown('');
              return next;
            })
          }
          aria-expanded={isMobileMenuOpen}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {/* Servicios (dropdown) */}
         <li className="dropdown">
  <a
    href="#"
    onClick={(e) => toggleDropdown('servicios', e)}
    className={isActive('servicios') || openDropdown === 'servicios' ? 'active' : ''}
    aria-expanded={openDropdown === 'servicios'}
  >
    Servicios ▾
  </a>

  

  <ul
    className="dropdown-menu"
    style={{ display: openDropdown === 'servicios' ? 'block' : undefined }}
    onClick={(e) => e.stopPropagation()}
  >
    <li>
      <Link
        to="/servicio/grua-telescopica"
        className={pathname === '/servicio/grua-telescopica' ? 'active-sub' : ''}
        onClick={closeMobileMenu}
      >
        Servicio de grúa telescópica
      </Link>
    </li>
    <li>
      <Link
        to="/servicio/transporte-pesado"
        className={pathname === '/servicio/transporte-pesado' ? 'active-sub' : ''}
        onClick={closeMobileMenu}
      >
        Servicio de transporte de carga pesada
      </Link>
    </li>
    <li>
      <Link
        to="/servicio/semitrailer"
        className={pathname === '/servicio/semitrailer' ? 'active-sub' : ''}
        onClick={closeMobileMenu}
      >
        Servicio de semitrailer grúa
      </Link>
    </li>
    <li>
      <Link
        to="/servicio/accesorios"
        className={pathname === '/servicio/accesorios' ? 'active-sub' : ''}
        onClick={closeMobileMenu}
      >
        Alquiler de canastillas
      </Link>
    </li>
    <li>
      <Link
        to="/servicio/mantenimiento"
        className={pathname === '/servicio/mantenimiento' ? 'active-sub' : ''}
        onClick={closeMobileMenu}
      >
        Servicio de mantenimiento de grúas articuladas
      </Link>
    </li>
    <li>
      <Link
        to="/servicio/izajes-maniobras"
        className={pathname === '/servicio/izajes-maniobras' ? 'active-sub' : ''}
        onClick={closeMobileMenu}
      >
        Servicio de izajes y maniobras
      </Link>
    </li>
  </ul>
</li>


          

          {/* Proyectos */}
          <li>
            <Link
              to="/proyectos"
              className={isActive('proyectos') ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Proyectos
            </Link>
          </li>

          {/* Nosotros (link simple) */}
<li>
  <Link
    to="/nosotros"
    className={isActive('nosotros') ? 'active' : ''}
    onClick={() => { 
      closeMobileMenu?.(); 
      setOpenDropdown?.(''); // por si usas este state en móvil
    }}
  >
    Nosotros
  </Link>
</li>


          {/* Blog */}
          <li>
            <Link
              to="/blog"
              className={isActive('blog') ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>

          {/* Contacto */}
          <li>
            <Link
              to="/contacto-info"
              className={isActive('contacto') ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>

        <button
          className="cotizar-btn"
          onClick={() => {
            closeMobileMenu();
            navigate('/nosotros#formulario-cotizacion');
          }}
        >
          Cotizar
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
