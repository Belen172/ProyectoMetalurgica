import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

// Subtabla reutilizable para renderizar cualquier lista de items
const SingleTable = ({ items, hasCompatibility, isSecondary = false }) => (
  <div className="table-responsive bg-white rounded shadow-sm">
    <Table hover className="align-middle mb-0 custom-product-table">
      <thead className={`table-light text-secondary text-uppercase small ${isSecondary ? 'table-header-secondary' : ''}`}>
        <tr>
          <th style={{ width: '15%' }} className="text-center">Producto</th>
          <th style={{ width: '20%' }} className="text-start">Código</th>
          <th style={{ width: hasCompatibility ? '30%' : '65%' }} className="text-start">Descripción</th>
          {hasCompatibility && <th style={{ width: '35%' }} className="text-start">Compatibilidad</th>}
        </tr>
      </thead>
      <tbody>
        {items.map((prod, index) => (
          <tr key={`${prod.codigo}-${index}`}>
            <td className="text-center py-2 position-relative product-cell-zoom">
              <div className="product-preview-container">
                <img 
                  src={prod.foto || '/placeholder.png'} 
                  alt={prod.codigo} 
                  className="product-thumb-img"
                  style={{ maxHeight: '42px', maxWidth: '60px', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = 'https://placehold.co/100x55?text=Pieza'; }}
                />
                <div className="product-preview-popover shadow">
                  <img 
                    src={prod.foto || '/placeholder.png'} 
                    alt={`Detalle ${prod.codigo}`} 
                    onError={(e) => { e.target.src = 'https://placehold.co/150x150?text=Pieza'; }}
                  />
                </div>
              </div>
            </td>
            <td className="fw-bold text-dark py-2 text-start">{prod.codigo}</td>
            <td className="text-secondary small py-2 text-start">{prod.descripcion}</td>
            {hasCompatibility && (
              <td className="text-muted small py-2 text-start">{prod.compatibilidad || '-'}</td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export const DoubleProductTable = ({ title, products = [], headerColor, hasCompatibility = false }) => {
  // División para vista en computadoras de escritorio (>= 992px)
  const half = Math.ceil(products.length / 2);
  const leftColumnProducts = products.slice(0, half);
  const rightColumnProducts = products.slice(half);

  return (
    <div className="subfamily-container mb-4">
      {/* Título unificado de la subfamilia */}
      <div 
        className="text-white text-center fw-bold py-2 px-3 rounded-top text-uppercase"
        style={{ backgroundColor: headerColor || 'var(--azul-ultramar)', fontSize: '0.95rem', letterSpacing: '0.5px' }}
      >
        {title}
      </div>

      <div className="bg-white p-2 p-md-3 border border-top-0 rounded-bottom shadow-sm">
        
        {/* 1. VISTA MOBILE / TABLET (< 992px): Una única tabla continua */}
        <div className="d-block d-lg-none">
          <SingleTable items={products} hasCompatibility={hasCompatibility} isSecondary={false} />
        </div>

        {/* 2. VISTA DESKTOP (>= 992px): Dos columnas paralelas lado a lado */}
        <div className="d-none d-lg-block">
          <Row className="g-3 g-xl-4">
            <Col lg={6}>
              <SingleTable items={leftColumnProducts} hasCompatibility={hasCompatibility} isSecondary={false} />
            </Col>
            {rightColumnProducts.length > 0 && (
              <Col lg={6}>
                <SingleTable items={rightColumnProducts} hasCompatibility={hasCompatibility} isSecondary={true} />
              </Col>
            )}
          </Row>
        </div>

      </div>
    </div>
  );
};