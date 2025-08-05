import './Nosotros.css';
import historiaImg from '../assets/historia.jpg';
import React from 'react';

function Nosotros() {
  const valores = [
  {
    icon: 'people-arrows',
    title: 'Adaptabilidad',
    description: 'Continuamente buscamos mejorar el negocio y nosotros mismos para ser los mejores.'
  },
  {
    icon: 'user-circle',
    title: 'Orientación al cliente',
    description: 'Nos enfocamos en ayudar a nuestros clientes a alcanzar sus objetivos.'
  },
  {
    icon: 'leaf',
    title: 'Sustentabilidad',
    description: 'Nuestras acciones social-ambientalmente responsables de hoy son pensadas en el mundo que queremos mañana.'
  },
  {
    icon: 'hand-holding-heart',
    title: 'Integridad',
    description: 'Compromiso para hacer lo correcto. "Digo lo que pienso y hago lo que digo".'
  },
  {
    icon: 'handshake',
    title: 'Colaboradores comprometidos',
    description: 'Reconocemos que la colaboración entre nuestra gente es un factor clave para nuestro éxito.'
  }
];


  return (
    <div className="nosotros-container">
      <section id="historia" className="historia-section">
  <div className="historia-content">
    <div className="historia-img-wrapper">
      <div className="green-border"></div>
      <img src={historiaImg} alt="Historia" />
    </div>
    <div className="text">
      <h2>SANCHEZ GRUAS Y TRANSPORTES</h2>
      <p>Grúas y Maniobras se fundó hace más de 22 años con la idea emprendedora de los tres hermanos Sánchez Torres, quienes decidieron satisfacer la necesidad que se venía teniendo en el país por equipos pesados para realizar trabajos de gran magnitud como plantas termoeléctricas, refinerías, plantas industriales, hidroeléctricas, viaductos y otras grandes obras a nivel nacional, así como en puertos.</p>
      <p>2 décadas de trabajo nos han dado la más amplia experiencia en los diferentes sectores como minería, energía, Construcción, Hidrocarburos e Industrias en general.</p>
      <p>Al día de hoy Grúas y Maniobras cuenta con más de <strong>80 colaboradores</strong> y una flota de más de <strong>30 equipo propios modernos</strong> y de gran capacidad.</p>
      <p>Entre <strong>nuestros clientes</strong> contamos con prestigiosas empresas nacionales e internacionales como: Siemens, TSK, Cumbra, Antamina, Nexa, Cosapi, Termochilca, Mota Engil, Engie, Kallpa, Repsol, Minera Shougang, Consorcio Metro 2, Haug SA, entre otras grandes empresas.</p>
    </div>
  </div>
</section>


      <section className="mision-vision-section">
  <div className="mision-vision-card mision-left">
    <i className="fas fa-cogs"></i>
    <div className="text-content">
      <h2>MISIÓN</h2>
      <p>
        Brindar soluciones eficaces a todos los requerimientos solicitados, ofreciendo un servicio basado en calidad, experiencia, seguridad y cuidado del Medio Ambiente.
      </p>
    </div>
  </div>

  <div className="mision-vision-card vision-right">
    <i className="fas fa-award"></i>
    <div className="text-content">
      <h2>VISIÓN</h2>
      <p>
        Ser la empresa más importante y sólida del Perú en el rubro, con proyección para crecer en el mercado sudamericano.
      </p>
    </div>
  </div>
</section>


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

    </div>
  );
}

export default Nosotros;
