import React from 'react';

const WhyUs = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const faqItems = [
    {
      number: "01",
      question: "How can personalized nutrition consultations benefit me?",
      answer: "Our consultations are designed to address your unique health goals, from managing specific conditions to improving overall well-being. We provide tailored advice that fits your lifestyle and preferences."
    },
    {
      number: "02",
      question: "What makes your approach different from others?",
      answer: "We blend the latest nutritional science with real-world advice, creating actionable plans that are easy to follow. Our focus is on long-term wellness, not quick fixes."
    },
    {
      number: "03",
      question: "Do you provide support for maintaining a healthy lifestyle?",
      answer: "Yes! We offer ongoing support to ensure you stay on track with your goals, including follow-up consultations and advice for overcoming any challenges you may face along the way."
    }
  ];

  const toggleFaq = (index) => {
    setActiveItem(activeItem === index ? -1 : index);
  };

  return (
    <section id="why-us" className="py-5" >
      <div className="container p-5" style={{ backgroundColor: '#FDC61C' }}>
        <div className="row align-items-center">
          
          {/* Text and FAQ Section */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="mb-4">
              <h3 className="text-dark mb-3" style={{ fontSize: '1.8rem' }}>
                <span>Why Choose Us? </span>
                <strong>Expert Guidance for Your Health and Wellness</strong>
              </h3>
              <p className="text-dark" style={{ fontSize: '1rem' }}>
                We are dedicated to providing personalized nutrition and dietetic consultations, ensuring you get the best advice tailored to your specific needs. Our approach is holistic, combining scientific evidence with practical solutions for a healthier lifestyle.
              </p>
            </div>

            {/* FAQ Section */}
            <div>
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className={`p-3 mb-3 bg-white rounded shadow-sm ${activeItem === index ? 'faq-active' : ''}`}
                >
                  <div 
                    className="d-flex justify-content-between align-items-center" 
                    onClick={() => toggleFaq(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h5 className="mb-0" style={{ fontSize: '1rem' }}>
                      <span className="me-2">{item.number}</span> {item.question}
                    </h5>
                    <i 
                      className={`bi ${activeItem === index ? 'bi-chevron-down' : 'bi-chevron-right'}`} 
                      style={{ fontSize: '1.2rem', color: '#000' }}
                    ></i>
                  </div>

                  {/* Show answer only if active */}
                  {activeItem === index && (
                    <div className="mt-2">
                      <p className="mb-0 text-dark" style={{ fontSize: '0.95rem' }}>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
            <img 
              src="/images/rb_43092.png" 
              alt="Why Choose Us" 
              className="img-fluid" 
              style={{ maxWidth: '400px', width: '100%' }} 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;

