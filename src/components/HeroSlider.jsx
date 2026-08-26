import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

export const Hero = () => {
  // const videos = ['/Parte1.mp4'];
  // const [currentVideo, setCurrentVideo] = useState(0);

  // const handleVideoEnded = () => {
  //  setCurrentVideo((prevIndex) => (prevIndex + 1) % videos.length);
  // };

  return (
    <section className="hero-container position-relative overflow-hidden py-5 d-flex align-items-center" style={{ minHeight: '85vh' }}>
      
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          objectFit: 'cover',
          objectPosition: 'right center',
          transform: 'scale(1.03)',
          transformOrigin: 'center center'
        }}
      >
        <source src="/parte1.mp4" type="video/mp4" />
      </video>

      {/* Capa de oscurecimiento sobre el video para legibilidad */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          zIndex: 2
        }}
      />

      {/* Contenido alineado a la izquierda */}
      <Container fluid className="px-4 px-md-5 hero-content my-5">
        <Row>
          <Col lg={7} xl={6} className="text-start">
            {/* Línea roja acento */}
            <div 
              style={{ 
                width: '60px', 
                height: '4px', 
                backgroundColor: 'var(--rojo-principal)', 
                marginBottom: '20px' 
              }}
            ></div>

            {/* Título Principal */}
            <h1 
              className="text-white text-uppercase mb-3" 
              style={{ 
                fontWeight: '700',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                letterSpacing: '1px',
                lineHeight: '1.15',
                maxWidth: '700px'
              }}
            >
              PRECISIÓN QUE <br />
              <span 
                className="d-inline-block text-nowrap" 
                style={{ color: 'var(--rojo-principal)', fontWeight: '700' }}
              >
                ASEGURA RESULTADOS.
              </span>
            </h1>

            {/* Bajada */}
            <p 
              className="fs-5 text-light opacity-90 mb-4 fw-light" 
              style={{ maxWidth: '520px' }}
            >
              Expertos en alemites, cuplas, servicio de mecanizado y accesorios para aire comprimido. 
            </p>

            {/* Botón */}
            <div>
              <a href="#productos" className="btn-hero-outline text-uppercase">
                Conocé nuestros productos <FaArrowRight />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Indicador de scroll */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '20px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 3, 
          color: 'rgba(255,255,255,0.5)',
          fontSize: '20px' 
        }}
      >
        <FaChevronDown className="bounce" />
      </div>
    </section>
  );
};