import React from 'react';  // Eliminar 'useState' ya que no lo estamos utilizando
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css';
import gruaBanner from '../assets/grua-banner.png';
import alianza from '../assets/alianza.png';
import iso from '../assets/iso.png';
import proyecto from '../assets/proyecto.jpg'; // Ruta corregida y revisada
import kallpa from '../assets/kallpa.png';
import calidda from '../assets/calidda.jpg';
import chinalco from '../assets/chinalco.jpg';
import consorciohob from '../assets/consorciohob.jpg';
import consorciosanmiguel from '../assets/consorciosanmiguel.jpg';
import grañamontero from '../assets/grañamontero.jpg';
import ingetest from '../assets/ingetest.jpg';
import ingenieriayproyectos from '../assets/ingenieriayproyectos.jpg';
import intecsa from '../assets/intecsa.jpg';
import iproyecsa from '../assets/iproyecsa.jpg';
import lapatrona from '../assets/lapatrona.jpg';
import nagasco from '../assets/nagasco.jpg';
import ohl from '../assets/ohl.jpg';
import pei from '../assets/pei.jpg';
import perforaciones from '../assets/perforaciones.jpg';
import perfotunel from '../assets/perfotunel.jpg';
import pevoex from '../assets/pevoex.jpg';
import ransa from '../assets/ransa.jpg';
import rindustrial from '../assets/rindustrial.jpg';
import sanmartin from '../assets/sanmartin.jpg';
import tecnicasmetalicas from '../assets/tecnicasmetalicas.jpg';
import teigatmi from '../assets/teigatmi.jpg';
import transportessanrafael from '../assets/transportessanrafael.jpg';
import trenelectrico from '../assets/trenelectrico.jpg';
import votorantim from '../assets/votorantim.jpg';



