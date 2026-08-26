import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

// Lista de familias institucionales
const PRODUCT_FAMILIES = [
  { id: 'alemites-pulgadas', name: 'Alemites Rosca en Pulgadas' },
  { id: 'alemites-metrica', name: 'Alemites Rosca Métrica' },
  { id: 'cuplas', name: 'Cuplas Roscadas' },
  { id: 'especiales', name: 'Alemites Especiales' },
  { id: 'mecanizado-plano', name: 'Mecanizado CNC' },
  { id: 'aire-comprimido', name: 'Aire Comprimido' },
];

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

  // Manejador de navegación general (Inicio / Nosotros / Productos general)
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

  // Manejador al hacer click en una familia específica del dropdown
  const handleFamilyClick = (familyId) => {
    // Opción A: Si manejás rutas dedicadas tipo "/productos/:id"
    navigate(`/productos/${familyId}`);

    // Opción B: Si las familias están dentro del home en la sección #productos
    if (location.pathname === '/') {
      const element = document.getElementById('productos');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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

        {/* NIVEL 2: Barra Azul con los Botones */}
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
            
            {/* ÍTEM PRODUCTOS CON DROPDOWN EN HOVER */}
            <div className="nav-item-dropdown">
              <Nav.Link 
                href="#productos" 
                onClick={(e) => handleNavClick(e, 'productos')}
                className={`capsule-nav-link ${activeSection === 'productos' ? 'active' : ''}`}
              >
                PRODUCTOS
              </Nav.Link>

              {/* Menú Flotante de Categorías */}
              <div className="products-dropdown-menu shadow-lg">
                {PRODUCT_FAMILIES.map((family) => (
                  <button
                    key={family.id}
                    type="button"
                    className="products-dropdown-item"
                    onClick={() => handleFamilyClick(family.id)}
                  >
                    {family.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Botón de Contacto */}
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