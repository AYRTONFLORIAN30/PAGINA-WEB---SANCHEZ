// src/pages/LibroReclamaciones.jsx
import React, { useState } from "react";
import ConfirmModal from "../components/ConfirmModal"; // <- ajusta la ruta si es necesario
import "./LibroReclamaciones.css";

function LibroReclamaciones() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    documento: "",
    correo: "",
    telefono: "",
    menor_edad: "",
    tipo: "",
    monto: "",
    detalle_reclamo: "",
    detalle_articulo: "",
    numero_pedido: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("https://tgruasanchez.com/send_form.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await res.text();
      const json = (() => {
        try { return JSON.parse(text); } catch { return { message: text }; }
      })();

      if (!res.ok || json.ok === false) {
  setErrorMsg(json.message || `Error ${res.status}`);
} else {
  setModalOpen(true);
  setTimeout(() => setModalOpen(false), 3000); // 👈 aquí

  // Limpiar formulario tras éxito
  setFormData({
    nombre: "",
    apellidos: "",
    direccion: "",
    documento: "",
    correo: "",
    telefono: "",
    menor_edad: "",
    tipo: "",
    monto: "",
    detalle_reclamo: "",
    detalle_articulo: "",
    numero_pedido: "",
  });
}

    } catch (err) {
      setErrorMsg(err.message || "Fallo de red");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Libro de Reclamaciones</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="direccion"
            placeholder="Dirección del domicilio"
            value={formData.direccion}
            onChange={handleChange}
          />
          <input
            type="text"
            name="documento"
            placeholder="Número de documento de identidad"
            value={formData.documento}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="telefono"
            placeholder="Número de teléfono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <select
            name="menor_edad"
            value={formData.menor_edad}
            onChange={handleChange}
          >
            <option value="">¿Eres menor de edad?</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>

          <select name="tipo" value={formData.tipo} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="reclamo">Reclamo</option>
            <option value="queja">Queja</option>
          </select>
        </div>

        <input
          type="text"
          name="monto"
          placeholder="Monto del reclamo o queja"
          value={formData.monto}
          onChange={handleChange}
        />

        <textarea
          name="detalle_reclamo"
          placeholder="Detalle del reclamo o queja"
          value={formData.detalle_reclamo}
          onChange={handleChange}
        ></textarea>

        <textarea
          name="detalle_articulo"
          placeholder="Detalle de artículo"
          value={formData.detalle_articulo}
          onChange={handleChange}
        ></textarea>

        <input
          type="text"
          name="numero_pedido"
          placeholder="Número de pedido"
          value={formData.numero_pedido}
          onChange={handleChange}
        />

        <button type="submit" disabled={submitting}>
          {submitting ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {/* Modal de confirmación */}
      <ConfirmModal
        open={modalOpen}
        title="¡Gracias!"
        message="Tu mensaje se ha enviado correctamente"
        onClose={() => setModalOpen(false)}
      />

      {/* Mensaje simple de error (opcional) */}
      {errorMsg && (
        <div className="toast-error" role="alert">
          {errorMsg}
          <button onClick={() => setErrorMsg("")} aria-label="Cerrar">×</button>
        </div>
      )}

      <div className="info">
        <p>
          <strong>RECLAMO:</strong> Disconformidad relacionada a los productos o
          servicios.
        </p>
        <p>
          <strong>QUEJA:</strong> Disconformidad no relacionada a los productos
          o servicios o malestar respecto a la atención al público.
        </p>
        <p>
          El proveedor deberá dar respuesta en un plazo no mayor de 30 días
          calendario, pudiendo ampliarse hasta 30 días más con comunicación al
          consumidor.
        </p>
      </div>
    </div>
  );
}

export default LibroReclamaciones;
