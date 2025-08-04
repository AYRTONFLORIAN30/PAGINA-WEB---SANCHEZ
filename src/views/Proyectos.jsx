import React from 'react';
import './Proyectos.css';
import { proyectos } from '../data/proyectosData';

function Proyectos() {
  return (
    <div className="proyectos-container">
      <section className="proyectos-hero sin-linea">
        <div className="overlay">
  <div className="texto-hero-proyectos">
    <h1>
      <span className="verde">NUESTROS</span> PROYECTOS
    </h1>
    <p>Te presentamos nuestros proyectos más destacados en más de 19 años de experiencia.</p>
  </div>
</div>

      </section>

      <section className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="proyecto-card">
            <div className="proyecto-img">
              <img src={proyecto.imagen} alt={proyecto.titulo} />
              <div className={`categoria-tag ${proyecto.categoria.toLowerCase()}`}>
                {proyecto.categoria}
              </div>
              <div className="boton-expandir">+</div>
            </div>
            <div className="proyecto-info">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <p className="proyecto-fecha">📅 {proyecto.fecha}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Proyectos;
