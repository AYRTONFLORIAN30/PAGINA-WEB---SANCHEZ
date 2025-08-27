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
      {/* 🔝 Barra superior */} 
      <div className="top-bar"> 
        <div className="social-icons"> 
          <a 
            href="https://www.facebook.com/people/TRANSPORTES-S%C3%81NCHEZ-GR%C3%9AAS-SAC/100063488621412/" 
            target="_blank" 
            rel="noopener noreferrer" 
          > 
            <i className="fab fa-facebook-f"></i> 
          </a> 
          <a 
            href="https://www.instagram.com/sanchezgruas?igsh=M2Z5NnZkcWJ5amxv" 
            target="_blank" 
            rel="noopener noreferrer" 
          > 
            <i className="fab fa-instagram"></i> 
          </a> 
          <a 
            href="https://www.linkedin.com/company/sanchezgruas/" 
            target="_blank" 
            rel="noopener noreferrer" 
          > 
            <i className="fab fa-linkedin-in"></i> 
          </a> 
          <a 
            href="https://www.tiktok.com/@sanchezgruas" 
            target="_blank" 
            rel="noopener noreferrer" 
          > 
            <i className="fab fa-tiktok"></i> 
          </a> 
        </div> 

        {/* 📞 Contacto */} 
        <div className="contact-info"> 
          <a href="tel:+51996046754" className="contact-link"> 
            <i className="fas fa-phone"></i> +51 996 133 033 
          </a> 
          <span className="sep">/</span> 
          <a href="tel:+51996133401" className="contact-link"> 
            +51 965 430 434 
          </a> 
          <a href="mailto:tsanchezgruas@gmail.com" className="contact-link"> 
            <i className="fas fa-envelope"></i> tsanchezgruas@gmail.com 
          </a> 
        </div> 
      </div> 

      {/* 🔽 Navbar principal */} 
      <nav className="main-nav"> 
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        > 
          <img src={logo} alt="Logo Grúas" className="logo" /> 
        </Link> 

        <button 
          className="menu-toggle" 
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} 
        > 
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
            <Link 
              to="/proyectos" 
              className={activeItem === 'proyectos' ? 'active' : ''} 
              onClick={() => setActiveItem('proyectos')} 
            > 
              Proyectos 
            </Link> 
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
              <li><Link to="/nosotros">Más de nosotros</Link></li> 
              <li><Link to="/nosotros/responsabilidad-social">Responsabilidad Social Corporativa</Link></li> 
            </ul> 
          </li> 

          <li> 
            <Link 
              to="/blog" 
              onClick={() => handleClick('blog')} 
              className={activeItem === 'blog' ? 'active' : ''} 
            > 
              Blog 
            </Link> 
          </li> 

          <li> 
            <Link 
              to="/contacto-info" 
              className={activeItem === 'contacto' ? 'active' : ''} 
              onClick={() => handleClick('contacto')} 
            > 
              Contacto 
            </Link> 
          </li> 
        </ul> 

        <button 
          className="cotizar-btn" 
          onClick={() => navigate('/nosotros#formulario-cotizacion')} 
        > 
          Cotizar 
        </button> 
      </nav> 
    </header> 
  ); 
} 

export default Navbar;
