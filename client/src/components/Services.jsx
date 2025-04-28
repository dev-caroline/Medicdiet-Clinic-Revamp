import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="text-dark">Our Services</h2>
        <p>Expert nutrition counseling and personalized diet plans to help you live a healthier, more balanced life.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative" style={{ backgroundColor: '#FDC61C' }}>
              <div className="icon"><i className="bi bi-heart icon"></i></div>
              <h4><a href="" className="stretched-link">Personalized Nutrition Plans</a></h4>
              <p>Customized nutrition plans tailored to your specific health goals, preferences, and lifestyle.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative" style={{ backgroundColor: '#FDC61C' }}>
              <div className="icon"><i className="bi bi-people icon"></i></div>
              <h4><a href="" className="stretched-link">One-on-One Counseling</a></h4>
              <p>Guidance and support through one-on-one sessions to ensure your nutrition needs are met.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative" style={{ backgroundColor: '#FDC61C' }}>
              <div className="icon"><i className="bi bi-clipboard-check icon"></i></div>
              <h4><a href="" className="stretched-link">Health and Wellness Coaching</a></h4>
              <p>Comprehensive coaching to help you achieve long-term health goals, including weight management and fitness.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative" style={{ backgroundColor: '#FDC61C' }}>
              <div className="icon"><i className="bi bi-basket icon"></i></div>
              <h4><a href="" className="stretched-link">Nutritional Guidance for Specific Conditions</a></h4>
              <p>Specialized advice for managing health conditions like diabetes, hypertension, and digestive disorders.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;