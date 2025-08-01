import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import libroReclamaciones from '../assets/libro-reclamaciones.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>
            Líderes en <span className="verde-text">Alquiler</span> de grúas por más de 19 años.
          </p>
          <p>Izamos progreso sin fronteras</p>
          <p className="horario">
            <i className="fas fa-clock verde-text"></i> Horario de atención:<br />
            Lun-Vier : 8am - 7pm<br />
            Sáb : 8am - 1pm
          </p>
        </div>

        <div className="footer-col">
          <h3>DATOS DE CONTACTO</h3>
          <p><i className="fas fa-envelope verde-text"></i> administracion@tgruasanchez.com</p>
          <p><i className="fas fa-phone verde-text"></i> Central: (51) 356-5800</p>
          <p><i className="fas fa-mobile-alt verde-text"></i> +51 999999999 / +51 999999999</p>
          <p><i className="fas fa-map-marker-alt verde-text"></i> Av. Las Torres Sub Lt 7-C S/N<br />Zona Norte de la Baja de Lima<br /> Lurigancho – Huachipa</p>
        </div>

        <div className="footer-col">
          <h3>Gruas y Transportes | Sanchez</h3>
          <p>
            <img src="https://flagcdn.com/16x12/pe.png" alt="Perú" /> Perú
          </p>
          <p>Puedes seguirnos en nuestras redes:</p>

          <div className="redes-con-libro">
            <div className="redes">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-youtube"></i>
            </div>
            <div className="libro-reclamaciones">
              <a href="#">
                <img src={libroReclamaciones} alt="Libro de Reclamaciones" className="libro-img" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2025 © Sanchez | Gruas y Transportes</p>
        <div className="footer-links">
          <a href="#">Políticas de Privacidad</a> |
          <a href="#">Políticas de Cookies</a> |
          <a href="#">Responsabilidad Social Corporativa</a> |
          <a href="#">Felicitaciones, Sugerencias y Reclamos</a> |
          <a href="#">Política SIG</a>
        </div>
        <span className="dev">Developed by <strong>Ayrton Florian</strong></span>
      </div>
    </footer>
  );
};

export default Footer;
