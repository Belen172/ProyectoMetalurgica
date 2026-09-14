import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

// Subtabla individual para cuplas con Zoom Flotante y columnas técnicas
const SingleCuplaTable = ({ items, isSecondary = false }) => (
    <div className="table-responsive bg-white rounded shadow-sm">
      <Table hover className="align-middle mb-0 custom-product-table custom-product-table-cuplas">
        <thead className={`table-light text-secondary text-uppercase small ${isSecondary ? 'table-header-secondary' : ''}`}>
          <tr>
            <th style={{ width: '12%' }} className="text-center">Producto</th>
            <th style={{ width: '16%' }} className="text-start">Código</th>
            <th style={{ width: '28%' }} className="text-start">Descripción</th>
            <th style={{ width: '14%' }} className="text-center">ØH (mm)</th>
            <th style={{ width: '18%' }} className="text-start">Ø1 Ø2 Rosca</th>
            <th style={{ width: '12%' }} className="text-center">L (mm)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((prod, index) => (
            <tr key={`${prod.codigo}-${index}`}>
              {/* Celda con Zoom */}
              <td className="text-center py-1 position-relative product-cell-zoom">
                <div className="product-preview-container">
                  <img 
                    src={prod.foto || '/placeholder.png'} 
                    alt={prod.denominacion || prod.codigo} 
                    className="product-thumb-img"
                    style={{ maxHeight: '38px', maxWidth: '55px', objectFit: 'contain' }}
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
              <td className="fw-bold text-dark text-start py-1">{prod.codigo}</td>
              <td className="text-secondary small text-start py-1">{prod.denominacion}</td>
              <td className="text-secondary small text-center py-1">{prod.diametroH}</td>
              <td className="text-secondary small text-start py-1">{prod.rosca}</td>
              <td className="text-secondary small text-center py-1">{prod.largo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
);

// Componente Principal: Divide en 2 columnas en Desktop (>= 992px)
export const DoubleCuplasTable = ({ title, products = [], headerColor }) => {
  const half = Math.ceil(products.length / 2);
  const leftItems = products.slice(0, half);
  const rightItems = products.slice(half);

  return (
    <div className="subfamily-container mb-4">
      <div 
        className="text-white text-center fw-bold py-2 px-3 rounded-top text-uppercase" 
        style={{ 
          backgroundColor: headerColor || 'var(--rojo-principal, #9D2E35)', 
          fontSize: '0.95rem', 
          letterSpacing: '0.5px' 
        }}
      >
        {title}
      </div>

      <div className="bg-white p-2 p-md-3 border border-top-0 rounded-bottom shadow-sm">
        {/* Vista Mobile: Una sola tabla continua */}
        <div className="d-block d-lg-none">
          <SingleCuplaTable items={products} isSecondary={false} />
        </div>

        {/* Vista Desktop: Dos tablas lado a lado */}
        <div className="d-none d-lg-block">
          <Row className="g-3 g-xl-4">
            <Col lg={6}>
              <SingleCuplaTable items={leftItems} isSecondary={false} />
            </Col>
            {rightItems.length > 0 && (
              <Col lg={6}>
                <SingleCuplaTable items={rightItems} isSecondary={true} />
              </Col>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DoubleCuplasTable;