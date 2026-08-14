import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

export const FloatingWhatsapp = () => {
  const [open, setOpen] = useState(false);

  const numVentas = "5493492220724"; 
  const numSoporte = "5493492419267"; 

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 1000 }}>
      {open && (
        <div className="card shadow-lg border-0 mb-3" style={{ width: '260px', borderRadius: '12px' }}>
          <div className="card-header bg-success text-white fw-bold d-flex justify-content-between align-items-center">
            <span>Contactar por WhatsApp</span>
            <FaTimes style={{ cursor: 'pointer' }} onClick={() => setOpen(false)} />
          </div>
          <div className="card-body p-2">
            <a
              href={`https://wa.me/${numVentas}?text=Hola,%20quisiera%20consultar%20por%20ventas`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success w-100 text-start mb-2 d-flex align-items-center"
            >
              <FaWhatsapp className="me-2 fs-5" />
              <div>
                <strong>Ventas</strong>
                <div style={{ fontSize: '11px' }} className="text-muted">Presupuestos y catálogo</div>
              </div>
            </a>
            <a
              href={`https://wa.me/${numSoporte}?text=Hola,%20necesito%20asesoramiento%20técnico`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success w-100 text-start d-flex align-items-center"
            >
              <FaWhatsapp className="me-2 fs-5" />
              <div>
                <strong>Soporte Técnico</strong>
                <div style={{ fontSize: '11px' }} className="text-muted">Asistencia y consultas</div>
              </div>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="btn btn-success rounded-circle shadow-lg d-flex align-items-center justify-content-center"
        style={{ width: '60px', height: '60px', fontSize: '30px' }}
      >
        <FaWhatsapp />
      </button>
    </div>
  );
};