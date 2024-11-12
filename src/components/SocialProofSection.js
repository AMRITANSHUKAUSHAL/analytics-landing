import React from "react";
import "./SocialProofSection.css";

function SocialProofSection() {
  return (
    <div className="social-proof">
      <p className="social-proof-text">Join 4,000+ companies already growing</p>
      <div className="social-proof-logos">
        {/* Replace src paths with your actual logo paths */}
        <img src="image/Fictional company Logo.jpg" alt="Boltshift" />
        <img src="image/Fictional company Logo.png" alt="Lightbox" />
        <img src="image/Fictional company Logo (1).png" alt="FeatherDev" />
        <img src="image/Fictional company Logo (2).png" alt="Spherule" />
        <img src="image/Fictional company Logo (3).png" alt="GlobalBank" />
        <img src="image/Fictional company Logo (4).png" alt="Nietzsche" />
      </div>
    </div>
  );
}

export default SocialProofSection;
