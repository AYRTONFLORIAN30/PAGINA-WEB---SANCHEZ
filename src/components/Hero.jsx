import React from 'react';
import './Hero.css';
import fondo from '../assets/hero-bg.jpg'; // Reemplaza con tu imagen

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="hero-content">
        <h1>
          TRANSPORTE DE <span className="resaltado">CARGA PESADA</span>
        </h1>
        <p>
          Transporte vía terrestre de maquinaria pesada, extra-dimensional,
          equipos diversos, estructuras y todo tipo de carga que requiera vehículos especiales.
        </p>
        <button className="cotizar-hero">Solicitar Cotización</button>
      </div>
    </section>
  );
}

export default Hero;
