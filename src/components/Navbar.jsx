import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';

export const Navbar = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = ['inicio', 'nosotros', 'productos', 'contacto'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="custom-header-wrapper">
      <div className="d-flex flex-column align-items-center">
        
        {/* NIVEL 1: Trapecio Blanco con Logo */}
        <div className="trapezoid-logo-container">
          <a href="#inicio" className="d-inline-flex align-items-center justify-content-center">
            <img 
              src="/logo.png" 
              alt="Metalúrgica Soltermann" 
              style={{ maxHeight: '56px', width: 'auto' }} 
            />
          </a>
        </div>

        {/* NIVEL 2: Pancita Azul con los Botones */}
        <div className="capsule-nav-container">
          <Nav className="d-flex flex-row flex-nowrap align-items-center justify-content-center m-0 p-0">
            <Nav.Link 
              href="#inicio" 
              className={`capsule-nav-link ${activeSection === 'inicio' ? 'active' : ''}`}
            >
              INICIO
            </Nav.Link>
            <Nav.Link 
              href="#nosotros" 
              className={`capsule-nav-link ${activeSection === 'nosotros' ? 'active' : ''}`}
            >
              NOSOTROS
            </Nav.Link>
            <Nav.Link 
              href="#productos" 
              className={`capsule-nav-link ${activeSection === 'productos' ? 'active' : ''}`}
            >
              PRODUCTOS
            </Nav.Link>
            
            {/* Botón de Contacto que abre el Modal */}
            <Nav.Link 
              as="button"
              onClick={onOpenContact} 
              className="capsule-nav-link bg-transparent border-0"
            >
              CONTACTO
            </Nav.Link>
          </Nav>
        </div>

      </div>
    </header>
  );
};