import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCrosshairs, FaMicrochip, FaShieldAlt } from 'react-icons/fa';

export const FeaturesBar = () => {
  return (
    <section className="features-bar py-4">
      <Container fluid className="px-4 px-md-5">
        <Row className="gy-4 align-items-center text-center text-md-start">
          
          {/* COLUMNA 1: Isotipo Soltermann */}
          <Col sm={6} lg={3} className="feature-item px-3">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
            <img 
              src="/isotipo_met.png" 
              alt="Isotipo Metalúrgica Soltermann" 
              style={{ 
                height: '38px', 
                width: 'auto', 
                objectFit: 'contain',
                filter: 'brightness(0) saturate(100%) invert(26%) sepia(85%) saturate(3040%) hue-rotate(345deg) brightness(92%) contrast(92%)'
              }} 
            />
              <div>
                <h5 className="fw-bold mb-0 text-white text-uppercase fs-6">
                  AÑOS DE <span style={{ color: 'var(--rojo-principal)' }}>EXPERIENCIA</span> 
                </h5>
                <small className="text-light opacity-75">Trayectoria que se refleja en cada pieza.</small>
              </div>
            </div>
          </Col>

          {/* COLUMNA 2 */}
          <Col sm={6} lg={3} className="feature-item px-3">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
              <FaCrosshairs className="fs-1" style={{ color: 'var(--rojo-principal)' }} />
              <div>
                <h5 className="fw-bold mb-0 text-white text-uppercase fs-6">
                  ALTA <span style={{ color: 'var(--rojo-principal)' }}>PRECISIÓN</span>
                </h5>
                <small className="text-light opacity-75">Servicios técnicamente sólidos y responsables.</small>
              </div>
            </div>
          </Col>

          {/* COLUMNA 3 */}
          <Col sm={6} lg={3} className="feature-item px-3">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
              <FaMicrochip className="fs-1" style={{ color: 'var(--rojo-principal)' }} />
              <div>
                <h5 className="fw-bold mb-0 text-white text-uppercase fs-6">
                  TECNOLOGÍA <span style={{ color: 'var(--rojo-principal)' }}>CNC</span>
                </h5>
                <small className="text-light opacity-75">Equipamiento de última generación para producción.</small>
              </div>
            </div>
          </Col>

          {/* COLUMNA 4 */}
          <Col sm={6} lg={3} className="feature-item px-3">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
              <FaShieldAlt className="fs-1" style={{ color: 'var(--rojo-principal)' }} />
              <div>
                <h5 className="fw-bold mb-0 text-white text-uppercase fs-6">
                  CALIDAD EN CADA<span style={{ color: 'var(--rojo-principal)' }}> PIEZA</span>
                </h5>
                <small className="text-light opacity-75">Compromiso con los más altos estándares.</small>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};