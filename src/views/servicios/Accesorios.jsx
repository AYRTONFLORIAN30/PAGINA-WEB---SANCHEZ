import React from 'react';
import './ServicioDetalle.css';
import imagenFondo from '../../assets/serv-canastilla.jpg'; // ← tu archivo correcto

function Accesorios() {
  const irACotizacion = () => {
    window.location.href = '/nosotros#formulario-cotizacion';
  };

  return (
    <section
      className="servicio-container"
      style={{ backgroundImage: `url(${imagenFondo})` }}
      aria-label="Alquiler de accesorios (canastilla)"
    >
      <div className="contenido-servicio bloque-hero">
        <h1>ALQUILER DE CANASTILLA</h1>
        <p>Disponemos de canastillas especializadas como accesorio adicional para nuestras grúas.</p>
        <p>Ideales para trabajos en altura como mantenimiento, inspecciones o instalaciones.</p>
        <p>¿Necesitas una canastilla como complemento para tu maniobra?</p>
        <button className="boton-cotizar" onClick={irACotizacion}>
          Solicitar Cotización
        </button>
      </div>
    </section>
  );
}
export default Accesorios;
