import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
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

export const ContactSection = () => {
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
    // Acá me voy a conectar con el backend en NestJS o un servicio de mails
    
    // 1. Mostramos la alerta elegante
    setSubmitted(true);

    // 2. Limpiamos los campos del formulario
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      mensaje: ''
    });

    // 3. Opcional: Ocultar el mensaje automáticamente después de 6 segundos
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contacto" className="py-5 bg-light">
      <Container fluid className="px-4 px-md-5">
        {/* Encabezado: mantenemos únicamente este espacio reducido */}
        <Row className="mb-3">
          <Col lg={8} className="text-start">
            <div 
              style={{ 
                width: '50px', 
                height: '4px', 
                backgroundColor: 'var(--rojo-principal)', 
                marginBottom: '15px' 
              }}
            ></div>
            <h2 className="display-5 fw-bold text-uppercase mb-2" style={{ color: 'var(--azul-ultramar)' }}>
              CONTACTO Y COTIZACIONES
            </h2>
            <p className="text-secondary fs-6 mb-0">
              Ponete en contacto con nuestro equipo comercial o técnico para cotizar piezas y mecanizados a medida.
            </p>
          </Col>
        </Row>

        <Row className="gy-4">
          {/* Columna Izquierda: Atención Directa (Tamaños y padding restaurados) */}
          <Col lg={5} className="text-start">
            <div className="bg-white p-4 p-md-5 shadow-sm border-start border-4" style={{ borderColor: 'var(--rojo-principal)' }}>
              <h4 className="fw-bold text-uppercase mb-4" style={{ color: 'var(--azul-ultramar)' }}>
                Atención Directa
              </h4>

              {/* Botones de WhatsApp */}
              <div className="mb-4">
                <small className="text-muted text-uppercase fw-semibold d-block mb-2">Canales de WhatsApp</small>
                <div className="d-flex flex-column gap-2">
                  <a 
                    href="https://wa.me/5493492220724?text=Hola,%20quisiera%20realizar%20una%20consulta%20de%20Ventas" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-success fw-bold d-flex align-items-center justify-content-between px-3 py-2"
                  >
                    <span><FaWhatsapp className="fs-5 me-2" /> WhatsApp Ventas</span>
                    <small>+54 9 3492 22-0724</small>
                  </a>

                  <a 
                    href="https://wa.me/5493492419267?text=Hola,%20quisiera%20realizar%20una%20consulta%20Técnica" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-success fw-bold d-flex align-items-center justify-content-between px-3 py-2"
                  >
                    <span><FaWhatsapp className="fs-5 me-2" /> Atención Técnica</span>
                    <small>+54 9 3492 41-9267</small>
                  </a>
                </div>
              </div>

              <hr className="my-4 text-muted opacity-25" />

              {/* Teléfono Fijo, Horarios y Ubicación */}
              <div className="d-flex flex-column gap-3 mb-4 fs-6 text-secondary">
                <div className="d-flex align-items-center gap-3">
                  <FaPhoneAlt style={{ color: 'var(--rojo-principal)' }} />
                  <span><strong>Teléfono Fijo:</strong> (03492) 505594</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <FaClock style={{ color: 'var(--rojo-principal)' }} />
                  <span><strong>Horarios:</strong> Lunes a Jueves de 07:00 a 16:00 hs y 
                  Viernes de 07:00 a 15:00 hs</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <FaMapMarkerAlt style={{ color: 'var(--rojo-principal)' }} />
                  <span><strong>Ubicación:</strong> Lisandro de la Torre 1960, Rafaela, Santa Fe</span>
                </div>
              </div>

              <hr className="my-4 text-muted opacity-25" />

              {/* Redes Sociales */}
              <div>
                <small className="text-muted text-uppercase fw-semibold d-block mb-3">Redes Institucionales</small>
                <div className="d-flex gap-3">
                  <a 
                    href="https://www.instagram.com/metalurgica.soltermann/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-dark d-flex align-items-center justify-content-center"
                    style={{ width: '42px', height: '42px', borderRadius: '4px', backgroundColor: 'var(--azul-ultramar)', border: 'none' }}
                  >
                    <FaInstagram className="fs-5 text-white" />
                  </a>

                  <a 
                    href="https://www.linkedin.com/company/metal%C3%BArgica-soltermann/home/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-dark d-flex align-items-center justify-content-center"
                    style={{ width: '42px', height: '42px', borderRadius: '4px', backgroundColor: 'var(--azul-ultramar)', border: 'none' }}
                  >
                    <FaLinkedin className="fs-5 text-white" />
                  </a>
                </div>
              </div>

            </div>
          </Col>

          {/* Columna Derecha: Formulario (Tamaños y padding restaurados) */}
          <Col lg={7} className="text-start">
            <div className="bg-white p-4 p-md-5 shadow-sm">
              <h4 className="fw-bold text-uppercase mb-4" style={{ color: 'var(--azul-ultramar)' }}>
                Envianos un Mensaje
              </h4>
              
              {/* Alerta de Confirmación Elegante */}
              {submitted && (
                <Alert 
                  variant="success" 
                  onClose={() => setSubmitted(false)} 
                  dismissible 
                  className="d-flex align-items-center gap-3 mb-4 py-3"
                  style={{ backgroundColor: '#e8f5e9', borderColor: '#c8e6c9', color: '#1b5e20' }}
                >
                  <FaCheckCircle className="fs-3 flex-shrink-0 text-success" />
                  <div>
                    <strong className="d-block">¡Consulta enviada con éxito!</strong>
                    <small>Muchas gracias por escribirnos. Nuestro equipo se pondrá en contacto a la brevedad.</small>
                  </div>
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="gy-3">
                  <Col md={6}>
                    <Form.Group controlId="nombre">
                      <Form.Label className="fw-semibold text-secondary small">Nombre y Apellido *</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="nombre" 
                        placeholder="Ej: Carlos Gómez" 
                        required 
                        value={formData.nombre}
                        onChange={handleChange}
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="empresa">
                      <Form.Label className="fw-semibold text-secondary small">Empresa / Razón Social</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="empresa" 
                        placeholder="Ej: Ind. Metalúrgicas S.A." 
                        value={formData.empresa}
                        onChange={handleChange}
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label className="fw-semibold text-secondary small">Correo Electrónico *</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        placeholder="ejemplo@empresa.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="telefono">
                      <Form.Label className="fw-semibold text-secondary small">Teléfono de Contacto *</Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="telefono" 
                        placeholder="Ej: 3492XXXXXX" 
                        required 
                        value={formData.telefono}
                        onChange={handleChange}
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group controlId="mensaje">
                      <Form.Label className="fw-semibold text-secondary small">Detalle de la Consulta / Plano *</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={4} 
                        name="mensaje" 
                        placeholder="Escribí los detalles de las piezas o servicios que requieres..." 
                        required 
                        value={formData.mensaje}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12} className="mt-4">
                    <Button 
                      type="submit" 
                      className="text-white text-uppercase fw-bold px-4 py-3 d-inline-flex align-items-center gap-2 border-0"
                      style={{ backgroundColor: 'var(--azul-ultramar)', borderRadius: '2px' }}
                    >
                      <FaPaperPlane style={{ color: 'var(--rojo-principal)' }} /> Enviar Consulta
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};