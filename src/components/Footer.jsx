import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
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
          <p>Puedes seguirnos en nuestras redes:</p>

          <div className="redes-con-libro">
            <div className="redes">
              <a
                href="https://www.facebook.com/people/TRANSPORTES-S%C3%81NCHEZ-GR%C3%9AAS-SAC/100063488621412/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/sanchezgruas?igsh=M2Z5NnZkcWJ5amxv" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>

              <a
                  href="https://www.linkedin.com/company/sanchezgruas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              <a href="https://www.tiktok.com/@sanchezgruas" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>

            </div>
            <div className="libro-reclamaciones">
              <Link to="/libro-reclamaciones">
                <img src={libroReclamaciones} alt="Libro de Reclamaciones" className="libro-img" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2025 © Sanchez | Gruas y Transportes</p>
        <div className="footer-links">
          <span>Políticas de Privacidad</span> |
          <span>Políticas de Cookies</span> |
          <span>Responsabilidad Social Corporativa</span> |
          <span>Felicitaciones, Sugerencias y Reclamos</span> |
          <span>Política SIG</span>
        </div>
        <span className="dev">Developed by <strong>Ayrton Florian</strong></span>
      </div>
    </footer>
  );
};

export default Footer;
