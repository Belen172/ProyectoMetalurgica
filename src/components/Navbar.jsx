import React, { useState, useEffect } from 'react';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sectionIds = ['inicio', 'nosotros', 'productos', 'contacto'];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // Se activa cuando la sección ocupa más del 30% de la pantalla
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px', // Ajuste para detectar la sección cuando está centrada
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky-top shadow-sm" style={{ zIndex: 1030 }}>
      {/* Nivel Superior: Logo Centrado */}
      <div className="bg-white py-3 border-bottom">
        <Container fluid className="px-4 d-flex justify-content-center align-items-center">
          <a href="#inicio" className="text-decoration-none">
            <img
              src="/logo.png"
              alt="Metalúrgica Soltermann"
              height="75"
              className="d-block mx-auto"
            />
          </a>
        </Container>
      </div>

      {/* Nivel Inferior: Menú con estado activo */}
      <BsNavbar expand="lg" style={{ backgroundColor: 'var(--azul-ultramar)' }} variant="dark" className="py-2">
        <Container fluid className="justify-content-center">
          <BsNavbar.Toggle aria-controls="navbar-soltermann" className="my-1" />
          <BsNavbar.Collapse id="navbar-soltermann" className="justify-content-center">
            <Nav className="text-uppercase text-center d-flex gap-lg-5">
              <Nav.Link
                href="#inicio"
                className={`nav-custom-link ${activeSection === 'inicio' ? 'active' : ''}`}
                onClick={() => setActiveSection('inicio')}
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                href="#nosotros"
                className={`nav-custom-link ${activeSection === 'nosotros' ? 'active' : ''}`}
                onClick={() => setActiveSection('nosotros')}
              >
                Nosotros
              </Nav.Link>
              <Nav.Link
                href="#productos"
                className={`nav-custom-link ${activeSection === 'productos' ? 'active' : ''}`}
                onClick={() => setActiveSection('productos')}
              >
                Productos
              </Nav.Link>
              <Nav.Link
                href="#contacto"
                className={`nav-custom-link ${activeSection === 'contacto' ? 'active' : ''}`}
                onClick={() => setActiveSection('contacto')}
              >
                Contacto
              </Nav.Link>
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </header>
  );
};