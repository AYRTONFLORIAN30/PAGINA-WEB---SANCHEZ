import React from 'react';
import './ServicioDetalle.css';
import imagenFondo from '../../assets/servicio-semitrailer-grua.jpg';

function Semitrailer() {
  const irACotizacion = () => {
    window.location.href = '/nosotros#formulario-cotizacion';
  };

  return (
    <section
      className="servicio-container"
      style={{ backgroundImage: `url(${imagenFondo})` }}
      aria-label="Alquiler de semitrailer con grúa"
    >
      <div className="contenido-servicio bloque-hero">
        <h1>ALQUILER DE SEMITRAILER CON GRÚA</h1>
        <p>Unidades con grúa integrada para transporte y carga/descarga eficiente.</p>
        <p>La solución ideal cuando se requiere autonomía y rapidez en maniobras.</p>
        <p>¿Necesitas un semitrailer con grúa para tus operaciones?</p>
        <button className="boton-cotizar" onClick={irACotizacion}>
          Solicitar Cotización
        </button>
      </div>
    </section>
  );
}
export default Semitrailer;
