import React, { useState } from 'react';

const FAQ = () => {
  const [activeItem, setActiveItem] = useState(0);

  const faqItems = [
    {
      question: "What services do you offer?",
      answer: "We provide free personalized nutrition guidance, meal planning advice, and support for various health goals, including weight management, improved eating habits, and overall wellness."
    },
    {
      question: "How much do your consultations cost?",
      answer: "All our consultations and services are completely free. We believe everyone should have access to quality nutritional guidance without financial barriers."
    },
    {
      question: "How do I book a consultation?",
      answer: "You can book a consultation through our Contact Us page. Simply reach out to us through any of our social media platform or email, and we'll get back to you to confirm your appointment."
    },
    {
      question: "What should I expect during a consultation?",
      answer: "During your consultation, we'll discuss your current eating habits, health goals, and challenges. We'll then provide practical, easy-to-follow advice to help you achieve your goals."
    },
    {
      question: "Do you offer online consultations?",
      answer: "Yes! We offer free virtual consultations, so you can receive guidance from the comfort of your home. Simply let us know your preference when booking."
    },
    {
      question: "Can I ask for help with weight gain or loss?",
      answer: "Absolutely! Whether your goal is to gain or lose weight, we'll create a plan that prioritizes balanced nutrition and supports your journey in a healthy and sustainable way."
    }
  ];

  const toggleFaq = (index) => {
    setActiveItem(activeItem === index ? -1 : index);
  };

  return (
    <section id="faq-2" className="faq-2 section light-background" style={{ backgroundColor: 'rgb(252, 226, 83)' }}>
      <div className="container section-title" data-aos="fade-up">
        <h2 className="text-dark">Frequently Asked Questions</h2>
        <p>We're here to answer your questions about nutrition, health, and how our free consultations work. Below are some of the most common questions we receive. If you don't see your question here, feel free to contact us!</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-container">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className={`faq-item ${activeItem === index ? 'faq-active' : ''}`} 
                  data-aos="fade-up" 
                  data-aos-delay={200 + index * 100}
                >
                  <i className="faq-icon bi bi-question-circle"></i>
                  <h3>{item.question}</h3>
                  <div className="faq-content">
                    <p>{item.answer}</p>
                  </div>
                  <i 
                    className="faq-toggle bi bi-chevron-right"
                    onClick={() => toggleFaq(index)}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;