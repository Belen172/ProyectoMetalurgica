import React, { useState } from 'react';
import { Modal, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaLinkedin, 
  FaPaperPlane,
  FaCheckCircle 
} from 'react-icons/fa';

export const ContactSection = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. Mostramos la alerta de éxito
    setSubmitted(true);

    // 2. Limpiamos los campos
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      mensaje: ''
    });

    // 3. Opcional: Ocultar el mensaje a los 6 segundos
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      size="xl" 
      centered 
      scrollable
      contentClassName="border-0 shadow-lg"
    >
      {/* Cabecera del Modal con botón de cierre */}
      <Modal.Header closeButton className="p-4 pb-2 border-0">
        <div>
          <div 
            style={{ 
              width: '45px', 
              height: '4px', 
              backgroundColor: 'var(--rojo-principal)', 
              marginBottom: '10px' 
            }} 
          />
          <Modal.Title className="display-6 fw-bold text-uppercase" style={{ color: 'var(--azul-ultramar)' }}>
            Contacto y Cotizaciones
          </Modal.Title>
          <p className="text-secondary small mb-0 mt-1">
            Ponete en contacto con nuestro equipo comercial o técnico para cotizar piezas y mecanizados a medida.
          </p>
        </div>
      </Modal.Header>

      {/* Cuerpo con tus dos columnas originales */}
      <Modal.Body className="p-4 pt-2">
        <Row className="gy-4">
          
          {/* Columna Izquierda: Atención Directa */}
          <Col lg={5} className="text-start">
            <div className="bg-light p-4 rounded h-100 border-start border-4" style={{ borderColor: 'var(--rojo-principal)' }}>
              <h5 className="fw-bold text-uppercase mb-3" style={{ color: 'var(--azul-ultramar)' }}>
                Atención Directa
              </h5>

              {/* Botones de WhatsApp */}
              <div className="mb-4">
                <small className="text-muted text-uppercase fw-semibold d-block mb-2">Canales de WhatsApp</small>
                <div className="d-flex flex-column gap-2">
                  <a 
                    href="https://wa.me/5493492220724?text=Hola,%20quisiera%20realizar%20una%20consulta%20de%20Ventas" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-success fw-bold d-flex align-items-center justify-content-between px-3 py-2 bg-white"
                  >
                    <span><FaWhatsapp className="fs-5 me-2" /> Ventas</span>
                    <small>+54 9 3492 22-0724</small>
                  </a>

                  <a 
                    href="https://wa.me/5493492419267?text=Hola,%20quisiera%20realizar%20una%20consulta%20Técnica" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-success fw-bold d-flex align-items-center justify-content-between px-3 py-2 bg-white"
                  >
                    <span><FaWhatsapp className="fs-5 me-2" /> Soporte Técnico</span>
                    <small>+54 9 3492 41-9267</small>
                  </a>
                </div>
              </div>

              <hr className="my-3 text-muted opacity-25" />

              {/* Teléfono, Horarios y Ubicación */}
              <div className="d-flex flex-column gap-2 mb-3 small text-secondary">
                <div className="d-flex align-items-center gap-2">
                  <FaPhoneAlt style={{ color: 'var(--rojo-principal)' }} />
                  <span><strong>Fijo:</strong> (03492) 505594</span>
                </div>

                <div className="d-flex align-items-start gap-2">
                  <FaClock className="mt-1 flex-shrink-0" style={{ color: 'var(--rojo-principal)' }} />
                  <span><strong>Horarios:</strong> Lun a Jue 07:00 a 16:00 hs | Vie 07:00 a 15:00 hs</span>
                </div>

                <div className="d-flex align-items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" style={{ color: 'var(--rojo-principal)' }} />
                  <span><strong>Ubicación:</strong> Lisandro de la Torre 1960, Rafaela, Santa Fe</span>
                </div>
              </div>

              <hr className="my-3 text-muted opacity-25" />

              {/* Redes Sociales */}
              <div>
                <small className="text-muted text-uppercase fw-semibold d-block mb-2">Redes Institucionales</small>
                <div className="d-flex gap-2">
                  <a 
                    href="https://www.instagram.com/metalurgica.soltermann/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn d-flex align-items-center justify-content-center"
                    style={{ width: '38px', height: '38px', backgroundColor: 'var(--azul-ultramar)' }}
                  >
                    <FaInstagram className="fs-6 text-white" />
                  </a>

                  <a 
                    href="https://www.linkedin.com/company/metal%C3%BArgica-soltermann/home/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn d-flex align-items-center justify-content-center"
                    style={{ width: '38px', height: '38px', backgroundColor: 'var(--azul-ultramar)' }}
                  >
                    <FaLinkedin className="fs-6 text-white" />
                  </a>
                </div>
              </div>

            </div>
          </Col>

          {/* Columna Derecha: Formulario */}
          <Col lg={7} className="text-start">
            <div className="p-2">
              <h5 className="fw-bold text-uppercase mb-3" style={{ color: 'var(--azul-ultramar)' }}>
                Envianos un Mensaje
              </h5>
              
              {/* Alerta de Confirmación */}
              {submitted && (
                <Alert 
                  variant="success" 
                  onClose={() => setSubmitted(false)} 
                  dismissible 
                  className="d-flex align-items-center gap-3 mb-3 py-2"
                >
                  <FaCheckCircle className="fs-4 flex-shrink-0 text-success" />
                  <div>
                    <strong className="d-block small">¡Consulta enviada con éxito!</strong>
                    <small>Nos pondremos en contacto a la brevedad.</small>
                  </div>
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="gy-3">
                  <Col md={6}>
                    <Form.Group controlId="nombre">
                      <Form.Label className="fw-semibold text-secondary small mb-1">Nombre y Apellido *</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="nombre" 
                        placeholder="Ej: Carlos Gómez" 
                        required 
                        value={formData.nombre}
                        onChange={handleChange}
                        size="sm"
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="empresa">
                      <Form.Label className="fw-semibold text-secondary small mb-1">Empresa / Razón Social</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="empresa" 
                        placeholder="Ej: Ind. Metalúrgicas S.A." 
                        value={formData.empresa}
                        onChange={handleChange}
                        size="sm"
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label className="fw-semibold text-secondary small mb-1">Correo Electrónico *</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        placeholder="ejemplo@empresa.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        size="sm"
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="telefono">
                      <Form.Label className="fw-semibold text-secondary small mb-1">Teléfono de Contacto *</Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="telefono" 
                        placeholder="Ej: 3492XXXXXX" 
                        required 
                        value={formData.telefono}
                        onChange={handleChange}
                        size="sm"
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group controlId="mensaje">
                      <Form.Label className="fw-semibold text-secondary small mb-1">Detalle de la Consulta / Plano *</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="mensaje" 
                        placeholder="Escribí los detalles de las piezas o servicios que requieres..." 
                        required 
                        value={formData.mensaje}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12} className="mt-3">
                    <Button 
                      type="submit" 
                      className="text-white text-uppercase fw-bold px-4 py-2 d-inline-flex align-items-center gap-2 border-0"
                      style={{ backgroundColor: 'var(--azul-ultramar)', borderRadius: '4px' }}
                    >
                      <FaPaperPlane style={{ color: 'var(--rojo-principal)' }} /> Enviar Consulta
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>

        </Row>
      </Modal.Body>
    </Modal>
  );
};