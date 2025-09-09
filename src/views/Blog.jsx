import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import portadaBlog from '../assets/blog-portada.jpg';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.jpg';
import blog7 from '../assets/blog7.jpg';
import blog8 from '../assets/blog8.jpg';

// Exportamos los artículos para usarlos también en BlogDetalle.jsx
export const articulos = [
  {
    id: 1,
    titulo: 'Alquiler de Grúas RT: La Solución Perfecta para tus Proyectos',
    resumen: 'En muchas situaciones, el uso de una grúa es necesario […]',
    fecha: '13/06/2023',
    imagen: blog1,
    categoria: 'Blog',
    contenido: `En muchas situaciones, el uso de una grúa es necesario para realizar estas tareas de manera eficiente y segura. Es por eso que el alquiler de grúas RT se ha vuelto cada vez más popular en la industria...`
  },
  {
    id: 2,
    titulo: 'Grúas Telescópicas: Todo lo que Necesitas Saber',
    resumen: 'Las grúas telescópicas son un tipo de maquinaria pesada utilizada […]',
    fecha: '06/06/2023',
    imagen: blog2,
    categoria: 'Blog',
    contenido: `Las grúas telescópicas tienen un brazo extensible que facilita el acceso a lugares de difícil alcance. Son ideales para trabajos de construcción, minería y rescate...`
  },
  {
    id: 3,
    titulo: 'Camiones Grúa en Proyectos Modernos',
    resumen: 'Una opción versátil para levantar y trasladar materiales pesados […]',
    fecha: '30/05/2023',
    imagen: blog3,
    categoria: 'Artículos',
    contenido: `Los camiones grúa ofrecen movilidad y capacidad de carga, combinando transporte con levantamiento de equipos. Se utilizan mucho en obras civiles y logística...`
  },
  {
    id: 4,
    titulo: '¿Qué es la Ingeniería de Izajes?',
    resumen: 'Una disciplina fundamental en la planificación y seguridad […]',
    fecha: '16/05/2023',
    imagen: blog4,
    categoria: 'Artículos',
    contenido: `La ingeniería de izajes se encarga del cálculo, seguridad y planificación de maniobras con cargas pesadas. Es clave en sectores como minería, energía y construcción...`
  },
  {
    id: 5,
    titulo: 'Servicio de Grúas Telescópicas en Lima',
    resumen: 'La solución perfecta para levantar estructuras pesadas en obra […]',
    fecha: '09/05/2023',
    imagen: blog5,
    categoria: 'Artículos',
    contenido: `En Lima, el servicio de grúas telescópicas es esencial para edificaciones de gran altura y estructuras metálicas. Ofrecemos equipos modernos con operadores calificados...`
  },
  {
    id: 6,
    titulo: 'Izaje de Cargas: Seguridad y Eficiencia',
    resumen: 'Una actividad común en grandes proyectos industriales […]',
    fecha: '02/05/2023',
    imagen: blog6,
    categoria: 'Novedades',
    contenido: `El izaje seguro depende del uso de eslingas, grilletes y una correcta planificación. Cumplir con las normas técnicas evita accidentes y mejora la productividad...`
  },
  {
    id: 7,
    titulo: 'Entrevista con Sánchez Grúas y Maniobras',
    resumen: 'Conoce más sobre la experiencia de la empresa en el rubro […]',
    fecha: '08/09/2022',
    imagen: blog7,
    categoria: 'Novedades',
    contenido: `Con más de 20 años en el rubro, Sánchez Grúas comparte su experiencia brindando soluciones de izaje en todo el Perú, con maquinaria especializada y personal experto...`
  },
  {
    id: 8,
    titulo: 'Ventajas del Alquiler de Grúas',
    resumen: 'Descubre por qué alquilar maquinaria puede ser más eficiente […]',
    fecha: '04/11/2022',
    imagen: blog8,
    categoria: 'Novedades',
    contenido: `El alquiler permite acceder a equipos modernos sin inversión inicial, adaptarse a cada proyecto y recibir soporte técnico. Ideal para empresas que optimizan costos...`
  }
];

function Blog() {
  const [filtro, setFiltro] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  const articulosFiltrados = articulos.filter((art) => {
    const coincideCategoria = filtro === 'Todos' || art.categoria === filtro;
    const coincideBusqueda = art.titulo.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="blog-container">
      {/* ✅ Hero corregido */}
      <div className="blog-hero" style={{ backgroundImage: `url(${portadaBlog})` }}>
        <div className="overlay">
          <div className="texto-hero-blog">
            <h1>NUESTRO BLOG</h1>
            <p>Te presentamos todos nuestros artículos de interés<br />y novedades de la empresa.</p>
          </div>
        </div>
      </div>

      <div className="contenido-principal">
        <div className="articulos-grid">
          {articulosFiltrados.map((art) => (
            <Link to={`/blog/${art.id}`} className="blog-card" key={art.id}>
              <div className="img-wrapper">
                <img src={art.imagen} alt={art.titulo} />
                <span className="etiqueta">{art.categoria}</span>
               
              </div>
              <div className="contenido">
                <h3>{art.titulo}</h3>
                <p>{art.resumen}</p>
                <div className="fecha">
                  <i className="fas fa-calendar-alt"></i> {art.fecha}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="filtro-lateral">
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <ul>
            <li onClick={() => setFiltro('Artículos')}>
              Artículos ({articulos.filter(a => a.categoria === 'Artículos').length})
            </li>
            <li onClick={() => setFiltro('Blog')}>
              Blog ({articulos.filter(a => a.categoria === 'Blog').length})
            </li>
            <li onClick={() => setFiltro('Novedades')}>
              Novedades ({articulos.filter(a => a.categoria === 'Novedades').length})
            </li>
            <li onClick={() => setFiltro('Todos')}>
              Ver Todos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blog;
