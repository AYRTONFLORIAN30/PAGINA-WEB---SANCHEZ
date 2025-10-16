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
            Líderes en el<span className="verde-text"> Alquiler</span> de grúas desde hace 10 años.
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
          <p><i className="fas fa-envelope verde-text"></i> doris.s@tgruasanchez.com</p>
          <p><i className="fas fa-mobile-alt verde-text"></i> +51 996 046 754  /  +51 949 344 778</p>
          <p>
  <i className="fas fa-map-marker-alt verde-text"></i>
  Base 2, Los Angeles, Lurigancho-Chosica 15461
</p>
<p style={{ marginLeft: '18px' }}>
  Fundo Huachipa - Lurigancho
</p>


        </div>

        <div className="footer-col">
          <h3>Grúas y Transportes Sánchez</h3>
          <p>Puedes seguirnos en nuestras redes:</p>

          <div className="redes-con-libro">
            <div className="redes">
              <a
                  href="https://web.facebook.com/sanchezgruas.sac/"
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
        <p>Copyright 2025 © Sánchez | Grúas y Transportes</p>
        <div className="footer-links">
          <span>Políticas de Privacidad</span> |
          <span>Políticas de Cookies</span> |
          <span>Responsabilidad Social Corporativa</span> |
          <span>Felicitaciones, Sugerencias y Reclamos</span> |
          <span>Política SIG</span>
        </div>
        <span className="dev">
  Developed by{" "}
  <a
    href="https://github.com/AYRTONFLORIAN30"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Ir al perfil de GitHub de Ayrton Florian (se abre en una nueva pestaña)"
    className="dev-link"
  >
    <strong>Ayrton Florian</strong>
  </a>
</span>

      </div>
    </footer>
  );
};

export default Footer;
