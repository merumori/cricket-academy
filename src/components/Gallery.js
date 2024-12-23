import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Gallery.css'; // Add custom styles

// Import images statically
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import img5 from '../img/img5.png';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="container py-5">
      {/* Title Section */}
      <div className="text-center mb-4">
        <h2 className="tital  text-white d-inline-block px-4 py-2 rounded">
          Gallery
        </h2>
      </div>
      
      {/* Gallery Items */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {images.map((image, index) => (
          <div key={index} className="col">
            <div className="card gallery-card h-100">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="card-img-top img-fluid gallery-image"
              />
              <div className="card-body">
                <h5 className="card-title">Gallery Item {index + 1}</h5>
                <p className="card-text">This is a short description for the gallery item.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
