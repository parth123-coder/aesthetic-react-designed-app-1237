import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { FeatureStack, GridFeatures } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { MultiToolSection } from './components/MultiToolSection';
import { FAQ } from './components/FAQ';
import { FeatureModal, ExpansionContext } from './components/FeatureModal';

const App = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <ExpansionContext.Provider value={{ activeFeature, setActiveFeature }}>
      <div className="antialiased text-white bg-black">
        <Navbar />
        <Hero />
        <FeatureStack />
        <GridFeatures />
        <Testimonials />
        <MultiToolSection />
        <FAQ />
        <Footer />
        <AnimatePresence>
          {activeFeature && <FeatureModal />}
        </AnimatePresence>
      </div>
    </ExpansionContext.Provider>
  );
};

export default App;
