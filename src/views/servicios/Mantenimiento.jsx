import React from 'react';
import './ServicioDetalle.css';
import imagenFondo from '../../assets/servicio-mantenimiento.jpg';
import { useNavigate } from 'react-router-dom'; // Importar hook

function Mantenimiento() {
  const navigate = useNavigate(); // Inicializar

  const irACotizacion = () => {
    navigate('/cotizar');
  };

  return (
    <div className="servicio-container" style={{ backgroundImage: `url(${imagenFondo})` }}>
      <div className="contenido-servicio centro-derecha overlay">
        <h1>MANTENIMIENTO DE GRÚAS ARTICULADAS</h1>
        <p>Ofrecemos servicio técnico especializado en mantenimiento preventivo y correctivo de grúas articuladas.</p>
        <p>Contamos con personal altamente capacitado y repuestos originales.</p>
        <p>¿Necesitas asegurar el funcionamiento óptimo de tus grúas?</p>
        <button className="boton-cotizar" onClick={irACotizacion}>
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}

export default Mantenimiento;
