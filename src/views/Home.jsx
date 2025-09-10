import { Link } from 'react-router-dom';
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

import proy1 from '../assets/proyecto-1.jpg';
import proy2 from '../assets/proyecto-2.jpg';
import proy3 from '../assets/proyecto-3.jpg';
import proy4 from '../assets/proyecto-4.jpg';
import proy5 from '../assets/proyecto-5.jpg';
import proy6 from '../assets/proyecto-6.jpg';
import proy7 from '../assets/proyecto-7.jpg';
import proy8 from '../assets/proyecto-8.jpg';

import gruaTelescopicaImg from '../assets/serv-grua-telescopica.jpg';
import transportePesadoImg from '../assets/serv-transporte-pesado.jpg';
import semitrailerImg      from '../assets/serv-semitrailer-grua.jpg';
import canastillaImg       from '../assets/serv-canastilla.jpg';
import mantenimientoImg    from '../assets/serv-mant-articuladas.jpg';
import izajesImg           from '../assets/serv-izajes-maniobras.jpg';

import './ProyectosSlider.css';

function Home() {
  const navigate = useNavigate();
  const proyectos = [
  { title: 'Proyecto 1', description: '', img: proy1 },
  { title: 'Proyecto 2', description: '', img: proy2 },
  { title: 'Proyecto 3', description: '', img: proy3 },
  { title: 'Proyecto 4', description: '', img: proy4 },
  { title: 'Proyecto 5', description: '', img: proy5 },
  { title: 'Proyecto 6', description: '', img: proy6 },
  { title: 'Proyecto 7', description: '', img: proy7 },
  { title: 'Proyecto 8', description: '', img: proy8 },
];

  // Configuración del slider
  const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,

  // 👇 Estas son las claves:
  swipeToSlide: true,       // Permite deslizar libremente hasta cualquier slide
  touchThreshold: 10,       // Menor valor = más sensible al arrastre
  pauseOnHover: true,       // Pausa autoplay cuando el mouse está encima
  pauseOnFocus: true,       // Pausa autoplay cuando haces clic o enfocas
  pauseOnDotsHover: true,   // Pausa autoplay al pasar sobre los puntos

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
        <span className="bold">GRÚAS</span>{' '}
        <span className="highlight">SANCHEZ</span>
      </h1>

      <p className="subtitulo">Experiencia y seguridad en cada izaje.</p>

      <p className="descripcion">
         <br />
        Atendemos proyectos grandes y pequeños con grúas modernas y operadores certificados. 
        Plan de izaje, visita técnica sin costo y respuesta 24/7 en Lima y provincias; seguridad y puntualidad garantizadas.
      </p>

      <button
  className="cotizar-btn"
  onClick={() => window.location.href = '/nosotros#formulario-cotizacion'}
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
      <Link to="/nosotros" className="btn-verde">
  Conócenos Aquí
</Link>

    </div>

    <div className="cards">
      <div className="card">
        <div className="card-header verde">Más de</div>
        <div className="años">22 <span>años</span></div>
        <p>
          Somos líderes en el alquiler de Grúas desde hace <strong>más de 22 años</strong>
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
      {/* Servicio 1 */}
      <div
        className="servicio-card"
        onClick={() => navigate('/servicio/grua-telescopica')}
        style={{ cursor: 'pointer' }}
      >
        <div className="imagen-servicio">
          <img src={gruaTelescopicaImg} alt="Alquiler de Grúas Telescópicas" className="imagen-servicio-img" />
          <div className="overlay-servicio">
            <h3 className="titulo-servicio">Servicio de Grúas Telescópicas</h3>
            <div
              className="plus-bar"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/servicio/grua-telescopica');
              }}
            >
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="servicio-descripcion">
          Servicio de grúas telescópicas potentes que van desde las 45 ton hasta las 650 ton
        </div>
      </div>

      {/* Servicio 2 */}
      <div
        className="servicio-card"
        onClick={() => navigate('/servicio/transporte-pesado')}
        style={{ cursor: 'pointer' }}
      >
        <div className="imagen-servicio">
          <img src={transportePesadoImg} alt="Transporte de Carga Pesada" className="imagen-servicio-img" />
          <div className="overlay-servicio">
            <h3 className="titulo-servicio">Servicio de Transporte de Carga Pesada</h3>
            <div
              className="plus-bar"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/servicio/transporte-pesado');
              }}
            >
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="servicio-descripcion">
          Servicio de Transporte de carga pesada con plataformas cama baja y cama alta
        </div>
      </div>

      {/* Servicio 3 */}
      <div
        className="servicio-card"
        onClick={() => navigate('/servicio/semitrailer')}
        style={{ cursor: 'pointer' }}
      >
        <div className="imagen-servicio">
          <img src={semitrailerImg} alt="Semitrailer Grúa" className="imagen-servicio-img" />
          <div className="overlay-servicio">
            <h3 className="titulo-servicio">Servicio de Semitrailer Grúa</h3>
            <div
              className="plus-bar"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/servicio/semitrailer');
              }}
            >
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="servicio-descripcion">
          Servicio de semitrailer con grúa para proyectos especiales
        </div>
      </div>

      {/* Servicio 4 */}
      <div
        className="servicio-card"
        onClick={() => navigate('/servicio/accesorios')}
        style={{ cursor: 'pointer' }}
      >
        <div className="imagen-servicio">
          <img src={canastillaImg} alt="Alquiler de Canastilla" className="imagen-servicio-img" />
          <div className="overlay-servicio">
            <h3 className="titulo-servicio">Alquiler de Canastilla</h3>
            <div
              className="plus-bar"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/servicio/accesorios');
              }}
            >
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="servicio-descripcion">
          Alquiler de canastillas para trabajos en altura
        </div>
      </div>

      {/* Servicio 5 */}
      <div
        className="servicio-card"
        onClick={() => navigate('/servicio/mantenimiento')}
        style={{ cursor: 'pointer' }}
      >
        <div className="imagen-servicio">
          <img src={mantenimientoImg} alt="Mantenimiento de Grúas Articuladas" className="imagen-servicio-img" />
          <div className="overlay-servicio">
            <h3 className="titulo-servicio">Mantenimiento de Grúas Articuladas</h3>
            <div
              className="plus-bar"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/servicio/mantenimiento');
              }}
            >
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="servicio-descripcion">
          Servicios de mantenimiento para grúas articuladas de diversas capacidades
        </div>
      </div>

      {/* Servicio 6 */}
        <div
          className="servicio-card"
          onClick={() => navigate('/servicio/izajes-maniobras')}
          style={{ cursor: 'pointer' }}
        >
          <div className="imagen-servicio">
            <img src={izajesImg} alt="Servicio de Izaje y Maniobras" className="imagen-servicio-img" />
            <div className="overlay-servicio">
              <h3 className="titulo-servicio">Servicio de Izaje y Maniobras</h3>
              <div
                className="plus-bar"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/servicio/izajes-maniobras'); // ← aquí también
                }}
              >
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="servicio-descripcion">
            Ejecución segura de izajes y maniobras con ingeniería, señalización y
            supervisión especializada.
          </div>
        </div>


    </div>
  </div>
</section>


      {/* Nuestros proyectos*/}
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
