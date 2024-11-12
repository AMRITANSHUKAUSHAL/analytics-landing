import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq">
      <header className="faq-header">
        <h1>Frequently asked questions</h1>
        <p>Everything you need to know about the product and billing.</p>
      </header>
      <div className="faq-list">
        <FAQItem
          question="Is there a free trial available?"
          answer="Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
        <FAQItem
          question="Can I change my plan later?"
          answer="Yes, you can upgrade or downgrade your plan at any time through the settings in your account."
        />
        <FAQItem
          question="What is your cancellation policy?"
          answer="You can cancel at any time. If you cancel, you'll continue to have access to the service until the end of your billing period."
        />
        <FAQItem
          question="Can other info be added to an invoice?"
          answer="Yes, you can add custom fields to invoices, such as your company’s VAT number or address."
        />
        <FAQItem
          question="How does billing work?"
          answer="We bill you based on the plan you select. You can pay monthly or yearly, and cancel anytime."
        />
        <FAQItem
          question="How do I change my account email?"
          answer="You can change the email associated with your account in the account settings."
        />
      </div>
      <footer className="faq-footer">
        <div className="faq-contact">
          <img src="image/Avatar group.png" alt="Support Team" className="contact-image" />
          <div>
            <h3>Still have questions?</h3>
            <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
          </div>
        </div>
        <button className="contact-button">Get in touch</button>
      </footer>
    </div>
  );
};

export default FAQ;
