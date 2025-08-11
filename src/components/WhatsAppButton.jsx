import React from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51991870790" // Reemplaza con tu número real
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/assets/whatsapp-icon.png" alt="WhatsApp" />
    </a>
  );
}

export default WhatsAppButton;
