import React from 'react';
import './ServicioDetalle.css';
import imagenFondo from '../../assets/servicio-transporte-carga.jpg';

function TransportePesado() {
  const irACotizacion = () => {
    window.location.href = '/nosotros#formulario-cotizacion';
  };

  return (
    <section
      className="servicio-container"
      style={{ backgroundImage: `url(${imagenFondo})` }}
      aria-label="Alquiler de transporte de carga pesada"
    >
      <div className="contenido-servicio bloque-hero">
        <h1>SERVICIO DE TRANSPORTE DE CARGA PESADA</h1>
        <p>Transporte especializado para maquinaria pesada y estructuras de gran volumen.</p>
        <p>Flota moderna y personal experto para garantizar seguridad y puntualidad.</p>
        <p>¿Necesitas llevar tu carga a cualquier punto del país?</p>
        <button className="boton-cotizar" onClick={irACotizacion}>
          Solicitar Cotización
        </button>
      </div>
    </section>
  );
}
export default TransportePesado;
