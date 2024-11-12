import React from "react";
import "./FeatureSection.css";
import { FaInbox, FaBolt, FaChartBar, FaComments, FaPuzzlePiece, FaUsers } from "react-icons/fa";

function FeatureSection() {
  const features = [
    {
      icon: <FaInbox />,
      title: "Share team inboxes",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: <FaBolt />,
      title: "Deliver instant answers",
      description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: <FaChartBar />,
      title: "Manage your team with reports",
      description: "Measure what matters with easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
    },
    {
      icon: <FaComments />,
      title: "Connect with customers",
      description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are routed to email without confusion.",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Connect the tools you already use",
      description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: <FaUsers />,
      title: "Our people make the difference",
      description: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <div className="feature-section">
      <div className="feature-header">
        <h3 className="feature-subtitle">Features</h3>
        <h2 className="feature-title">Analytics that feels like it’s from the future</h2>
        <p className="feature-description">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h4 className="feature-item-title">{feature.title}</h4>
            <p className="feature-item-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
