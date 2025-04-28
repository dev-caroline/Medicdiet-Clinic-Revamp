import React from 'react';

const CallToAction = () => {
  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <img src='images/Dietitian-and-a-Nutritionist-960x450.jpg' alt="Call to Action" />

      <div className="container">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>Ready to Take Control of Your Health?</h3>
            <p>Join our personalized nutrition programs to achieve your health goals. Start your journey today with expert guidance and support tailored to your needs.</p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="/form">Get Started Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;