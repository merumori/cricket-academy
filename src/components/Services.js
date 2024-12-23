import React from 'react';
import '../components/css/Services.css';
import Batting from '../img/Batting.png';
import Bowling from '../img/Bowling.png';
import WicketKeeping from '../img/Wicket Keeping.png';
import Fielding from '../img/Fielding.png';

function Services() {
  return (
    <div className="services">
      <h1 className="services-title animate-title">Our Services</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card text-center">
              <img src={Batting} alt="Batting" className="card-image" />
              <div className="card-body">
                <h2>Batting</h2>
                <p>
                  Learn fundamentals of batting like stance, grip, and back lift
                  with our well-experienced team.
                </p>
                <button className="enquire-button">Enquire Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <img src={Bowling} alt="Bowling" className="card-image" />
              <div className="card-body">
                <h2>Bowling</h2>
                <p>
                  Pitch perfect by learning from experts on run-up and bowling
                  techniques to become a great bowler.
                </p>
                <button className="enquire-button">Enquire Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <img src={Fielding} alt="Fielding" className="card-image" />
              <div className="card-body">
                <h2>Fielding</h2>
                <p>
                  Fitness tips and fielding hacks from experts, which will
                  surely help you become a great fielder.
                </p>
                <button className="enquire-button">Enquire Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <img src={WicketKeeping} alt="Wicket Keeping" className="card-image" />
              <div className="card-body">
                <h2>Wicket Keeping</h2>
                <p>
                  Learn and understand wicket-keeping mantras from the
                  experienced teaching team. Contact us today.
                </p>
                <button className="enquire-button">Enquire Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
