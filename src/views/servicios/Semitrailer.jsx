import React from 'react';
import './ServicioDetalle.css';
import imagenFondo from '../../assets/servicio-semitrailer-grua.jpg';

function SemitrailerGrua() {
  const irACotizacion = () => {
    window.location.href = '/nosotros#formulario-cotizacion';
  };

  return (
    <div className="servicio-container" style={{ backgroundImage: `url(${imagenFondo})` }}>
      <div className="contenido-servicio centro-derecha overlay">
        <h1>ALQUILER DE SEMITRAILER CON GRÚA</h1>
        <p>Unidades equipadas con grúas integradas para transporte y carga/descarga eficiente.</p>
        <p>Ideal para operaciones en espacios reducidos o donde se requiera autonomía de carga.</p>
        <p>¿Necesitas un Semitrailer con grúa para tus operaciones?</p>
        <button className="boton-cotizar" onClick={irACotizacion}>
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}

export default SemitrailerGrua;
