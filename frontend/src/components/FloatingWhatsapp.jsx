import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

export const FloatingWhatsapp = () => {
  const [open, setOpen] = useState(false);

  const numVentas = "5493492220724"; 
  const numSoporte = "5493492419267"; 

  const whatsappColor = "#25D366";

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 1000 }}>
      {open && (
        <div className="card shadow-lg border-0 mb-3" style={{ width: '260px', borderRadius: '12px', overflow: 'hidden' }}>
          
          {/* Header con el verde oficial de WhatsApp */}
          <div 
            className="text-white fw-bold d-flex justify-content-between align-items-center px-3 py-2"
            style={{ backgroundColor: whatsappColor }}
          >
            <span style={{ fontSize: '0.95rem' }}>Contactar por WhatsApp</span>
            <FaTimes style={{ cursor: 'pointer' }} onClick={() => setOpen(false)} />
          </div>

          <div className="card-body p-2">
            {/* Opción Ventas */}
            <a
              href={`https://wa.me/${numVentas}?text=Hola,%20quisiera%20consultar%20por%20ventas`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-custom w-100 text-start mb-2 d-flex align-items-center p-2 rounded"
            >
              <FaWhatsapp className="me-2 fs-5 flex-shrink-0 whatsapp-icon" />
              <div>
                <strong className="d-block" style={{ fontSize: '0.9rem' }}>Ventas</strong>
                <div style={{ fontSize: '11px' }} className="whatsapp-subtext">Presupuestos y catálogo</div>
              </div>
            </a>

            {/* Opción Soporte Técnico */}
            <a
              href={`https://wa.me/${numSoporte}?text=Hola,%20necesito%20asesoramiento%20técnico`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-custom w-100 text-start d-flex align-items-center p-2 rounded"
            >
              <FaWhatsapp className="me-2 fs-5 flex-shrink-0 whatsapp-icon" />
              <div>
                <strong className="d-block" style={{ fontSize: '0.9rem' }}>Soporte Técnico</strong>
                <div style={{ fontSize: '11px' }} className="whatsapp-subtext">Asistencia y consultas</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Botón flotante circular principal */}
      <button
        onClick={() => setOpen(!open)}
        className="btn text-white rounded-circle shadow-lg d-flex align-items-center justify-content-center border-0"
        style={{ 
          width: '60px', 
          height: '60px', 
          fontSize: '32px',
          backgroundColor: whatsappColor,
          transition: 'transform 0.2s ease'
        }}
      >
        <FaWhatsapp />
      </button>
    </div>
  );
};