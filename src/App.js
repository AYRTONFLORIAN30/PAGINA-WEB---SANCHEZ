import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Cotizacion from './views/Cotizacion';
import Nosotros from './views/Nosotros';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop'; // ✅ NUEVO
import GruaTelescopica from './views/servicios/GruaTelescopica';
import TransportePesado from './views/servicios/TransportePesado';
import Semitrailer from './views/servicios/Semitrailer';
import Accesorios from './views/servicios/Accesorios';
import Mantenimiento from './views/servicios/Mantenimiento';


function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Aplica scroll automático al top en cada cambio de ruta */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cotizar" element={<Cotizacion />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="/servicio/grua-telescopica" element={<GruaTelescopica />} />
          <Route path="/servicio/transporte-pesado" element={<TransportePesado />} />
          <Route path="/servicio/semitrailer" element={<Semitrailer />} />
          <Route path="/servicio/accesorios" element={<Accesorios />} />
          <Route path="/servicio/mantenimiento" element={<Mantenimiento />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
