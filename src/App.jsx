import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage';
import { FeatureModal, ExpansionContext } from './components/FeatureModal';

const App = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <ExpansionContext.Provider value={{ activeFeature, setActiveFeature }}>
      <Router>
        <div className="antialiased text-white bg-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
          </Routes>
          <Footer />
          <AnimatePresence>
            {activeFeature && <FeatureModal />}
          </AnimatePresence>
        </div>
      </Router>
    </ExpansionContext.Provider>
  );
};

export default App;
