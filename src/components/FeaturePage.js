import React from 'react';
import './FeaturePage.css';
import FeatureItem from './FeatureItem';

const FeaturePage = () => {
  return (
    <div className="feature-page">
      <header className="feature-header">
        <h1>Cutting-edge features for advanced analytics</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more users. Trusted by over 4,000 startups.
        </p>
      </header>
      <div className="feature-content">
        <div className="feature-images">
          <img src="https://s3-alpha-sig.figma.com/img/91ca/8938/7f26a92b60f8e7bf4bfe8c9f528cf3c1?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kztZPmLHnm0jlwyrWz~Irzycj7C4onyQ6m0h9rrEwN7uo08M7TSJs6pOIhnKW~My3OFLx5UowYld~Sz96-SZDaOfAs5oDIeu-L4nB~q0ZHndhXGviy03L3tegzQVlA89d2unt5v4qyjoQUbGpqZqESQe9dow45X6J4YWDFG9Rb7yCY9qYNeQTKRCTENIrApIWtQgp7MP-np63eyxGxSNUr9NaCeNAqM2T~3EVSk1t4as0ntuD0OhBHZGGxgHZI0d4qL1Ilb0k7Fo~bAcxVt1nkagzdKKMDo-rlZIJMBW9124OOOZdJ8kCdVaHetLqlISnWbDUBs5nstb6RH-TPkx~g__" alt="Mobile Mockup" className="mockup mobile" />
          <img src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Glkufgm801VznSWvvfF~zu3jRhkXFuliyLYN5Naf7Nu1uXD6AkDF4gwhGQecFQkj8RjW-WSqCP4gtrGKfUg4wIuVhRboyu91Z-REZfZSxGdjUUJizXQdUx8hVbivSB-RGTn7OfiW443Bumy2~icBDaELxqZONH7XZd7nnJoQTWiqx9jPx3tSSjfxDQPsKCA2j0vXxTCkbiXk7gCE8rhF-Z52PU2Cu4f22B0ByAa7K2TGB5Qh~gqVp-VWtnLqPianIJeDgckTX5L04SdvvMc8sjiS1NzhVfxRAgTilnsxhSChCH4uvqNgxS9-C1NQWXdslYq~wHbHhVKACTwJqjZkVg__" alt="Desktop Mockup" className="mockup desktop" />
        </div>
        <div className="feature-items">
          <FeatureItem
            title="Share team inboxes"
            description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
          />
          <FeatureItem
            title="Deliver instant answers"
            description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          />
          <FeatureItem
            title="Manage your team with reports"
            description="Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks."
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
