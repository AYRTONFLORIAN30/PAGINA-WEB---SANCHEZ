import React from 'react';
import './ServicioDetalle.css'; // Asegúrate que este archivo existe y tiene estilos

function Semitrailer() {
  return (
    <div className="servicio-detalle">
      <div className="imagen-banner" style={{ backgroundImage: `url(/ruta/a/la/imagen.jpg)` }}>
        {/* puedes ajustar la ruta más adelante */}
      </div>
      <div className="contenido-servicio">
        <h2>ALQUILER DE SEMITRAILER CON GRÚA</h2>
        <p>Texto descriptivo sobre este servicio...</p>
        <button className="boton-cotizar">Solicitar Cotización</button>
      </div>
    </div>
  );
}

export default Semitrailer;
