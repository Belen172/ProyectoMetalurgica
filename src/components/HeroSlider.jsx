import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

export const Hero = () => {
  const videos = ['/Parte1.mp4', '/Parte2.mp4', '/Parte3.mp4'];
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnded = () => {
    setCurrentVideo((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <section className="hero-container py-5">
      {/* Video de fondo */}
      <video
        key={videos[currentVideo]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: 1,
          objectFit: 'cover',
          objectPosition: 'right center'
        }}
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      {/* Capa de oscurecimiento */}
      <div className="hero-overlay"></div>

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
              className="display-3 fw-bold text-white text-uppercase mb-3" 
              style={{ lineHeight: '1.05', letterSpacing: '-1px' }}
            >
              PRECISIÓN QUE <br />
              <span style={{ color: 'var(--rojo-principal)' }}>TOMA FORMA.</span>
            </h1>

            {/* Bajada */}
            <p 
              className="fs-5 text-light opacity-90 mb-4 fw-light" 
              style={{ maxWidth: '520px' }}
            >
              Tecnología, experiencia y procesos de alta precisión para transformar metal en soluciones.
            </p>

            {/* Botón */}
            <div>
              <a href="#productos" className="btn-hero-outline text-uppercase">
                Conocé lo que hacemos <FaArrowRight />
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