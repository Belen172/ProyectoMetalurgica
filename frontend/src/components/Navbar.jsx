import React, { useState, useEffect, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

// Lista de familias institucionales
const PRODUCT_FAMILIES = [
  { id: 'alemites-pulgadas', name: 'Alemites y Tapones Rosca en Pulgadas' },
  { id: 'alemites-metrica', name: 'Alemites y Tapones Rosca Métrica' },
  { id: 'especiales', name: 'Especiales' },
  { id: 'cuplas', name: 'Cuplas Roscadas' },
  { id: 'aire-comprimido', name: 'Accesorios para Aire Comprimido' },
  { id: 'mecanizado-plano', name: 'Servicio de Mecanizado' },
];

export const Navbar = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Cerrar el dropdown al hacer clic en cualquier parte fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Cerrar el dropdown si cambia de ruta
  useEffect(() => {
    setShowDropdown(false);
  }, [location.pathname]);

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
      if (window.scrollY < 100) {
        setActiveSection('inicio');
        return;
      }
  
      const triggerPoint = window.innerHeight * 0.35;
  
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Manejador de navegación general
  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    if (e.currentTarget) {
      e.currentTarget.blur();
    }

    setActiveSection(targetId);
    setShowDropdown(false);

    if (targetId === 'productos') {
      navigate('/productos');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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
    setShowDropdown(false);
    navigate(`/productos/${familyId}`);

    if (location.pathname === '/') {
      const element = document.getElementById('productos');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isHome = location.pathname === '/';

  return (
    <header 
      className="custom-header-wrapper" 
      style={{ 
        background: isHome ? 'transparent' : '#ffffff',
        backgroundColor: isHome ? 'transparent' : '#ffffff'
      }}
    >
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
              style={{ maxHeight: '52px', width: 'auto', cursor: 'pointer' }} 
            />
          </a>
        </div>
  
        {/* NIVEL 2: Barra Azul Recta con los Botones */}
        <div className="capsule-nav-container">
          <Nav className="d-flex flex-row flex-nowrap align-items-center justify-content-between m-0 p-0 w-100">
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
            
            {/* ÍTEM PRODUCTOS CON CONTROL CONTROLADO POR REACT */}
            <div 
              ref={dropdownRef}
              className="nav-item-dropdown position-relative"
              onMouseEnter={() => {
                // Solo abre por hover si la pantalla es de escritorio (>= 992px)
                if (window.innerWidth >= 992) {
                  setShowDropdown(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 992) {
                  setShowDropdown(false);
                }
              }}
            >
              <Nav.Link 
                href="#productos" 
                onClick={(e) => handleNavClick(e, 'productos')}
                className={`capsule-nav-link ${activeSection === 'productos' ? 'active' : ''}`}
              >
                PRODUCTOS
              </Nav.Link>
  
              {/* Solo se monta en el DOM si showDropdown es true */}
              {showDropdown && (
                <div 
                  className="products-dropdown-menu shadow-lg d-none d-lg-block"
                  style={{ display: 'block' }}
                >
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
              )}
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