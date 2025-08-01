import React from 'react';
import './ServicioDetalle.css'; // Si usas un CSS común para servicios

function TransportePesado() {
  return (
    <div className="detalle-servicio">
      <div className="imagen-encabezado" style={{ backgroundImage: 'url(/assets/grua-banner.png)' }}>
        {/* Puedes cambiar la imagen por otra relacionada al transporte si deseas */}
      </div>
      <div className="contenido-servicio">
        <h1>ALQUILER DE TRANSPORTE DE CARGA PESADA</h1>
        <p>
          Servicio de transporte especializado para cargas pesadas y sobredimensionadas en todo el Perú.
        </p>
        <p>
          Contamos con plataformas cama baja y cama alta, equipos modernos y operadores certificados que garantizan seguridad en todo el proceso.
        </p>
        <p>
          ¿Tienes un proyecto que requiere transporte de maquinaria o estructuras pesadas?
        </p>
        <button className="boton-cotizar" onClick={() => window.location.href = '/cotizar'}>
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}

export default TransportePesado;
