import React from 'react';
import p1 from '../../images/p1.jpeg'
import p2 from '../../images/p2.jpeg'
import p3 from '../../images/p3.jpeg'
import p4 from '../../images/p4.jpeg'
import p5 from '../../images/p5.png'
import p7 from '../../images/p7.webp'
import p8 from '../../images/p8.png'
import p9 from '../../images/p9.png'
import './Projects.css'

const Projects = () => {
  // Sample project images
  const projectImages = [
    p1,p2,p3,p4,p5,p7,p8,p9
    // Add more project images as needed
  ];

  return (
    <div>
      <div className="projects-page">
        <h2 className="page-title">Imagination is the beginning of creation.
You imagine what you desire; we create what you imagine.</h2>
        <h3 className="project-description">Welcome to a space where our past work meets the exciting possibilities of the future.</h3>
        <div className="project-gallery">
          {projectImages.map((image, index) => (
            <div className="project-card" key={index}>
              <img src={image} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
