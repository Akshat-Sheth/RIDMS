import React from 'react';
import './AboutUs.css';
import profile from '../../images/Profile.png'

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
      </div>
      <div className="about-us-content">
        <p>Visualise dream, sketch the reality, craft contemporary art, and deliver gratifying interiors’ -are the key fundamentals, when U&I delivers interior projects.</p>
        <p>Interiors has been creating and
executing customized, high-end
residential and commercial designs for
over 17 years. The company uses a
combination of influences and cultures
to create timeless pieces that reflect
the luxuriousness of both artistry &
craftsmanship. U&I's portfolio features
modern, elegant, cutting-edge interior
design incorporating innovative colour
schemes, textures & finishes.</p>
        <h2>Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src={profile} alt="Team Member 1" className="team-member-img" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src={profile} alt="Team Member 2" className="team-member-img" />
            <h3>Jane Smith</h3>
            <p>COO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
