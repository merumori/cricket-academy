import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutimg from "../img/carosal2.png";
import "../components/css/About.css";

const AboutUs = () => {
  return (
    <div>
     <div className="d-flex justify-content-center">
        <h2 className="title animated-title">About Us</h2>
      </div>
      {/* Main Content Section */}
      <div className="container main my-5">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="text-card">
              <p>
                Our academy, Venus Cricket Academy, situated at Malad West,
                Mumbai, Maharashtra, was started with an aim to impart cricket
                training which gives results to all cricketers, kids, young, and
                aged who are willing to learn cricket. We offer a wide range of
                cricket training programs for all ages and experience levels.
              </p>
              <p>
                Learn the different skills of cricket from our experienced
                instructors. We make sure to provide you and your kids a
                friendly and safe environment to learn cricket and focus on the
                basic skills. Our coaching method includes regular practice
                matches, net practicing, and physical training for the overall
                development of the trainee.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-6">
            <div className="about-img-container">
              <img
                src={aboutimg}
                alt="About Cricket Academy"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
