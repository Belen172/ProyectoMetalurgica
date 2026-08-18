import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTruckMoving, FaStore, FaIndustry, FaSyncAlt, FaRecycle, FaCheckCircle } from 'react-icons/fa';

export const AboutSection = () => {
  const sectors = [
    'Agro',
    'Industria',
    'Maquinarias Viales',
    'Autopartes',
    'Agropartes',
    'Minería'
  ];

  const clients = [
    'Ferreterías',
    'Bulonerías',
    'Industria en general'
  ];

  return (
    <section id="nosotros" className="nosotros-section py-5">
      {/* Cambiamos Container estándar por Container fluid con el padding de la web */}
      <Container fluid className="px-4 px-md-5 py-4">
        
        {/* Encabezado alineado a la izquierda al ras de la grilla */}
        <div className="mb-5 text-start">
          <div 
            style={{ 
              width: '45px', 
              height: '4px', 
              backgroundColor: 'var(--rojo-principal)', 
              marginBottom: '16px' 
            }} 
          />
          
          <h2 
            className="display-5 fw-bold text-uppercase mb-2" 
            style={{ 
              color: 'var(--azul-ultramar)', 
              fontWeight: '800', 
              letterSpacing: '0.5px' 
            }}
          >
            Sobre Nosotros
          </h2>

          <p className="text-muted fs-6 mb-0" style={{ maxWidth: '700px' }}>
            Conocé nuestra trayectoria, capacidad productiva y compromiso con la industria nacional desde Rafaela.
          </p>
        </div>

        {/* Las 3 Tarjetas Principales */}
        <Row className="g-4 mb-5 align-items-stretch">
          
          {/* TARJETA 1: Alcance Nacional */}
          <Col md={4}>
            <div className="nosotros-card p-4 d-flex flex-column justify-content-between text-center text-md-start">
              <div>
                <div className="nosotros-icon-wrapper">
                  <FaTruckMoving />
                </div>
                <h4 className="fw-bold text-uppercase fs-5 mb-2" style={{ color: 'var(--azul-ultramar)' }}>
                  Alcance Nacional
                </h4>
                <p className="text-muted small mb-3">
                  Desde <strong className="text-dark">Rafaela, Santa Fe</strong>, distribuimos soluciones metalúrgicas con logística a todo el país.
                </p>
              </div>
              <div className="pt-3 border-top">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                  <span className="display-6 fw-black" style={{ color: 'var(--rojo-principal)', fontWeight: '900' }}>
                    +300
                  </span>
                  <span className="small fw-bold text-uppercase text-secondary lh-sm">
                    Clientes activos <br />en Argentina
                  </span>
                </div>
              </div>
            </div>
          </Col>

          {/* TARJETA 2: Canales de Distribución */}
          <Col md={4}>
            <div className="nosotros-card p-4 d-flex flex-column justify-content-between text-center text-md-start">
              <div>
                <div className="nosotros-icon-wrapper">
                  <FaStore />
                </div>
                <h4 className="fw-bold text-uppercase fs-5 mb-2" style={{ color: 'var(--azul-ultramar)' }}>
                  Clientes Comerciales
                </h4>
                <p className="text-muted small mb-3">
                  Abastecemos redes comerciales y cadenas industriales con respuesta rápida y stock permanente:
                </p>
                <ul className="list-unstyled mb-0">
                  {clients.map((c, idx) => (
                    <li key={idx} className="d-flex align-items-center mb-2 small text-dark fw-semibold">
                      <FaCheckCircle className="me-2 text-danger flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>

          {/* TARJETA 3: Sectores Industriales */}
          <Col md={4}>
            <div className="nosotros-card p-4 d-flex flex-column justify-content-between text-center text-md-start">
              <div>
                <div className="nosotros-icon-wrapper">
                  <FaIndustry />
                </div>
                <h4 className="fw-bold text-uppercase fs-5 mb-2" style={{ color: 'var(--azul-ultramar)' }}>
                  Sectores Productivos
                </h4>
                <p className="text-muted small mb-3">
                  Desarrollamos piezas y componentes específicos para industrias de alta exigencia:
                </p>
                <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                  {sectors.map((sec, idx) => (
                    <span key={idx} className="nosotros-badge-item">
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Col>

        </Row>

        {/* FRANJA INFERIOR: Sellos de Mejora Continua y Reciclado */}
        <Row className="g-4 justify-content-center">
          
          {/* Sello Mejora Continua */}
          <Col md={6} lg={5}>
            <div className="cert-seal-box p-4 h-100">
              <img 
                src="/mejora-continua.png" 
                alt="Mejora Continua" 
                style={{ 
                  height: '68px', 
                  width: '68px', 
                  objectFit: 'contain',
                  flexShrink: 0 
                }} 
              />
              <div>
                <h5 className="fw-bold text-uppercase mb-1 fs-6" style={{ color: 'var(--azul-ultramar)' }}>
                  Mejora Continua
                </h5>
                <p className="text-muted small mb-0 lh-sm">
                  Optimización constante en cada proceso productivo.
                </p>
              </div>
            </div>
          </Col>

          {/* Sello Compromiso Ambiental / Reciclado */}
          <Col md={6} lg={5}>
            <div className="cert-seal-box p-4 h-100">
              <img 
                src="/reciclado.png" 
                alt="Compromiso Ambiental" 
                style={{ 
                  height: '68px', 
                  width: '68px', 
                  objectFit: 'contain',
                  flexShrink: 0 
                }} 
              />
              <div>
                <h5 className="fw-bold text-uppercase mb-1 fs-6" style={{ color: 'var(--azul-ultramar)' }}>
                  Compromiso Ambiental
                </h5>
                <p className="text-muted small mb-0 lh-sm">
                  Reutilización y reciclado responsable de metales.
                </p>
              </div>
            </div>
          </Col>

        </Row>

      </Container>
    </section>
  );
};