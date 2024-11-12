// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DashboardPreview from './components/DashboardPreview';
import './App.css';
import SocialProofSection from './components/SocialProofSection';
import FeatureSection from './components/FeatureSection';
import Testimonial from './components/Testimonial';
import FeaturePage from './components/FeaturePage';
import FeatureItem from './components/FeatureItem';
import FAQ from './components/FAQ';
import BlogSection from './components/BlogSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { FaIconName } from 'react-icons/fa';


function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <DashboardPreview />
            <SocialProofSection/>
            <FeatureSection/>
            <Testimonial/>
            <FeaturePage/>
            <FeatureItem/>
            <FAQ/>
            <BlogSection/>
            <CTASection/>
            <Footer/>
            
        </div>
    );
}

export default App;
