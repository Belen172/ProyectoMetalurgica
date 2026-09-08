import React from 'react';
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
        <source src="/Parte1.mp4" type="video/mp4" />
      </video>

      {/* Capa de oscurecimiento */}
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

      {/* Contenido */}
      <Container fluid className="px-4 px-md-5 hero-content my-5" style={{ zIndex: 3 }}>
        <Row>
          <Col xs={12} lg={9} xl={8} className="text-start">
            {/* Línea roja acento */}
            <div 
              style={{ 
                width: '55px', 
                height: '4px', 
                backgroundColor: 'var(--rojo-principal, #e63946)', 
                marginBottom: '18px',
                borderRadius: '2px'
              }}
            />

            {/* Título: 2 renglones en Desktop y fluido en Mobile */}
            <h1 
              className="text-white text-uppercase mb-3" 
              style={{ 
                fontWeight: '700', /* 👈 Más liviano, idéntico al original */
                fontSize: 'clamp(1.8rem, 4.2vw, 3.4rem)',
                letterSpacing: '1.5px', /* 👈 Espaciado tipográfico abierto */
                lineHeight: '1.18',
                maxWidth: '850px'
              }}
            >
              PRECISIÓN QUE <br />
              <span 
                style={{ 
                  color: 'var(--rojo-principal, #e63946)', 
                  fontWeight: '700' 
                }}
              >
                ASEGURA RESULTADOS.
              </span>
            </h1>

            {/* Bajada */}
            <p 
              className="text-light opacity-90 mb-4 fw-light" 
              style={{ 
                fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                maxWidth: '560px',
                lineHeight: '1.45'
              }}
            >
              Expertos en alemites, cuplas, servicio de mecanizado y accesorios para aire comprimido. 
            </p>

            {/* Botón */}
            <div>
              <a href="#productos" className="btn-hero-outline text-uppercase">
                Conocé nuestros productos <FaArrowRight className="ms-2" />
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