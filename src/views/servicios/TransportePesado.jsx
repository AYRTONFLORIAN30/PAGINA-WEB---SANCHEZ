import React from 'react';
import './ServicioDetalle.css';
import imagenFondo from '../../assets/servicio-transporte-carga.jpg';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function TransporteCargaPesada() {
  const navigate = useNavigate(); // Hook para redirección

  const irACotizacion = () => {
    navigate('/cotizar');
  };

  return (
    <div className="servicio-container" style={{ backgroundImage: `url(${imagenFondo})` }}>
      <div className="contenido-servicio centro-derecha overlay">
        <h1>ALQUILER DE TRANSPORTE DE CARGA PESADA</h1>
        <p>Transporte especializado para maquinaria pesada, estructuras metálicas, y equipos de gran volumen.</p>
        <p>Unidades modernas y personal capacitado para garantizar seguridad y puntualidad en cada entrega.</p>
        <p>¿Necesitas transportar carga pesada a cualquier punto del país?</p>
        <button className="boton-cotizar" onClick={irACotizacion}>
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}

export default TransporteCargaPesada;
