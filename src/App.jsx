import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/HeroSlider';
import { FeaturesBar } from './components/FeaturesBar';
import { EngineeringSection } from './components/EngineeringSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { Footer } from './components/Footer';
import { AboutSection } from './components/AboutSection';

function App() {
  const [showContact, setShowContact] = useState(false);

  const handleOpenContact = () => setShowContact(true);
  const handleCloseContact = () => setShowContact(false);

  return (
    <div>
      <Navbar onOpenContact={() => setShowContact(true)} />
      <main>
        {/* SECCIÓN INICIO: Contiene Hero + FeaturesBar + Presentación de Ingeniería */}
        <section id="inicio">
          <Hero />
          <FeaturesBar />
          <EngineeringSection />
        </section>

        {/* SECCIÓN NOSOTROS: Historia, Alcance, Sectores y Compromiso */}
        <AboutSection />

        {/* SECCIÓN PRODUCTOS */}
        <section id="productos">
          <div 
            style={{ minHeight: '300px' }} 
            className="d-flex flex-column align-items-center justify-content-center bg-white text-center p-4 my-5"
          >
            <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--rojo-principal)', marginBottom: '12px' }}></div>
            <h4 className="text-uppercase fw-bold mb-1" style={{ color: 'var(--azul-ultramar)' }}>
              Próximamente: Grilla de Productos y Catálogo
            </h4>
            <small className="text-muted">Explorá nuestra línea de alemites, tapones roscados y mecanizados a medida.</small>
          </div>
        </section>

        
      </main>

      {/* SECCIÓN CONTACTO */}
      {/* El modal se muestra solo cuando showContact es true */}
      <ContactSection 
        show={showContact} 
        handleClose={() => setShowContact(false)} 
      />

      <FloatingWhatsapp />
      <Footer />
    </div>
  );
}

export default App;