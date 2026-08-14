import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  return (
    // Cambiamos py-4 py-md-5 por pt-4 pt-md-5 pb-2 pb-md-3 para reducir el espacio inferior
    <footer className="footer-diagonal text-white pt-4 pt-md-5 pb-2 pb-md-3">
      <Container fluid className="px-4 px-md-5">
        <Row className="gy-4 align-items-start">
          
          {/* PRIMERA COLUMNA: Logo, texto y redes sociales */}
          <Col md={4} className="footer-logo-col d-flex flex-column align-items-center text-center pe-md-4 align-self-center my-auto">
            <div className="mb-3">
              <img 
                src="/logo.png" 
                alt="Metalúrgica Soltermann" 
                style={{ maxHeight: '55px', width: 'auto' }} 
              />
            </div>

            <p 
              className="small fw-medium mb-3" 
              style={{ color: 'var(--azul-ultramar)', lineHeight: '1.4' }}
            >
              Especialistas en la fabricación de alemites, cuplas roscadas <br className="d-none d-sm-inline" />
              y piezas mecanizadas según plano desde 1960.
            </p>

            <div className="d-flex justify-content-center gap-3 fs-5">
              <a 
                href="https://www.instagram.com/metalurgica.soltermann/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--azul-ultramar)' }}
                className="opacity-85 hover-opacity-100"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.linkedin.com/company/metal%C3%BArgica-soltermann/home/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--azul-ultramar)' }}
                className="opacity-85 hover-opacity-100"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>

          {/* SEGUNDA COLUMNA: Contacto */}
          <Col md={4} className="d-flex flex-column align-items-center text-center">
            <h5 className="fw-bold text-uppercase mb-3 text-white">Contacto</h5>
            
            <ul className="list-unstyled small d-flex flex-column align-items-center gap-2 text-light opacity-90 p-0 m-0 text-center">
              <li className="d-flex align-items-center justify-content-center gap-2">
                <FaPhoneAlt style={{ color: 'var(--rojo-principal)' }} />
                <span>Fijo: (03492) 505594</span>
              </li>
              <li className="d-flex align-items-center justify-content-center gap-2">
                <FaWhatsapp className="text-success" />
                <span>Ventas: +54 9 3492 22-0724</span>
              </li>
              <li className="d-flex align-items-center justify-content-center gap-2">
                <FaWhatsapp className="text-success" />
                <span>Soporte: +54 9 3492 41-9267</span>
              </li>
              <li className="d-flex align-items-center justify-content-center gap-2 mt-1">
                <FaMapMarkerAlt style={{ color: 'var(--rojo-principal)' }} className="flex-shrink-0" />
                <span>Lisandro de la Torre 1960, Rafaela, Santa Fe, Argentina</span>
              </li>
            </ul>
          </Col>

          {/* TERCERA COLUMNA: Ubicación */}
          <Col md={4} className="d-flex flex-column align-items-center text-center">
            <h5 className="fw-bold text-uppercase mb-3 text-white">Ubicación</h5>
            
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm w-100" style={{ maxWidth: '360px' }}>
              <iframe 
                title="Ubicación Metalúrgica Soltermann"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4140.057723196279!2d-61.5011940237113!3d-31.2332023743468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caae442d342dd9%3A0x6f30516109614d6b!2sMetal%C3%BArgica%20Soltermann!5e1!3m2!1ses!2sar!4v1786406136619!5m2!1ses!2sar" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
              ></iframe>
            </div>
          </Col>

        </Row>

        {/* Reducimos el margen vertical de la línea divisora a my-3 */}
        <hr className="my-3 text-white opacity-25" />

        {/* Copyright */}
        <Row>
          <Col className="text-center small opacity-75 mb-1">
            © {new Date().getFullYear()} Metalúrgica Soltermann. Todos los derechos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};