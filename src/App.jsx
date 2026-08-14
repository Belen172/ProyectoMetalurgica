import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/HeroSlider';
import { FeaturesBar } from './components/FeaturesBar';
import { EngineeringSection } from './components/EngineeringSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        {/* SECCIÓN INICIO: Contiene Hero + FeaturesBar + Presentación de Ingeniería */}
        <section id="inicio">
          <Hero />
          <FeaturesBar />
          <EngineeringSection />
        </section>

        {/* SECCIÓN NOSOTROS: Historia, Equipo, Planta e Infraestructura */}
        <section id="nosotros">
          <div 
            style={{ minHeight: '220px' }} 
            className="d-flex flex-column align-items-center justify-content-center bg-light border-top border-bottom text-center p-4"
          >
            <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--rojo-principal)', marginBottom: '12px' }}></div>
            <h5 className="text-uppercase fw-bold mb-1" style={{ color: 'var(--azul-ultramar)' }}>
              Próximamente: Historia, Infraestructura y Equipo
            </h5>
            <small className="text-muted">Conocé más sobre nuestra trayectoria industrial desde 1960 en Rafaela.</small>
          </div>
        </section>

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

        {/* SECCIÓN CONTACTO */}
        <section id="contacto">
          <ContactSection />
        </section>
      </main>

      <FloatingWhatsapp />
      <Footer />
    </div>
  );
}

export default App;