function Home() {
  const navigate = useNavigate();
  const proyectos = [
    { title: 'Proyecto 1', description: '', img: proyecto },
    { title: 'Proyecto 2', description: '', img: proyecto },
    { title: 'Proyecto 3', description: '', img: proyecto },
    { title: 'Proyecto 4', description: '', img: proyecto },
    { title: 'Proyecto 5', description: '', img: proyecto },
    { title: 'Proyecto 6', description: '', img: proyecto },
    { title: 'Proyecto 7', description: '', img: proyecto },
    { title: 'Proyecto 8', description: '', img: proyecto },
  ];

  // Configuración del slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,  // Deshabilitar los botones de navegación
    autoplay: true,  // Activar el movimiento automático
    autoplaySpeed: 5000,  // Cambia a 5000 (5 segundos) o más para un movimiento más lento
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
  className="hero-fullscreen"
  style={{ backgroundImage: `url(${gruaBanner})` }}
>
  <div className="overlay-hero">
    <div className="hero-texto-centrado">
      <h1>
        <span className="bold">GRÚAS Y TRANSPORTES</span>{' '}
        <span className="highlight">SANCHEZ</span>
      </h1>

      <p className="subtitulo">Izamos progreso sin fronteras</p>

      <p className="descripcion">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
      </p>

      <button
        className="cotizar-btn"
        onClick={() => window.location.href = '/cotizar'}
      >
        Solicitar Cotización
      </button>
    </div>
  </div>
</section>




      {/* Sección Experiencia y Respaldo */}
      <section className="experiencia-section">
        <div className="experiencia-content">
          <div className="texto">
            <h2>EXPERIENCIA Y RESPALDO</h2>
            <hr />
            <p>
              Sánchez Grúas se especializa en brindar un servicio integral de izajes que incluye el{' '}
              <strong>alquiler de grúas, ingeniería y transporte sobredimensionado.</strong>
            </p>
            <button className="btn-verde">Conócenos Aquí</button>
          </div>

          <div className="cards">
            <div className="card">
              <div className="card-header verde">Más de</div>
              <div className="años">22 <span>años</span></div>
              <p>
                Somos líderes en Alquiler de Grúas desde hace <strong>más de 22 años</strong>
              </p>
            </div>

            <div className="card">
              <div className="card-header negro">Homologaciones y Alianzas Estratégicas</div>
              <img src={alianza} alt="alianza" className="alianza-img" />
            </div>

            <div className="card">
              <div className="card-header negro">Certificaciones ISO</div>
              <img src={iso} alt="ISO" className="iso-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
<section className="servicios-section">
  <div className="container-servicios">
    <h2>
      <span className="black">NUESTROS</span> <span className="verde">SERVICIOS</span>
    </h2>

    <div className="servicios-grid">
      {[
        {
          title: 'Alquiler de Grúas Telescópicas',
          desc: 'Alquiler de grúas telescópicas potentes que van desde las 45 ton hasta las 650 ton',
          ruta: '/servicio/grua-telescopica',
        },
        {
          title: 'Alquiler de Transporte de Carga Pesada',
          desc: 'Transporte de carga pesada con plataformas cama baja y cama alta',
          ruta: '/servicio/transporte-pesado',
        },
        {
          title: 'Alquiler de Semitrailer Grúa',
          desc: 'Alquiler de semitrailer con grúa para proyectos especiales',
          ruta: '/servicio/semitrailer',
        },
        {
          title: 'Alquiler de Accesorios (Canastilla)',
          desc: 'Alquiler de accesorios como canastillas para trabajos en altura',
          ruta: '/servicio/accesorios',
        },
        {
          title: 'Mantenimiento de Grúas Articuladas',
          desc: 'Servicios de mantenimiento para grúas articuladas de diversas capacidades',
          ruta: '/servicio/mantenimiento',
        },
      ].map((servicio, index) => (
        <div className="servicio-card" key={index}>
          <div
            className="imagen-servicio"
            style={{ backgroundImage: `url(${proyecto})` }}
          >
            <div className="overlay">
              <h3>{servicio.title}</h3>
            </div>
          </div>
          <div
            className="plus-bar"
            onClick={() => navigate(servicio.ruta)}
            style={{ cursor: 'pointer' }}
          >
            <i className="fas fa-plus"></i>
          </div>
          <p>{servicio.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Nuestra experiencia */}
      <section className="experiencia-proyectos">
        <div className="container-experiencia">
          <h2>
            <span className="black">NUESTROS</span> <span className="verde">PROYECTOS</span>
          </h2>
          <p>Te presentamos algunos de nuestros últimos proyectos más destacados</p>

          <Slider {...settings}>
            {proyectos.map((proyecto, index) => (
              <div className="proyecto" key={index}>
                <img src={proyecto.img} alt={`Proyecto ${index + 1}`} />
                <div className="overlay">
                  <h1>{proyecto.title}</h1>
                  <p>{proyecto.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>


   
  {/* Empresas que nos respaldan */}
<section className="empresas-section">
  <h2>
    <span className="black">EMPRESAS QUE</span>{' '}
    <span className="verde">NOS RESPALDAN</span>
  </h2>

  <div className="empresas-wrapper">
    <Slider
      {...{
        infinite: true,
        speed: 900,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        swipeToSlide: true,
        draggable: true,
        touchThreshold: 15,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 4 } },
          { breakpoint: 768, settings: { slidesToShow: 3 } },
          { breakpoint: 480, settings: { slidesToShow: 2 } }
        ]
      }}
    >
      {[kallpa, calidda, chinalco, consorciohob, consorciosanmiguel, grañamontero,
        ingetest, ingenieriayproyectos, intecsa, iproyecsa, lapatrona,
        nagasco, ohl, pei, perforaciones, perfotunel, pevoex, ransa, rindustrial,
        sanmartin, tecnicasmetalicas, teigatmi, transportessanrafael,
        trenelectrico, votorantim
      ].map((logo, index) => (
        <div className="empresa-logo" key={index}>
          <img src={logo} alt={`Logo ${index + 1}`} />
        </div>
      ))}
    </Slider>
  </div>
</section>

    </>
  );
}

export default Home;
