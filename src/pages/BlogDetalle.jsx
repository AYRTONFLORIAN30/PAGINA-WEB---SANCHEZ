// src/pages/BlogDetalle.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetalle.css';
import data from '../assets/blogData';

const BlogDetalle = () => {
  const { id } = useParams();
  const blog = data.find(item => item.id === parseInt(id));

  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('Todos');

  // Si el blog no existe
  if (!blog) {
    return <p>Artículo no encontrado.</p>;
  }

  return (
    <div className="blog-detalle-container">
      {/* Contenido principal */}
      <div className="blog-detalle-main">
        <h2 className="blog-categoria">Blog</h2>
        <h1>{blog.titulo}</h1>
        <p className="blog-fecha">{blog.fecha}</p>
        <img src={blog.imagen} alt={blog.titulo} className="blog-imagen" />
        <div
          className="blog-contenido"
          dangerouslySetInnerHTML={{ __html: blog.contenido }}
        />
      </div>

      {/* Menú lateral */}
      <div className="filtro-lateral">
        <input
          type="text"
          placeholder="Buscar artículos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <ul>
          <li onClick={() => setFiltro('Artículos')}>
            Artículos (
              {
                data.filter(
                  a =>
                    a.categoria === 'Artículos' &&
                    a.titulo.toLowerCase().includes(busqueda.toLowerCase())
                ).length
              }
            )
          </li>
          <li onClick={() => setFiltro('Blog')}>
            Blog (
              {
                data.filter(
                  a =>
                    a.categoria === 'Blog' &&
                    a.titulo.toLowerCase().includes(busqueda.toLowerCase())
                ).length
              }
            )
          </li>
          <li onClick={() => setFiltro('Novedades')}>
            Novedades (
              {
                data.filter(
                  a =>
                    a.categoria === 'Novedades' &&
                    a.titulo.toLowerCase().includes(busqueda.toLowerCase())
                ).length
              }
            )
          </li>
          <li onClick={() => setFiltro('Todos')}>
            Ver Todos ({data.filter(a => a.titulo.toLowerCase().includes(busqueda.toLowerCase())).length})
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogDetalle;
