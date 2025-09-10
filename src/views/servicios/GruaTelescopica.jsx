import React from 'react';
import './ServicioDetalle.css';
import imagenFondo from '../../assets/serv-grua-telescopica.jpg';

function GruaTelescopica() {
  const irACotizacion = () => {
    window.location.href = '/nosotros#formulario-cotizacion';
  };

  return (
    <section
      className="servicio-container"
      style={{ backgroundImage: `url(${imagenFondo})` }}
      aria-label="Alquiler de grúas telescópicas"
    >
      <div className="contenido-servicio bloque-hero">
        <h1>SERVICIO DE GRÚAS TELESCÓPICAS</h1>
        <p>Grúas modernas y potentes de marcas líderes (Terex, Grove, Demag).</p>
        <p>Maquinaria 100% operativa para maniobras en cualquier punto del país.</p>
        <p>¿Necesitas grúas telescópicas para tus proyectos?</p>
        <button className="boton-cotizar" onClick={irACotizacion}>
          Solicitar Cotización
        </button>
      </div>
    </section>
  );
}
export default GruaTelescopica;
