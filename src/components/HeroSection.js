// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-labels">
                    <span className="new-feature">New feature</span>
                    <span className="dashboard-link">Check out the team dashboard &rarr;</span>
                </div>
                <h1 className="hero-title">Beautiful analytics to grow smarter</h1>
                <p className="hero-description">
                    Powerful, self-serve product and growth analytics to help you convert,
                    engage, and retain more users. Trusted by over 4,000 startups.
                </p>
                <div className="hero-buttons">
                    <button className="hero-button demo-button">Demo</button>
                    <button className="hero-button signup-button">Sign up</button>
                </div>
                <div className="hero-image">
                    <img src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Glkufgm801VznSWvvfF~zu3jRhkXFuliyLYN5Naf7Nu1uXD6AkDF4gwhGQecFQkj8RjW-WSqCP4gtrGKfUg4wIuVhRboyu91Z-REZfZSxGdjUUJizXQdUx8hVbivSB-RGTn7OfiW443Bumy2~icBDaELxqZONH7XZd7nnJoQTWiqx9jPx3tSSjfxDQPsKCA2j0vXxTCkbiXk7gCE8rhF-Z52PU2Cu4f22B0ByAa7K2TGB5Qh~gqVp-VWtnLqPianIJeDgckTX5L04SdvvMc8sjiS1NzhVfxRAgTilnsxhSChCH4uvqNgxS9-C1NQWXdslYq~wHbHhVKACTwJqjZkVg__" alt="Analytics preview" />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
