import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaCogs } from 'react-icons/fa';

export const EngineeringSection = () => {
  return (
    <section className="py-5 bg-white overflow-hidden">
      <Container fluid className="px-4 px-md-5 my-md-4">
        <Row className="align-items-center gy-5">
          <Col lg={5} className="text-start d-flex flex-column align-items-start">
            {/* Línea roja acento alineada a la izquierda */}
            <div 
              style={{ 
                width: '50px', 
                height: '4px', 
                backgroundColor: 'var(--rojo-principal)', 
                marginBottom: '20px' 
              }}
            ></div>

            {/* Título */}
            <h2 
              className="display-5 fw-bold text-uppercase mb-3" 
              style={{ color: 'var(--azul-ultramar)', lineHeight: '1.1' }}
            >
              INGENIERÍA <br />
              DETRÁS DE CADA PIEZA.
            </h2>

            {/* Parrafo */}
            <p className="text-secondary fs-6 mb-4" style={{ maxWidth: '480px' }}>
              Combinamos conocimiento, tecnología y control para ofrecer piezas que cumplen con los más altos requisitos de la industria.
            </p>

            {/* Botón */}
            <a 
              href="#nosotros" 
              className="btn text-white text-uppercase px-4 py-3 fw-bold d-inline-flex align-items-center gap-2"
              style={{ backgroundColor: 'var(--azul-ultramar)', borderRadius: '2px' }}
            >
              SOBRE NOSOTROS <FaArrowRight style={{ color: 'var(--rojo-principal)' }} />
            </a>
          </Col>

          {/* Columna de Imagen */}
          <Col lg={7} className="position-relative">
            <div className="diagonal-img-container shadow-lg">
              <img 
                src="/alemites.jpeg"
                alt="Ingeniería Mecanizada Soltermann" 
                className="w-100 d-block" 
                style={{ maxHeight: '480px', objectFit: 'cover' }}
              />
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};