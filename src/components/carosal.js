import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/css/carousel.css';
import { Link } from 'react-router-dom';

import img from "../img/carosal.png";
import img1 from '../img/carosal1.png';
import img2 from '../img/carosal2.png';
import img3 from '../img/carosal3.png';

const CarouselComponent = () => {
  return (
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner ">
        {/* Slide 1 */}
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={img} className="d-block w-100" style={{ height: '500px' }} alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Providing Professional</h3>
            <h5>Training For Cricket</h5>
            <button><Link to="/CricketEnquiry"  style={{
          textDecoration: 'none',
          color: 'inherit',
        }}>Enquire Now</Link> </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item" data-bs-interval="5000">
          <img src={img1} className="d-block w-100" style={{ height: '500px' }} alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Offering Exceptional</h3>
            <h5>Cricket Coaching Services</h5>
            <button><Link to="/services"  style={{
                          textDecoration: 'none',
                          color: 'inherit',
                          }}>
                            Services
                        </Link> 
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item" data-bs-interval="5000">
          <img src={img2} className="d-block w-100" style={{ height: '500px' }} alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
          <h3>Explore Our</h3>
          <h5>Cricket Moments Gallery</h5>
          <button><Link to="/gallery"  style={{
                          textDecoration: 'none',
                          color: 'inherit',
                          }}>
                            Gallery
                        </Link> 
            </button>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item" data-bs-interval="5000">
          <img src={img3} className="d-block w-100" style={{ height: '500px' }} alt="Slide 4" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Watch Our</h3>
            <h5>Cricket Training Videos</h5>
            
            <button><Link to="/videos"  style={{
                          textDecoration: 'none',
                          color: 'inherit',
                          }}>
                           Watch Now
                        </Link> 
            </button>

          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
