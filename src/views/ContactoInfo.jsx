import React from 'react';
import Cotizacion from './Cotizacion';
import './ContactoInfo.css';

const ContactoInfo = () => {
  return (
    <>
      <div className="contacto-hero">
        <div className="overlay-contacto">
          <div className="texto-hero-contacto">
            <h1>CONTACTO</h1>
            <p>
              Nos puedes contactar por cualquier medio proporcionado en esta página. 
              Con todo gusto atenderemos todas tus consultas.
            </p>
          </div>
        </div>
      </div>

      <div className="contacto-info-container">
        <h2 className="titulo-contacto">DATOS DE <span className="verde">CONTACTO</span></h2>

        <div className="info-boxes">
          <div className="info-box">
            <i className="fas fa-envelope icono-contacto"></i>
            <h3>ESCRÍBENOS</h3>
            <p>doris.s@tgruasanchez.com</p>
          </div>
          <div className="info-box">
            <i className="fas fa-phone icono-contacto"></i>
            <h3>PUEDES LLAMARNOS</h3>
            <p>+51 996046754 / +51 949344778</p>
          </div>
          <div className="info-box">
            <i className="fas fa-map-marker-alt icono-contacto"></i>
            <h3>UBÍCANOS</h3>
            <p>Cal. Los canarios mz. E2 Lote. 9A</p>
            <p>Santa María de Huachipa - Lima, Perú</p>
          </div>
        </div>

        <Cotizacion />
      </div>
    </>
  );
};

export default ContactoInfo;
