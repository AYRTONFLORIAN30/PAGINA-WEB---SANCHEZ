
import React, { useState } from 'react';
import './Cotizacion.css';

function Cotizacion() {
  const [formData, setFormData] = useState({
    empresa: '',
    ruc: '',
    contacto: '',
    email: '',
    telefono: '',
    ubicacion: '',
    fecha: '',
    duracion: '',
    capacidad: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.empresa) newErrors.empresa = 'Ingrese nombre de empresa';
    if (!formData.ruc) newErrors.ruc = 'Ingrese RUC';
    if (!formData.contacto) newErrors.contacto = 'Ingrese nombre de contacto';
    if (!formData.email) newErrors.email = 'Ingrese correo electrónico';
    if (!formData.telefono) newErrors.telefono = 'Ingrese número de teléfono';
    if (!formData.mensaje) newErrors.mensaje = 'Ingrese un mensaje';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // aquí enviar formulario
      console.log('Formulario válido', formData);
    }
  };

  return (
    <div className="cotizacion-formulario">
      <h1><strong>COTIZA TU</strong> CAMIÓN GRÚA <span className="verde">AQUÍ</span></h1>
      <p>Recibe una cotización registrando tus datos y requerimientos en el siguiente formulario.</p>
      <p><strong className="verde">Por favor,</strong> Ingrese sus datos en el formulario</p>

      <form className="form-grid" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="empresa"
            placeholder="Empresa *"
            value={formData.empresa}
            onChange={handleChange}
          />
          {errors.empresa && <span className="error">{errors.empresa}</span>}
        </div>

        <div>
          <input
            type="text"
            name="ruc"
            placeholder="RUC *"
            value={formData.ruc}
            onChange={handleChange}
          />
          {errors.ruc && <span className="error">{errors.ruc}</span>}
        </div>

        <div>
          <input
            type="text"
            name="contacto"
            placeholder="Nombre Contacto *"
            value={formData.contacto}
            onChange={handleChange}
          />
          {errors.contacto && <span className="error">{errors.contacto}</span>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono *"
            value={formData.telefono}
            onChange={handleChange}
          />
          {errors.telefono && <span className="error">{errors.telefono}</span>}
        </div>

        <input
          type="text"
          name="ubicacion"
          placeholder="Ubicación Proyecto"
          value={formData.ubicacion}
          onChange={handleChange}
        />

        <input
          type="date"
          name="fecha"
          placeholder="Fecha Inicio"
          value={formData.fecha}
          onChange={handleChange}
        />

        <input
          type="text"
          name="duracion"
          placeholder="Duración de Proyecto en días"
          value={formData.duracion}
          onChange={handleChange}
        />

        <input
          type="text"
          name="capacidad"
          placeholder="Capacidad de Carga"
          value={formData.capacidad}
          onChange={handleChange}
        />

        <div style={{ gridColumn: '1 / -1' }}>
          <textarea
            name="mensaje"
            placeholder="Mensaje *"
            value={formData.mensaje}
            onChange={handleChange}
          />
          {errors.mensaje && <span className="error">{errors.mensaje}</span>}
        </div>

        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default Cotizacion;
