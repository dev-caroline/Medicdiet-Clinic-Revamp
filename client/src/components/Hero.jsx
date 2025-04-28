import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background" style={{ backgroundColor: "#FDC61C", height: "90vh" }}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
            <h1>Better Nutrition Solutions for Your Health</h1>
            <p>We are a team of experienced dietitians offering personalized nutrition plans to help you achieve your wellness goals.</p>
            <div className="d-flex">
              <Link to="/form" className="btn-get-started bg-dark">Get Started</Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="/images/rb_43092.png" alt="Healthy Nutrition" className="img-fluid animated ms-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;