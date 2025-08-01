import React from 'react';
import './ServicioDetalle.css';
import imagenFondo from '../../assets/servicio-canastilla.jpg';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

function Accesorios() {
  const navigate = useNavigate(); // Hook para navegación

  const irACotizacion = () => {
    navigate('/cotizar');
  };

  return (
    <div className="servicio-container" style={{ backgroundImage: `url(${imagenFondo})` }}>
      <div className="contenido-servicio centro-derecha overlay">
        <h1>ALQUILER DE ACCESORIOS</h1>
        <p>Disponemos de canastillas especializadas como accesorio adicional para nuestras grúas.</p>
        <p>Ideales para trabajos en altura como mantenimiento, inspecciones o instalaciones.</p>
        <p>¿Necesitas una canastilla como complemento para tu maniobra?</p>
        <button className="boton-cotizar" onClick={irACotizacion}>
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}

export default Accesorios;
