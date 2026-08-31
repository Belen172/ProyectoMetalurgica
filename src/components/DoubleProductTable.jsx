import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

// Subcomponente de una tabla individual
const SingleTable = ({ items, hasCompatibility }) => (
  <div className="table-responsive bg-white rounded shadow-sm">
    <Table hover className="align-middle mb-0 custom-product-table">
      <thead className="table-light text-secondary text-uppercase small">
        <tr>
          <th style={{ width: '22%' }} className="text-center">Producto</th>
          <th style={{ width: '25%' }} className="text-start">Código</th>
          <th style={{ width: hasCompatibility ? '30%' : '53%' }} className="text-start">Descripción</th>
          {hasCompatibility && <th style={{ width: '23%' }} className="text-start">Compatibilidad</th>}
        </tr>
      </thead>
      <tbody>
        {items.map((prod, index) => (
          <tr key={prod.codigo || index}>
            <td className="text-center py-2">
              <div className="product-img-wrapper">
                <img 
                  src={prod.foto || '/placeholder.png'} 
                  alt={prod.codigo} 
                  className="product-img-cell"
                  style={{ maxHeight: '42px', maxWidth: '60px', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = 'https://placehold.co/100x55?text=Pieza'; }}
                />
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
    // Calculamos la mitad exacta de los elementos
  const half = Math.ceil(products.length / 2);
  const leftColumnProducts = products.slice(0, half);
  const rightColumnProducts = products.slice(half);

  return (
    <div className="subfamily-container mb-4">
      {/* Título de la Subfamilia con color dinámico */}
      <div 
        className="text-white text-center fw-bold py-2 px-3 rounded-top text-uppercase"
        style={{ backgroundColor: headerColor || 'var(--azul-ultramar)', fontSize: '0.95rem', letterSpacing: '0.5px' }}
      >
        {title}
      </div>

      {/* Bloque contenedor con las dos tablas */}
      <div className="bg-white p-2 p-md-3 border border-top-0 rounded-bottom shadow-sm">
        <Row className="g-3 g-xl-4">
          <Col xs={12} lg={rightColumnProducts.length > 0 ? 6 : 12}>
            <SingleTable items={leftColumnProducts} hasCompatibility={hasCompatibility} />
          </Col>
          {rightColumnProducts.length > 0 && (
            <Col xs={12} lg={6}>
              <SingleTable items={rightColumnProducts} hasCompatibility={hasCompatibility} />
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};