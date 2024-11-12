import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-heading">Start your free trial</h2>
      <p className="cta-subheading">Join over 4,000+ startups already growing with Untitled.</p>
      <div className="cta-buttons">
        <button className="cta-button learn-more">Learn more</button>
        <button className="cta-button get-started">Get started</button>
      </div>
    </section>
  );
};

export default CTASection;
