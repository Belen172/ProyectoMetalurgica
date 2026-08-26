import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();
  const navigate = useNavigate();

  // Detección de sección activa mediante Scroll (solo en la Home)
  useEffect(() => {
    if (location.pathname !== '/') {
      if (location.pathname.startsWith('/productos')) {
        setActiveSection('productos');
      }
      return;
    }

    const sections = ['inicio', 'nosotros', 'productos'];
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
  }, [location.pathname]);

  // Manejador inteligente de navegación entre rutas y secciones
  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (targetId === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Si estamos en /productos/:familyId, vamos a la raíz y hacemos scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="custom-header-wrapper">
      <div className="d-flex flex-column align-items-center">
        
        {/* NIVEL 1: Trapecio Blanco con Logo */}
        <div className="trapezoid-logo-container">
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, 'inicio')}
            className="d-inline-flex align-items-center justify-content-center"
          >
            <img 
              src="/logo.png" 
              alt="Metalúrgica Soltermann" 
              style={{ maxHeight: '56px', width: 'auto', cursor: 'pointer' }} 
            />
          </a>
        </div>

        {/* NIVEL 2: Pancita Azul con los Botones */}
        <div className="capsule-nav-container">
          <Nav className="d-flex flex-row flex-nowrap align-items-center justify-content-center m-0 p-0">
            <Nav.Link 
              href="#inicio" 
              onClick={(e) => handleNavClick(e, 'inicio')}
              className={`capsule-nav-link ${activeSection === 'inicio' ? 'active' : ''}`}
            >
              INICIO
            </Nav.Link>
            
            <Nav.Link 
              href="#nosotros" 
              onClick={(e) => handleNavClick(e, 'nosotros')}
              className={`capsule-nav-link ${activeSection === 'nosotros' ? 'active' : ''}`}
            >
              NOSOTROS
            </Nav.Link>
            
            <Nav.Link 
              href="#productos" 
              onClick={(e) => handleNavClick(e, 'productos')}
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