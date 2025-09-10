// src/servicios/IzajesManiobras.jsx
import React from 'react';
import './ServicioDetalle.css';
import imagenFondo from '../../assets/serv-izajes-maniobras.jpg'; // ← actualizado

function IzajesManiobras() {
  const irACotizacion = () => {
    window.location.href = '/nosotros#formulario-cotizacion';
  };

  return (
    <section
      className="servicio-container"
      style={{ backgroundImage: `url(${imagenFondo})` }}
      aria-label="Servicio de izajes y maniobras"
    >
      <div className="contenido-servicio bloque-hero">
        <h1>SERVICIO DE IZAJES Y MANIOBRAS</h1>
        <p>
          Ofrecemos soluciones integrales para el levantamiento y movimiento de
          cargas de gran envergadura, garantizando seguridad y precisión.
        </p>
        <p>
          Nuestro personal especializado y equipos certificados aseguran un
          servicio confiable en proyectos industriales, de construcción y
          logística.
        </p>
        <p>¿Necesitas apoyo en izajes y maniobras críticas?</p>
        <button className="boton-cotizar" onClick={irACotizacion}>
          Solicitar Cotización
        </button>
      </div>
    </section>
  );
}

export default IzajesManiobras;
