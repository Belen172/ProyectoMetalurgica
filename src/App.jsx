import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/HeroSlider';
import { FeaturesBar } from './components/FeaturesBar';
import { EngineeringSection } from './components/EngineeringSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ProductFamilyDetail } from './components/ProductFamilyDetail';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { Footer } from './components/Footer';

// Componente para la página principal
const HomePage = () => (
  <main>
    {/* SECCIÓN INICIO */}
    <section id="inicio">
      <Hero />
      <FeaturesBar />
      <EngineeringSection />
    </section>

    {/* SECCIÓN SOBRE NOSOTROS */}
    <AboutSection />

    {/* SECCIÓN PRODUCTOS */}
    <ProductsSection />
  </main>
);

function App() {
  const [showContact, setShowContact] = useState(false);

  const handleOpenContact = () => setShowContact(true);
  const handleCloseContact = () => setShowContact(false);

  return (
    <div>
      <Navbar onOpenContact={handleOpenContact} />
      
      {/* Definición de Rutas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos/:familyId" element={<ProductFamilyDetail />} />
        {/* Redirección por si alguien entra a /productos directo */}
        <Route path="/productos" element={<ProductFamilyDetail />} />
      </Routes>

      {/* MODAL DE CONTACTO */}
      <ContactSection 
        show={showContact} 
        handleClose={handleCloseContact} 
      />

      <FloatingWhatsapp />
      <Footer />
    </div>
  );
}

export default App;