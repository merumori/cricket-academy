import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Testimonials.css'; // Add custom styles

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'Amazing coaching and great facilities!',
    },
    {
      name: 'Jane Smith',
      feedback: 'The best cricket academy for learning professional skills.',
    },
    {
      name: 'Rahul Singh',
      feedback: 'Highly recommended for all cricket enthusiasts.',
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="title">Testimonials</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col">
            <div className="card h-100 testimonial-card shadow-sm">
              <div className="card-body">
                <p className="card-text feedback">"{testimonial.feedback}"</p>
                <h5 className="card-title name">- {testimonial.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
