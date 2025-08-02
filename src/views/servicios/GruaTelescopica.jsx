import React from 'react';
import './ServicioDetalle.css';
import imagenFondo from '../../assets/servicio-grua-telescopica.jpg';
import { useNavigate } from 'react-router-dom'; // <-- Importamos useNavigate

function GruaTelescopica() {
  const navigate = useNavigate(); // <-- Hook para navegar

  const irACotizacion = () => {
    navigate('/cotizar');
  };

  return (
    <div className="servicio-container" style={{ backgroundImage: `url(${imagenFondo})` }}>
      <div className="contenido-servicio centro-derecha overlay">
        <h1>ALQUILER DE GRÚAS TELESCÓPICAS</h1>
        <p>Grúas Telescópicas modernas, potentes, de las mejores marcas (Terex, Grove, Demag).</p>
        <p>Maquinaria 100% operativa para realizar cualquier maniobra en cualquier punto del país.</p>
        <p>¿Necesitas Grúas Telescópicas para tus proyectos?</p>
        <button className="boton-cotizar" onClick={irACotizacion}>
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}

export default GruaTelescopica;
