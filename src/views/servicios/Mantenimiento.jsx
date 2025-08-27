import React from 'react';
import './ServicioDetalle.css';
import imagenFondo from '../../assets/servicio-mantenimiento.jpg';

function Mantenimiento() {
  const irACotizacion = () => {
    window.location.href = '/nosotros#formulario-cotizacion';
  };

  return (
    <section
      className="servicio-container"
      style={{ backgroundImage: `url(${imagenFondo})` }}
      aria-label="Mantenimiento de grúas articuladas"
    >
      <div className="contenido-servicio bloque-hero">
        <h1>MANTENIMIENTO DE GRÚAS ARTICULADAS</h1>
        <p>Servicio técnico especializado en mantenimiento preventivo y correctivo.</p>
        <p>Personal capacitado y repuestos originales para un funcionamiento óptimo.</p>
        <p>¿Necesitas asegurar la disponibilidad de tus equipos?</p>
        <button className="boton-cotizar" onClick={irACotizacion}>
          Solicitar Cotización
        </button>
      </div>
    </section>
  );
}
export default Mantenimiento;
