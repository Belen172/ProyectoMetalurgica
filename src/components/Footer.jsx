import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer-soltermann-wrapper pt-4 pt-lg-0">
      <Container fluid className="p-0">
        <Row className="g-0 align-items-center">
          
          {/* PRIMERA COLUMNA: Logo, texto en 2 renglones y redes (Fondo blanco) */}
          <Col lg={4} className="p-4 p-xl-4 d-flex flex-column align-items-center justify-content-center text-center">
            <div className="mb-3">
              <img 
                src="/logo.png" 
                alt="Metalúrgica Soltermann" 
                style={{ maxHeight: '52px', width: 'auto' }} 
              />
            </div>

            {/* Texto forzado exactamente a 2 renglones */}
            <p className="fw-medium mb-3 text-secondary text-center" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
              <span className="d-block text-nowrap">Expertos en alemites, cuplas, servicio de mecanizado</span>
              <span className="d-block text-nowrap">y accesorios para aire comprimido.</span>
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

          {/* SEGUNDA Y TERCERA COLUMNA: Bloque azul con Contacto, Ubicación y Copyright */}
          <Col lg={8}>
            <div className="footer-soltermann-blue text-white">
              <Row className="gy-4 align-items-start justify-content-center">
                
                {/* CONTACTO CENTRADO */}
                {/* CONTACTO CENTRADO (Con mejor separación vertical y más abajo) */}
                <Col md={6} className="d-flex flex-column align-items-center text-center">
                  <h5 className="fw-bold text-uppercase mb-2 text-white">Contacto</h5>
                  
                  <ul className="list-unstyled small d-flex flex-column align-items-center gap-3 text-light opacity-90 p-0 m-0 text-center mt-2 mt-md-3">
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
                      <span>Soporte Técnico: +54 9 3492 41-9267</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-center gap-2 mt-1 text-nowrap">
                      <FaMapMarkerAlt style={{ color: 'var(--rojo-principal)' }} className="flex-shrink-0" />
                      <span>Lisandro de la Torre 1960, Rafaela, Santa Fe, Argentina</span>
                    </li>
                  </ul>
                </Col>

                {/* UBICACIÓN Y MAPA CENTRADOS */}
                <Col md={6} className="d-flex flex-column align-items-center text-center">
                  <h5 className="fw-bold text-uppercase mb-3 text-white">Ubicación</h5>
                  
                  <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm w-100" style={{ maxWidth: '340px' }}>
                    <iframe 
                      title="Ubicación Metalúrgica Soltermann"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4140.057723196279!2d-61.5011940237113!3d-31.2332023743468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caae442d342dd9%3A0x6f30516109614d6b!2sMetal%C3%BArgica%20Soltermann!5e1!3m2!1ses!2sar!4v1786406136619!5m2!1ses!2sar" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                    />
                  </div>
                </Col>

              </Row>

              {/* COPYRIGHT INTEGRADO */}
              <hr className="my-3 text-white opacity-25" />
              <Row>
                <Col 
                  className="footer-copyright small opacity-75 mb-1 px-3" 
                >
                  © 2026 Metalúrgica Soltermann. Todos los derechos reservados.
                </Col>
              </Row>

            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};