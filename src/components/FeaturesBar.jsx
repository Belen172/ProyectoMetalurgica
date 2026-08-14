import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAward, FaCrosshairs, FaMicrochip, FaShieldAlt } from 'react-icons/fa';

export const FeaturesBar = () => {
  return (
    <section className="features-bar py-4">
      <Container fluid className="px-4 px-md-5">
        <Row className="gy-4 align-items-center text-center text-md-start">
          <Col sm={6} lg={3} className="feature-item px-3">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
              <FaAward className="fs-1" style={{ color: 'var(--rojo-principal)' }} />
              <div>
                <h5 className="fw-bold mb-0 text-white text-uppercase fs-6">
                  <span style={{ color: 'var(--rojo-principal)' }}>+60</span> AÑOS DE EXPERIENCIA
                </h5>
                <small className="text-light opacity-75">Trayectoria que se refleja en cada pieza.</small>
              </div>
            </div>
          </Col>

          <Col sm={6} lg={3} className="feature-item px-3">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
              <FaCrosshairs className="fs-1" style={{ color: 'var(--rojo-principal)' }} />
              <div>
                <h5 className="fw-bold mb-0 text-white text-uppercase fs-6">
                  ALTA <span style={{ color: 'var(--rojo-principal)' }}>PRECISIÓN</span>
                </h5>
                <small className="text-light opacity-75">Procesos controlados que garantizan calidad.</small>
              </div>
            </div>
          </Col>

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

          <Col sm={6} lg={3} className="feature-item px-3">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
              <FaShieldAlt className="fs-1" style={{ color: 'var(--rojo-principal)' }} />
              <div>
                <h5 className="fw-bold mb-0 text-white text-uppercase fs-6">
                  CALIDAD <span style={{ color: 'var(--rojo-principal)' }}>EN CADA PIEZA</span>
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