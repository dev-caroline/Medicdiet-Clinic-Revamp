import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    }
  }, []);

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="text-dark">Mission statement</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src='images/WhatsApp Image 2025-01-02 at 09.17.44_4a3a9a8a.jpg' className="testimonial-img" alt="Testimonial" />
                <h3 className="text-dark">Oluwasegun Glory Abiodun</h3>
                <h4>Ceo &amp; Founder</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>MedicDietClinic is committed to delivering personalized, evidence-based nutrition therapy, provided by a multidisciplinary team of licensed and registered dieticians and nutritionists. Our comprehensive nutrition services encompass medical nutrition therapy, nutrition counseling, and education, with a focus on preventing and managing chronic disease, optimizing nutritional status and promoting healthy eating behaviors, Consequently fostering a positive relationship with food and supporting overall health and well-being of the masses.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;