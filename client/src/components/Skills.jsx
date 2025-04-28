import React from 'react';
// import nutritionImg from '../assets/img/download.jpg';

const Skills = () => {
  const skills = [
    { name: "Nutrition Consultation", value: 95 },
    { name: "Health Management", value: 90 },
    { name: "Diet Planning", value: 80 },
    { name: "Weight Management", value: 85 }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <img src='images/download.jpg' className="img-fluid" alt="Nutrition and Dietetics" width="300" />
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3 className="text-dark">Our Expertise in Nutrition and Wellness</h3>
            <p className="fst-italic">
              We specialize in providing evidence-based nutrition advice to help individuals manage health conditions, improve their lifestyle, and achieve long-term wellness. Our expertise extends across various areas of dietetics, including personalized nutrition plans and counseling.
            </p>

            <div className="skills-content skills-animation">
              {skills.map((skill, index) => (
                <div className="progress" key={index}>
                  <span className="skill"><span>{skill.name}</span> <i className="val">{skill.value}%</i></span>
                  <div className="progress-bar-wrap">
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{ width: `${skill.value}%` }}
                      aria-valuenow={skill.value} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;