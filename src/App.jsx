import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import { FeatureModal, ExpansionContext } from './components/FeatureModal';

const AppContent = ({ activeFeature, setActiveFeature }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="antialiased text-white bg-black">
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {!isLoginPage && <Footer />}
      <AnimatePresence>
        {activeFeature && <FeatureModal />}
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <ExpansionContext.Provider value={{ activeFeature, setActiveFeature }}>
      <Router>
        <AppContent activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
      </Router>
    </ExpansionContext.Provider>
  );
};

export default App;
