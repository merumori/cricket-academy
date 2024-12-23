import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/css/contact.css';

const Contact = () => {
  return (
    <div className="container my-5">
      {/* Title Section */}
      <div className="text-center mb-4">
        <h2 className="title">Contact Us</h2>
      </div>

      <div className="row">
        {/* Information Section */}
        <div className="col-md-6">
          <div className="info-section p-4 border">
            <h4>Our Information</h4>
            <p>
              <strong>Office Address</strong> <br />
              Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside
              Goregaon Sports Complex, Malad West, Mumbai, Maharashtra 400064
            </p>
            <p>
              <strong>Call Us</strong> <br />
              +91-8888888888
            </p>
            <p>
              <strong>General Enquiry</strong> <br />
              websupport@justdial.com
            </p>
            <p>
              <strong>Our Timing</strong> <br />
              Mon - Sun: 10:00 AM - 07:00 PM
            </p>
          </div>
        </div>

        {/* Enquiry Form Section */}
        <div className="col-md-6">
          <div className="form-section p-4 border">
            <h4>Enquiry Form</h4>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name*"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contact No.*"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Id"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message*"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
