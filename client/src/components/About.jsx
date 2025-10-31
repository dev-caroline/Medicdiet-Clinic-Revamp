import React from 'react'

const About = () => {
  return (
    <div>
        <section id="about" className="about section" style={{ backgroundColor: 'white' }}>
      <div className="container section-title" data-aos="fade-up">
        <h2 className="text-dark">About Us</h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>
              Welcome to Medic Diet, a platform where health meets personalized care. We are passionate about guiding you toward achieving a healthier, more fulfilling life.
              
              Our mission is to empower individuals and families with practical nutrition advice and evidence-based strategies for lasting well-being. Whether you're managing a health condition, striving to improve your relationship with food, or simply seeking to optimize your diet, Medic Diet is here to walk the journey with you every step of the way.
            </p>
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>Personalized nutrition plans tailored to your unique needs.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Expert guidance backed by evidence-based practices.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Support for managing specific health goals and overall wellness.</span></li>
            </ul>
          </div>
          
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>
              At Medic Diet, we believe in starting small to create big impacts. As a new and growing organization, we are committed to building a community rooted in health, compassion, and empowerment. Every consultation and interaction is designed to bring you closer to a balanced, thriving lifestyle.
            </p>
            <a href="#about" className="read-more"><span>Learn More About Us</span><i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About