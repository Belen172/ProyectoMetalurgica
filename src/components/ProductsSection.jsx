import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const productFamilies = [
  {
    id: 'alemites-pulgadas',
    title: 'Alemites Rosca en Pulgadas',
    color: '#2A2A58',
    link: '/productos/alemites-pulgadas'
  },
  {
    id: 'alemites-metrica',
    title: 'Alemites Rosca Métrica',
    color: '#37418E',
    link: '/productos/alemites-metrica'
  },
  {
    id: 'especiales',
    title: 'Especiales',
    color: '#9D2E35',
    link: '/productos/especiales'
  },
  {
    id: 'cuplas',
    title: 'Cuplas Roscadas',
    color: '#EE353D',
    link: '/productos/cuplas'
  },
  {
    id: 'aire-comprimido',
    title: 'Aire Comprimido',
    color: '#009ADC',
    link: '/productos/aire-comprimido'
  },
  {
    id: 'mecanizado-plano',
    title: 'Servicio de Mecanizado',
    color: '#F68B34',
    link: '/productos/mecanizado-plano'
  },
];

export const ProductsSection = () => {
  return (
    <section id="productos" className="py-5 bg-white">
      <Container fluid className="px-4 px-md-5 py-4">
        
        {/* Encabezado */}
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
            Productos
          </h2>
          
          {/*  <p className="text-muted lead mb-0" style={{ fontSize: '1.05rem', maxWidth: '560px' }}>
            Desarrollamos piezas y componentes de alta calidad, adaptados a las necesidades de cada industria.
          </p> */}
          
        </div>

        {/* Grilla de las 6 familias */}
        <Row className="g-3 g-xl-4 row-cols-2 row-cols-md-3 row-cols-lg-6">
          {productFamilies.map((family) => (
            <Col key={family.id} className="d-flex">
              <Link
                to={family.link}
                className="product-family-card"
                style={{ backgroundColor: family.color }}
              >
                <div className="product-family-title text-start">
                  {family.title}
                </div>
                <div className="product-family-line" />
              </Link>
            </Col>
          ))}
        </Row>

        {/* Botón Catálogo Completo */}
        <div className="mt-4 pt-2 text-start">
          <a
            href="/catalogo-completo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-catalogo-compacto"
          >
            <FaFilePdf size={16} style={{ color: 'var(--rojo-principal)' }} />
            <span>Descargar Catálogo Completo</span>
            <FaExternalLinkAlt size={11} className="ms-1 opacity-75" />
          </a>
        </div>

      </Container>
    </section>
  );
};