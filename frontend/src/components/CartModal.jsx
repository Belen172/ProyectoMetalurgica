import React, { useState } from 'react';
import { Modal, Button, Table, Form } from 'react-bootstrap';
import { FaTrash, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

// Algoritmo oficial de validación de CUIT (Módulo 11 - AFIP/ARCA)
const validarCUIT = (cuit) => {
  const clean = String(cuit).replace(/\D/g, '');
  if (clean.length !== 11) return false;

  const prefijosValidos = ['20', '23', '24', '27', '30', '33', '34'];
  const prefijo = clean.substring(0, 2);
  if (!prefijosValidos.includes(prefijo)) return false;

  const multiplicadores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  let suma = 0;
  for (let i = 0; i < 10; i++) {
    suma += parseInt(clean[i], 10) * multiplicadores[i];
  }

  const resto = suma % 11;
  let digitoCalculado = 11 - resto;
  if (resto === 0) digitoCalculado = 0;
  if (resto === 1) digitoCalculado = prefijo === '23' ? 9 : 4;

  return digitoCalculado === parseInt(clean[10], 10);
};

export const CartModal = ({ show, onHide }) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getStepAndMin } = useCart();
  const [cuit, setCuit] = useState('');
  const [cuitError, setCuitError] = useState(false);

  // Limpia el CUIT quitando guiones/espacios para evaluar longitud y validez
  const cleanCuit = cuit.replace(/\D/g, '');
  const isCuitValido = validarCUIT(cuit);

  const handleSendQuote = () => {
    // Si no es un CUIT válido, marcamos error y bloqueamos el envío
    if (!isCuitValido) {
      setCuitError(true);
      return;
    }
    setCuitError(false);

    const phone = '5493492220724';

    let text = '¡Hola! Quisiera solicitar una cotización de los siguientes productos que seleccioné en su catálogo web:\n\n';

    cartItems.forEach((item, index) => {
      const { min } = getStepAndMin(item.codigo, item.familyId);
      const qty = item.cantidad === '' || Number(item.cantidad) < min ? min : item.cantidad;
      const desc = item.descripcion || item.denominacion || '';
      text += `${index + 1}. Código: ${item.codigo} – ${desc} | Cantidad: ${qty} u.\n`;
    });

    text += `\nLes dejo mi número de CUIT: ${cuit.trim()}`;
    text += '\nQuedo a la espera de su respuesta. ¡Muchas gracias!';

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleClose = () => {
    setCuitError(false);
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold" style={{ color: 'var(--azul-ultramar, #1e2044)' }}>
          Presupuesto de Productos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <div className="text-center py-4 text-muted">
            <p className="mb-0">Aún no agregaste productos para cotizar.</p>
            <small>Hacé clic en el carrito al lado de cada producto en la tabla para sumarlo.</small>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <Table hover className="align-middle mb-3">
                <thead className="table-light small text-uppercase">
                  <tr>
                    <th style={{ width: '12%' }} className="text-center">Producto</th>
                    <th style={{ width: '16%' }}>Código</th>
                    <th style={{ width: '38%' }}>Descripción</th>
                    <th style={{ width: '26%' }} className="text-center">Cantidad</th>
                    <th style={{ width: '8%' }} className="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => {
                    const { min, step, label } = getStepAndMin(item.codigo, item.familyId);
                    const isHundredStep = step === 100;
                    const currentVal = item.cantidad === '' ? '' : Number(item.cantidad);

                    return (
                      <tr key={item.codigo}>
                        {/* Miniatura del producto */}
                        <td className="text-center py-2">
                          <img 
                            src={item.foto || '/placeholder.png'} 
                            alt={item.codigo} 
                            style={{ 
                              maxHeight: '36px', 
                              maxWidth: '48px', 
                              objectFit: 'contain' 
                            }}
                            onError={(e) => { e.target.src = 'https://placehold.co/100x55?text=Pieza'; }}
                          />
                        </td>
                        <td className="fw-bold">{item.codigo}</td>
                        <td className="small text-secondary">{item.descripcion || item.denominacion}</td>
                        <td className="text-center">
                          <div className="d-flex align-items-center justify-content-center gap-1">
                            {/* Botón MENOS */}
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              className="px-2 py-0"
                              onClick={() => {
                                const safeVal = currentVal === '' ? min : currentVal;
                                updateQuantity(item.codigo, safeVal - step);
                              }}
                              disabled={currentVal !== '' && currentVal <= min}
                            >
                              -
                            </Button>

                            {/* Input de CANTIDAD */}
                            <input
                              type="number"
                              readOnly={isHundredStep}
                              step={step}
                              min={min}
                              value={item.cantidad}
                              onChange={(e) => {
                                const val = e.target.value;
                                if (val === '') {
                                  updateQuantity(item.codigo, '');
                                  return;
                                }
                                const num = parseInt(val, 10);
                                if (!isNaN(num)) {
                                  updateQuantity(item.codigo, num);
                                }
                              }}
                              onBlur={() => {
                                const num = parseInt(item.cantidad, 10);
                                if (isNaN(num) || num < min) {
                                  updateQuantity(item.codigo, min);
                                }
                              }}
                              className={`form-control form-control-sm text-center p-0 fw-semibold ${
                                isHundredStep ? 'bg-light' : 'bg-white'
                              }`}
                              style={{ 
                                width: '65px',
                                cursor: isHundredStep ? 'default' : 'text',
                                userSelect: isHundredStep ? 'none' : 'auto'
                              }}
                            />

                            {/* Botón MÁS */}
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              className="px-2 py-0"
                              onClick={() => {
                                const safeVal = currentVal === '' ? min : currentVal;
                                updateQuantity(item.codigo, safeVal + step);
                              }}
                            >
                              +
                            </Button>
                          </div>

                          {label && (
                            <span className="text-muted d-block" style={{ fontSize: '0.70rem' }}>
                              {label}
                            </span>
                          )}
                        </td>
                        <td className="text-center">
                          <Button
                            variant="link"
                            size="sm"
                            className="text-danger p-0"
                            onClick={() => removeFromCart(item.codigo)}
                            title="Quitar producto"
                          >
                            <FaTrash />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>

            {/* SECCIÓN DEL CUIT REQUERIDO CON VALIDACIÓN AFIP/ARCA */}
            <div className="bg-light p-3 rounded-3 border mb-2">
              <Form.Group controlId="inputCuit">
                <Form.Label className="fw-bold small mb-1" style={{ color: 'var(--azul-ultramar, #1e2044)' }}>
                  Número de CUIT de la Empresa / Solicitante <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: 30-12345678-9"
                  value={cuit}
                  onChange={(e) => {
                    setCuit(e.target.value);
                    if (cuitError) setCuitError(false);
                  }}
                  onBlur={() => {
                    // Si completó 11 dígitos o escribió algo que no valida, marca el error
                    if (cleanCuit.length > 0 && !isCuitValido) {
                      setCuitError(true);
                    }
                  }}
                  isInvalid={cuitError || (cleanCuit.length >= 11 && !isCuitValido)}
                  isValid={isCuitValido}
                  maxLength={13}
                  className="bg-white"
                />
                <Form.Control.Feedback type="invalid">
                  El número de CUIT ingresado no es válido. Verificá que los dígitos sean correctos.
                </Form.Control.Feedback>
                {isCuitValido && (
                  <Form.Control.Feedback type="valid">
                    CUIT válido.
                  </Form.Control.Feedback>
                )}
                <Form.Text className="text-muted" style={{ fontSize: '0.78rem' }}>
                  Dato requerido para la confección y emisión del presupuesto comercial.
                </Form.Text>
              </Form.Group>
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer className="border-0 pt-0 d-flex justify-content-between">
        {cartItems.length > 0 ? (
          <>
            <Button variant="outline-danger" size="sm" onClick={clearCart}>
              Vaciar lista
            </Button>
            <Button
              variant="success"
              className="d-flex align-items-center gap-2 fw-bold"
              style={{ 
                backgroundColor: !isCuitValido ? '#6c757d' : '#25D366', 
                borderColor: !isCuitValido ? '#6c757d' : '#25D366',
                cursor: !isCuitValido ? 'not-allowed' : 'pointer'
              }}
              onClick={handleSendQuote}
              disabled={!isCuitValido}
              title={!isCuitValido ? "Ingresá un CUIT válido para enviar" : "Cotizar por WhatsApp"}
            >
              <FaWhatsapp size={18} />
              Cotizar por WhatsApp
            </Button>
          </>
        ) : (
          <Button variant="secondary" size="sm" onClick={handleClose} className="ms-auto">
            Cerrar
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};