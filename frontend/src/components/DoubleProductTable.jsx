import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { FaCartPlus, FaCheck } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

// Subtabla individual con productos adaptada 100% a mobile
const SingleTable = ({ items, hasCompatibility, isSecondary = false }) => {
  const { addToCart, cartItems } = useCart();

  return (
    <div 
      className="table-responsive bg-white rounded shadow-sm"
      style={{ 
        overflowX: 'auto', 
        WebkitOverflowScrolling: 'touch' 
      }}
    >
      <Table 
        hover 
        className="align-middle mb-0 custom-product-table"
        style={{ 
          minWidth: hasCompatibility ? '520px' : '430px',
          borderCollapse: 'separate',
          borderSpacing: 0
        }}
      >
        <thead className={`table-light text-secondary text-uppercase small ${isSecondary ? 'table-header-secondary' : ''}`}>
          <tr>
            <th style={{ width: '60px', minWidth: '60px' }} className="text-center">Producto</th>
            <th style={{ width: '75px', minWidth: '75px' }} className="text-start">Código</th>
            <th style={{ minWidth: '160px' }} className="text-start">Descripción</th>
            {hasCompatibility && (
              <th style={{ minWidth: '140px' }} className="text-start">Compatibilidad</th>
            )}
            
            {/* TH FIJO A LA DERECHA */}
            <th 
              style={{
                position: 'sticky',
                right: 0,
                top: 0,
                width: '48px',
                minWidth: '48px',
                backgroundColor: '#f8f9fa',
                zIndex: 3,
                boxShadow: '-3px 0 6px rgba(0, 0, 0, 0.08)',
                borderLeft: '1px solid #e9ecef'
              }}
              className="text-center p-1 th-sticky-action"
            ></th>
          </tr>
        </thead>
        <tbody>
          {items.map((prod, index) => {
            const isAdded = cartItems.some((item) => item.codigo === prod.codigo);

            return (
              <tr key={`${prod.codigo}-${index}`}>
                {/* 1. PRODUCTO (FOTO) */}
                <td className="text-center py-2 position-relative product-cell-zoom" style={{ width: '60px' }}>
                  <div className="product-preview-container">
                    <img 
                      src={prod.foto || '/placeholder.png'} 
                      alt={prod.codigo} 
                      className="product-thumb-img"
                      style={{ maxHeight: '42px', maxWidth: '55px', objectFit: 'contain' }}
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

                {/* 2. CÓDIGO */}
                <td className="fw-bold text-dark py-2 text-start text-nowrap" style={{ width: '75px' }}>
                  {prod.codigo}
                </td>

                {/* 3. DESCRIPCIÓN */}
                <td className="text-secondary small py-2 text-start" style={{ minWidth: '160px' }}>
                  {prod.descripcion}
                </td>

                {/* 4. COMPATIBILIDAD */}
                {hasCompatibility && (
                  <td className="text-muted small py-2 text-start" style={{ minWidth: '140px' }}>
                    {prod.compatibilidad || '-'}
                  </td>
                )}

                {/* 5. CELDA DEL CARRITO FIJA A LA DERECHA */}
                <td 
                  style={{
                    position: 'sticky',
                    right: 0,
                    width: '48px',
                    minWidth: '48px',
                    backgroundColor: '#ffffff',
                    zIndex: 2,
                    boxShadow: '-3px 0 6px rgba(0, 0, 0, 0.08)',
                    borderLeft: '1px solid #e9ecef'
                  }}
                  className="text-center align-middle p-1 td-sticky-action"
                >
                  <button
                    type="button"
                    onClick={() => !isAdded && addToCart(prod)}
                    disabled={isAdded}
                    className="btn btn-sm d-inline-flex align-items-center justify-content-center p-0"
                    style={{
                      backgroundColor: isAdded ? '#6c757d' : 'var(--azul-ultramar, #1e2044)',
                      color: '#fff',
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      border: 'none',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                      cursor: isAdded ? 'default' : 'pointer',
                      opacity: isAdded ? 0.75 : 1
                    }}
                    title={isAdded ? `Producto ${prod.codigo} ya agregado` : `Agregar ${prod.codigo} a la cotización`}
                  >
                    <FaCartPlus size={15} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

// Esqueleto vacío para rellenar el espacio cuando hay 1 solo producto
const EmptyTablePlaceholder = () => (
  <div className="table-responsive bg-white rounded shadow-sm border border-light h-100 d-flex flex-column">
    <Table className="align-middle mb-0 custom-product-table">
      <thead className="table-light">
        <tr>
          {/* Cabecera gris vacía con la misma altura */}
          <th style={{ height: '37px', borderBottom: 'none' }}>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* Cuerpo blanco vacío con la altura aproximada de una fila */}
          <td style={{ height: '58px', borderBottom: 'none' }}>&nbsp;</td>
        </tr>
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
    <div className="subfamily-container mb-4" style={{ overflow: 'visible' }}>
      {/* Título unificado */}
      <div 
        className="subfamily-header text-white text-center fw-bold py-2 px-3 rounded-top text-uppercase"
        style={{ backgroundColor: headerColor || 'var(--azul-ultramar)', fontSize: '0.95rem', letterSpacing: '0.5px' }}
      >
        {title}
      </div>

      <div 
        className="bg-white p-2 p-md-3 border border-top-0 rounded-bottom shadow-sm"
        style={{ overflow: 'visible' }}
      >
        {/* 1. VISTA MOBILE (< 992px): Muestra solo los productos que existen */}
        <div className="d-block d-lg-none">
          <SingleTable items={products} hasCompatibility={hasCompatibility} isSecondary={false} />
        </div>

        {/* 2. VISTA DESKTOP (>= 992px): Si hay 1 solo producto, muestra el esqueleto al lado */}
        <div className="d-none d-lg-block">
          <Row className="g-3 g-xl-4">
            <Col lg={6}>
              <SingleTable items={leftColumnProducts} hasCompatibility={hasCompatibility} isSecondary={false} />
            </Col>
            <Col lg={6}>
              {rightColumnProducts.length > 0 ? (
                <SingleTable items={rightColumnProducts} hasCompatibility={hasCompatibility} isSecondary={true} />
              ) : (
                <EmptyTablePlaceholder />
              )}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};