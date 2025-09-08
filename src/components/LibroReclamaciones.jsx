import React, { useRef, useState } from "react";
import ConfirmModal from "../components/ConfirmModal";
import "./LibroReclamaciones.css";

function LibroReclamaciones() {
  const [formData, setFormData] = useState({
    // UI
    nombres_apellidos: "",
    docTipo: "RUC",
    docNumero: "",
    telefono: "",
    email: "",
    departamento: "",
    provincia: "",
    distrito: "",
    direccion: "",
    fue: "",
    monto: "",
    descripcionProducto: "",
    numero_pedido: "",
    tipo: "",
    fecha: "",                 // <-- solo fecha
    detalle_reclamo: "",

    // compat backend (se completan al enviar)
    nombre: "",
    apellidos: "",
    documento: "",
    correo: "",
    menor_edad: "",
    detalle_articulo: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // ref + abridor garantizado por gesto del usuario
  const dateRef = useRef(null);
  const openNativeDate = (e) => {
    // usar el gesto del click del botón/icono
    e.preventDefault();
    const el = dateRef.current;
    if (!el) return;
    try {
      if (typeof el.showPicker === "function") {
        el.showPicker();  // abre el calendario nativo (Chromium)
      } else {
        el.focus();       // fallback Safari/Firefox
      }
    } catch {
      el.focus();
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "radio" ? e.target.value : value }));
  };

  const todayISO = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    // separar nombre / apellidos desde un solo campo
    const full = (formData.nombres_apellidos || "").trim().replace(/\s+/g, " ");
    const [first = "", ...rest] = full.split(" ");
    const nombreMapped = first || full || "-";
    const apellidosMapped = rest.join(" ") || "-";

    const payload = {
      ...formData,
      nombre: nombreMapped,
      apellidos: apellidosMapped,
      documento: `${formData.docTipo}: ${formData.docNumero}`,
      correo: formData.email,
      detalle_articulo: formData.descripcionProducto,
      // el backend espera este nombre
      fecha_ocurrencia: formData.fecha, // YYYY-MM-DD
    };

    try {
      const res = await fetch("https://tgruasanchez.com/send_form.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      const json = (() => { try { return JSON.parse(text); } catch { return { message: text }; } })();

      if (!res.ok || json.ok === false) {
        setErrorMsg(json.message || `Error ${res.status}`);
      } else {
        setModalOpen(true);
        setTimeout(() => setModalOpen(false), 3000);

        setFormData({
          nombres_apellidos: "",
          docTipo: "RUC",
          docNumero: "",
          telefono: "",
          email: "",
          departamento: "",
          provincia: "",
          distrito: "",
          direccion: "",
          fue: "",
          monto: "",
          descripcionProducto: "",
          numero_pedido: "",
          tipo: "",
          fecha: "",
          detalle_reclamo: "",
          nombre: "",
          apellidos: "",
          documento: "",
          correo: "",
          menor_edad: "",
          detalle_articulo: "",
        });
      }
    } catch (err) {
      setErrorMsg(err.message || "Fallo de red");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="lr-wrapper">
      <h1 className="lr-title">Libro de reclamaciones</h1>

      <form className="lr-form" onSubmit={handleSubmit}>
        <h3 className="lr-section-title">Identificación del Consumidor</h3>

        <div className="lr-grid-2">
          <div className="lr-field">
            <label>Nombres y Apellidos</label>
            <input
              name="nombres_apellidos"
              placeholder="Ingrese sus datos"
              value={formData.nombres_apellidos}
              onChange={handleChange}
              required
            />
          </div>
          <div className="lr-field">
            <label>Documento de Identidad</label>
            <div className="lr-inline">
              <select name="docTipo" value={formData.docTipo} onChange={handleChange}>
                <option value="DNI">DNI</option>
                <option value="CE">CE</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="RUC">RUC</option>
              </select>
              <input
                name="docNumero"
                placeholder="Ingrese su nro. de identidad"
                value={formData.docNumero}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="lr-grid-2">
          <div className="lr-field">
            <label>Teléfono / Celular</label>
            <input name="telefono" placeholder="Ingrese su número" value={formData.telefono} onChange={handleChange}/>
          </div>
          <div className="lr-field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
          </div>
        </div>

        <div className="lr-grid-3">
          <div className="lr-field">
            <label>Departamento</label>
            <input name="departamento" placeholder="Departamento" value={formData.departamento} onChange={handleChange}/>
          </div>
          <div className="lr-field">
            <label>Provincia</label>
            <input name="provincia" placeholder="Provincia" value={formData.provincia} onChange={handleChange}/>
          </div>
          <div className="lr-field">
            <label>Distrito</label>
            <input name="distrito" placeholder="Distrito" value={formData.distrito} onChange={handleChange}/>
          </div>
        </div>

        <div className="lr-grid-1">
          <div className="lr-field">
            <label>Dirección</label>
            <input name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange}/>
          </div>
        </div>

        <h3 className="lr-section-title">Identificación del bien contratado</h3>

        <div className="lr-grid-1">
          <div className="lr-field">
            <label>¿Fue un Producto o Servicio?</label>
            <div className="lr-radio-group">
              <label className="lr-radio">
                <input type="radio" name="fue" value="producto" checked={formData.fue === "producto"} onChange={handleChange}/>
                <span>Producto</span>
              </label>
              <label className="lr-radio">
                <input type="radio" name="fue" value="servicio" checked={formData.fue === "servicio"} onChange={handleChange}/>
                <span>Servicio</span>
              </label>
            </div>
          </div>
        </div>

        <div className="lr-grid-3">
          <div className="lr-field">
            <label>Monto Reclamado</label>
            <input name="monto" placeholder="S/." value={formData.monto} onChange={handleChange}/>
          </div>
          <div className="lr-field">
            <label>Descripción de producto</label>
            <input name="descripcionProducto" placeholder="Ingrese el nombre del Producto y Código" value={formData.descripcionProducto} onChange={handleChange}/>
          </div>
          <div className="lr-field">
            <label>Nro de pedido</label>
            <input name="numero_pedido" placeholder="#12345" value={formData.numero_pedido} onChange={handleChange}/>
          </div>
        </div>

        <h3 className="lr-section-title">Detalle del reclamo del pedido del consumidor</h3>

        <div className="lr-grid-1">
          <div className="lr-field">
            <label>¿Es un Reclamo o Queja?</label>
            <div className="lr-radio-group">
              <label className="lr-radio">
                <input type="radio" name="tipo" value="reclamo" checked={formData.tipo === "reclamo"} onChange={handleChange}/>
                <span>Reclamo</span>
              </label>
              <label className="lr-radio">
                <input type="radio" name="tipo" value="queja" checked={formData.tipo === "queja"} onChange={handleChange}/>
                <span>Queja</span>
              </label>
            </div>
          </div>
        </div>

        {/* Fecha con calendario nativo + botón que fuerza apertura */}
        <div className="lr-grid-2">
          <div className="lr-field">
            <label>Fecha de ocurrencia</label>
            <div className="lr-picker">
              <input
                ref={dateRef}
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                max={todayISO}
                placeholder="dd/mm/aaaa"
                onFocus={(e) => { /* abrir en algunos navegadores al focusear */ }}
              />
              <button
                type="button"
                className="lr-picker-btn"
                aria-label="Abrir calendario"
                onMouseDown={openNativeDate}   // mousedown = gesto 100% válido
              >
                📅
              </button>
            </div>
          </div>

          <div className="lr-field">
            <label>Detalle de reclamo o queja</label>
            <input
              name="detalle_reclamo"
              placeholder="Ingrese los detalles"
              value={formData.detalle_reclamo}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="lr-submit" disabled={submitting}>
          {submitting ? "Enviando..." : "Enviar"}
        </button>
      </form>

      <ConfirmModal
        open={modalOpen}
        title="¡Gracias!"
        message="Tu mensaje se ha enviado correctamente"
        onClose={() => setModalOpen(false)}
      />

      {errorMsg && (
        <div className="toast-error" role="alert">
          {errorMsg}
          <button onClick={() => setErrorMsg("")} aria-label="Cerrar">×</button>
        </div>
      )}
    </div>
  );
}

export default LibroReclamaciones;
