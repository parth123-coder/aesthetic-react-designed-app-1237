import React from 'react';
import { Hero } from '../components/Hero';
import { FeatureStack, GridFeatures } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { MultiToolSection } from '../components/MultiToolSection';
import { FAQ } from '../components/FAQ';

const LandingPage = () => {
    return (
        <>
            <Hero />
            <FeatureStack />
            <GridFeatures />
            <Testimonials />
            <MultiToolSection />
            <FAQ />
        </>
    );
};

export default LandingPage;
