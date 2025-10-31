import React from 'react';
import { Helmet } from 'react-helmet-async';
import Form from '../components/Form';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FormPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact & Consultation Form | Medicdiet Clinic</title>
        <link rel="canonical" href="https://www.medicdietclinic.com/form" />
        <meta name="description" content="Fill out the form to book your nutrition and diet consultation with Medicdiet Clinic." />
        <meta property="og:title" content="Contact & Consultation Form | Medicdiet Clinic" />
        <meta property="og:description" content="Fill out the form to book your nutrition and diet consultation with Medicdiet Clinic." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.medicdietclinic.com/form" />
        <meta property="og:image" content="https://www.medicdietclinic.com/images/Logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact & Consultation Form | Medicdiet Clinic" />
        <meta name="twitter:description" content="Fill out the form to book your nutrition and diet consultation with Medicdiet Clinic." />
        <meta name="twitter:image" content="https://www.medicdietclinic.com/images/Logo.jpg" />
      </Helmet>
      <Header />
      <main>
        <section className="form-page-hero" style={{ 
          backgroundColor: "#FDC61C", 
          paddingTop: "120px", 
          paddingBottom: "60px",
          minHeight: "100vh"
        }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text-center mb-5" data-aos="fade-up">
                  <h1 className="fw-bold" style={{ color: "#000", fontSize: "2.5rem" }}>
                    Start Your Nutrition Journey
                  </h1>
                  <p className="lead" style={{ color: "#333", fontSize: "1.1rem" }}>
                    Fill out the consultation form below and let our expert dietitians help you achieve your health goals.
                  </p>
                </div>
                <div className="bg-white rounded-4 shadow-lg p-4 p-md-5" data-aos="fade-up" data-aos-delay="100">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FormPage;
