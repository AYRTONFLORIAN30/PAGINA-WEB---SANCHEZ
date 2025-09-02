import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetalle.css';
import data from '../assets/blogData';

const BlogDetalle = () => {
  const { id } = useParams();
  const blog = data.find(item => item.id === parseInt(id, 10));

  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('Todos');

  // Mide la altura REAL del <header> (top-bar + nav) y la guarda en --header-h
  useEffect(() => {
    const setHeaderHeight = () => {
      const headerEl = document.querySelector('header');
      const h = headerEl?.getBoundingClientRect().height || 0;
      document.documentElement.style.setProperty('--header-h', `${Math.ceil(h)}px`);
    };
    setHeaderHeight();
    // Por si cargan fuentes/íconos y cambia el alto
    window.addEventListener('load', setHeaderHeight);
    window.addEventListener('resize', setHeaderHeight);
    return () => {
      window.removeEventListener('load', setHeaderHeight);
      window.removeEventListener('resize', setHeaderHeight);
    };
  }, []);

  const conteo = useMemo(() => ({
    Artículos: data.filter(a => a.categoria === 'Artículos').length,
    Blog:      data.filter(a => a.categoria === 'Blog').length,
    Novedades: data.filter(a => a.categoria === 'Novedades').length,
    Todos:     data.length
  }), []);

  if (!blog) return <p>Artículo no encontrado.</p>;

  return (
    <div className="post">
      {/* HERO con imagen + overlay */}
      <header
        className="post-hero"
        style={{ backgroundImage: `url(${blog.imagen})` }}
        aria-label={blog.titulo}
      >
        <div className="post-hero__overlay">
          <span className="post-chip">{blog.categoria || 'Blog'}</span>
          <h1 className="post-title">{blog.titulo}</h1>
          <div className="post-meta">
            <span className="post-meta__item">📅 {blog.fecha}</span>
          </div>
        </div>
      </header>

      {/* Contenido + Sidebar */}
      <div className="post-layout">
        <article className="post-main">
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: blog.contenido }}
          />
        </article>

        <aside className="post-aside" aria-label="Barra lateral del blog">
          <div className="card">
            <input
              className="search"
              type="text"
              placeholder="Buscar artículos…"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="card">
            <h3 className="card-title">Categorías</h3>
            <ul className="cats">
              {['Artículos','Blog','Novedades','Todos'].map(cat => (
                <li
                  key={cat}
                  className={`cat ${filtro === cat ? 'active' : ''}`}
                  onClick={() => setFiltro(cat)}
                >
                  <span>{cat}</span>
                  <span className="badge">{conteo[cat]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3 className="card-title">Relacionados</h3>
            <ul className="related">
              {data
                .filter(a =>
                  (filtro === 'Todos' || a.categoria === filtro) &&
                  a.titulo.toLowerCase().includes(busqueda.toLowerCase()) &&
                  a.id !== blog.id
                )
                .slice(0, 6)
                .map(a => (
                  <li key={a.id}>
                    <Link className="related-link" to={`/blog/${a.id}`}>
                      {a.titulo}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetalle;
