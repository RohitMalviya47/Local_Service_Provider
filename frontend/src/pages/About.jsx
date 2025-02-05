import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import aboutImage from '../assets/about.jpg'; // Tum apni image ka path dena
 
const About = () => {
  return (
    <div>
      {/* About Section */}
      <Headers></Headers>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Image (smaller image) */}
          <div className="col-md-4">
            <img
              src={aboutImage} // Image path
              alt="About Us"
              className="img-fluid rounded-circle shadow-lg"
              style={{ height: '250px', width: '250px', objectFit: 'cover' }}
            />
          </div>

          {/* Right Content */}
          <div className="col-md-8">
            <h2 className="display-4 font-weight-bold">About Our Project</h2>
            <p className="lead">
              Welcome to Local Service Providers! We are a platform dedicated to
              providing local services like plumbing, electrical, cleaning, and more.
              Our goal is to make it easy for you to connect with skilled professionals
              in your area, ensuring your needs are met quickly and efficiently.
            </p>
            <p>
              Our team carefully selects and vets each service provider, ensuring that
              you receive only the best service possible. Whether you need an electrician
              or a plumber, you can rely on us for a seamless and reliable experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
