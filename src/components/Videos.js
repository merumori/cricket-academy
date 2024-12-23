import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Videos.css'; // Add custom styles
import video1 from '../components/video/video1.mp4'; // Import the static video file
import video2 from '../components/video/video2.mp4';
import video3 from '../components/video/video3.mp4'; // Import the static video file

const Videos = () => {
  const videoLinks = [
    { type: 'local', source: video1 }, // Local video
    { type: 'local', source: video2 }, // YouTube video
    { type: 'local', source: video3 }, // Another YouTube video
  ];

  return (
    <div className="container py-5">
      {/* Title with Bootstrap text-center class */}
      <div className="text-center mb-4">
        <h2 className="tital  text-white d-inline-block px-4 py-2 rounded">
          Videos
        </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {videoLinks.map((video, index) => (
          <div key={index} className="col">
            <div className="card video-card h-100">
              {video.type === 'local' ? (
                <video
                  controls
                  className="card-img-top video-frame"
                  src={video.source}
                  title={`Video ${index + 1}`}
                ></video>
              ) : (
                <iframe
                  src={video.source}
                  title={`Video ${index + 1}`}
                  allowFullScreen
                  frameBorder="0"
                  className="card-img-top video-frame"
                ></iframe>
              )}
              <div className="card-body">
                <h5 className="card-title text-center">video {index + 1}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
