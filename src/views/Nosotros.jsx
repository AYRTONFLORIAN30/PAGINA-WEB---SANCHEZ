import './Nosotros.css';
import historiaImg from '../assets/historia.jpg';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cotizacion from './Cotizacion';

function Nosotros() {
  const location = useLocation();

  // 🔽 Scroll automático si hay un hash en la URL
  useEffect(() => {
    if (location.hash === '#formulario-cotizacion') {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Pequeña pausa para asegurar que se renderice
      }
    }
  }, [location]);

   const valores = [
    {
      icon: 'star',
      title: 'Calidad en el servicio',
      description: 'Brindamos soluciones confiables y de excelencia, superando las expectativas de nuestros clientes en cada proyecto.'
    },
    {
      icon: 'shield-alt',
      title: 'Seguridad',
      description: 'Priorizamos la seguridad en todas nuestras operaciones, garantizando el bienestar de nuestro personal, clientes y entorno.'
    },
    {
      icon: 'users',
      title: 'Trabajo en equipo',
      description: 'Fomentamos la colaboración, comunicación y compromiso para alcanzar objetivos comunes con eficiencia y armonía.'
    },
    {
      icon: 'hand-holding-heart',
      title: 'Integridad',
      description: 'Actuamos con honestidad, ética y responsabilidad, cumpliendo nuestros compromisos y valores en cada acción.'
    },
    {
      icon: 'cogs',
      title: 'Eficiencia',
      description: 'Optimizamos nuestros procesos y recursos para ofrecer resultados de alta calidad en el menor tiempo posible.'
    },
    {
      icon: 'leaf',
      title: 'Sostenibilidad',
      description: 'Promovemos prácticas responsables con el medio ambiente, contribuyendo al desarrollo sostenible de nuestra comunidad.'
    }
  ];

  return (
    <div className="nosotros-container">

    {/* BANNER DE NOSOTROS */}
<section className="nosotros-banner">
  {/* 🔽 Capa de oscurecimiento */}
  <div className="filtro-oscuro"></div>

  {/* 🔽 Contenido del banner */}
  <div className="overlay-nosotros">
    <div className="texto-nosotros">
      <h1>NOSOTROS</h1>
      <p>
        Somos una empresa reconocida a nivel nacional por nuestra experiencia y seguridad en izajes y maniobras de gran envergadura.
      </p>
    </div>
  </div>
</section>


      
      {/* Historia */}
      <section id="historia" className="historia-section">
        <div className="historia-content">
          <div className="historia-img-wrapper">
            <div className="green-border"></div>
            <img src={historiaImg} alt="Historia" />
          </div>
          <div className="text">
            <h2>SÁNCHEZ GRÚAS Y TRANSPORTES</h2>
            <p>Transportes Sánchez Grúas se fundó en el año 2010 la idea emprendedora de los hermanos Sánchez Medina</p>
            <p>15 años ardua labor nos ha dado la más amplia experiencia en los diferentes sectores como minería, energía, construcción e industrias en general.</p>
            <p>Actualmente contamos con más de <strong>20 colaboradores</strong> y una flota de más de <strong>10 equipos propios modernos</strong>.</p>
            <p>Entre <strong>nuestros clientes</strong> están Antamina, Nexa, Cosapi, Kallpa, Repsol, entre otros.</p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="mision-vision-section">
        <div className="mision-vision-card mision-left">
          <i className="fas fa-cogs"></i>
          <div className="text-content">
            <h2>MISIÓN</h2>
            <p>Ofrecemos servicios especializados de izaje de carga y transporte con altos estándares de seguridad, eficiencia operativa y atención personalizada, garantizando proyectos exitosos en tiempo y forma para nuestros clientes en todo el país.</p>
          </div>
        </div>

        <div className="mision-vision-card vision-right">
          <i className="fas fa-award"></i>
          <div className="text-content">
            <h2>VISIÓN</h2>
            <p>Ser referentes en el mercado nacional como empresa especializada en izaje de cargas y transporte de alto tonelaje, reconocidos por nuestra excelencia operativa, cumplimiento normativo y capacidad técnica para ejecutar proyectos complejos con precisión, seguridad y eficiencia.</p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="valores-section">
        <h2>Nuestros valores</h2>
        <div className="valores-grid">
          {valores.map((valor, idx) => (
            <div className="valor-cuadro" key={idx}>
              <i className={`fas fa-${valor.icon}`}></i>
              <h3>{valor.title}</h3>
              <p>{valor.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="formulario-cotizacion" className="cotizacion-section">
  <Cotizacion />
</section>
    </div>
  );
}

export default Nosotros;
