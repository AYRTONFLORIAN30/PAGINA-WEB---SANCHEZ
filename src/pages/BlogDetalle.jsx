// src/pages/BlogDetalle.jsx
import React from 'react';
import './BlogDetalle.css';
import { useParams } from 'react-router-dom';
import data from '../assets/blogData';

const BlogDetalle = () => {
  const { id } = useParams();
  const blog = data.find(item => item.id === parseInt(id));

  return (
    <div className="blog-detalle-container">
      <div className="blog-detalle-main">
        <h2 className="blog-categoria">Blog</h2>
        <h1>{blog.titulo}</h1>
        <p className="blog-fecha">{blog.fecha}</p>
        <img src={blog.imagen} alt={blog.titulo} className="blog-imagen" />
        <div className="blog-contenido" dangerouslySetInnerHTML={{ __html: blog.contenido }} />
      </div>

      <div className="blog-detalle-sidebar">
        <input type="text" placeholder="Buscar..." className="blog-buscador" />
        <div className="blog-categorias">
          <h3>Categorías</h3>
          <ul>
            <li>Artículos (9)</li>
            <li>Blog (10)</li>
            <li>Novedades (3)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetalle;
