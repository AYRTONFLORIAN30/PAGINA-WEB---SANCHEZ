import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Cotizacion from './views/Cotizacion';
import WhatsAppButton from './components/WhatsAppButton'; // Nuevo import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cotizar" element={<Cotizacion />} />
      </Routes>
      <WhatsAppButton /> {/* Botón flotante */}
    </Router>
  );
}

export default App;
