import React, { useState } from "react";
import ConfirmModal from "../components/ConfirmModal"; // 👈 importa tu modal
import "./Cotizacion.css";

function Cotizacion() {
  const [formData, setFormData] = useState({
    empresa: "",
    ruc: "",
    contacto: "",
    email: "",
    telefono: "",
    ubicacion: "",
    fecha: "",
    duracion: "",
    capacidad: "",
    mensaje: "",
    botfield: "", // honeypot anti-spam
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.empresa) newErrors.empresa = "Ingrese nombre de empresa";
    if (!formData.ruc) newErrors.ruc = "Ingrese RUC";
    if (!formData.contacto) newErrors.contacto = "Ingrese nombre de contacto";
    if (!formData.email) newErrors.email = "Ingrese correo electrónico";
    if (!formData.telefono) newErrors.telefono = "Ingrese número de teléfono";
    if (!formData.mensaje) newErrors.mensaje = "Ingrese un mensaje";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (formData.botfield) return; // honeypot

    try {
      setSending(true);
      setErrorMsg("");

      const res = await fetch("https://tgruasanchez.com/send_quote.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await res.text();
      const json = (() => {
        try { return JSON.parse(text); } catch { return { message: text }; }
      })();

      if (!res.ok || json.ok === false) {
        setErrorMsg(json.message || "Ocurrió un problema.");
      } else {
        setModalOpen(true);
        setTimeout(() => setModalOpen(false), 3000); // se cierra solo a los 3s
        // reset
        setFormData({
          empresa: "",
          ruc: "",
          contacto: "",
          email: "",
          telefono: "",
          ubicacion: "",
          fecha: "",
          duracion: "",
          capacidad: "",
          mensaje: "",
          botfield: "",
        });
      }
    } catch (err) {
      setErrorMsg("Error de red: " + err.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="cotizacion-formulario" id="formulario-cotizacion">
      <h1>
        <strong>COTIZA TU</strong> CAMIÓN GRÚA{" "}
        <span className="verde">AQUÍ</span>
      </h1>
      <p>
        Recibe una cotización registrando tus datos y requerimientos en el
        siguiente formulario.
      </p>
      <p>
        <strong className="verde">Por favor,</strong> Ingrese sus datos en el
        formulario
      </p>

      <form className="form-grid" onSubmit={handleSubmit} noValidate>
        {/* Honeypot oculto */}
        <input
          type="text"
          name="botfield"
          value={formData.botfield}
          onChange={handleChange}
          style={{ display: "none" }}
        />

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

        <div style={{ gridColumn: "1 / -1" }}>
          <textarea
            name="mensaje"
            placeholder="Mensaje *"
            value={formData.mensaje}
            onChange={handleChange}
          />
          {errors.mensaje && <span className="error">{errors.mensaje}</span>}
        </div>

        <button type="submit" disabled={sending}>
          {sending ? "Enviando…" : "Enviar Mensaje"}
        </button>
      </form>

      {/* Modal de confirmación */}
      <ConfirmModal
        open={modalOpen}
        title="¡Gracias!"
        message="Tu solicitud de cotización se ha enviado correctamente"
        onClose={() => setModalOpen(false)}
      />

      {/* Mensaje simple de error */}
      {errorMsg && (
        <div className="toast-error" role="alert">
          {errorMsg}
          <button onClick={() => setErrorMsg("")} aria-label="Cerrar">
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default Cotizacion;
