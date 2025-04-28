import React from 'react';

const Team = () => {
  return (
    <section id="team" className="team section">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="text-dark">Team</h2>
        <p>Driven by innovation, we aim to create solutions that inspire and empower our community.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 ms-lg-5 mx-1" data-aos="fade-up" data-aos-delay="100" style={{ backgroundColor: 'black' }}>
            <div className="team-member d-flex align-items-start">
              <div className="pic">
                <img src= 'images/WhatsApp Image 2025-01-02 at 09.17.44_4a3a9a8a.jpg' className="img-fluid" alt="Team Member" />
              </div>
              <div className="member-info">
                <h4 className="text-dark">Oluwasegun Glory Abiodun</h4>
                <span>Chief Executive Officer</span>
                <p>We are committed to creating a team of innovators and leaders dedicated to excellence. Join us in shaping the future!</p>
                <div className="social">
                  <a href="https://www.tiktok.com/@medicclinicdiet?_t=8siRuAFG5MI&_r=1" target="_blank" rel="noreferrer" aria-label="Tiktok">
                    <i className="bi bi-tiktok"></i>
                  </a>
                  <a href="https://www.facebook.com/share/cT3bhG2PNanMs5YH/?mibextid=LQQJ4d" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/medicdietclinic/profilecard/?igsh=MWZmaDJiZXl6bXFhaA==" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;