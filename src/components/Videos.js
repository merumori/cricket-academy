import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Videos.css'; // Add custom styles

const Videos = () => {
  const videoLinks = [
    { type: 'online', source: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }, // Example YouTube video
    { type: 'online', source: 'https://www.youtube.com/embed/9bZkp7q19f0' }, // Another YouTube video
    { type: 'online', source: 'https://player.vimeo.com/video/76979871' }, // Example Vimeo video
    { type: 'online', source: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' }, // YouTube video
    { type: 'online', source: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }, // Example YouTube video
  ];

  return (
    <div className="container py-5">
      {/* Title with Bootstrap text-center class */}
      <div className="text-center mb-4">
        <h2 className="tital text-white d-inline-block px-4 py-2 rounded">
          Videos
        </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {videoLinks.map((video, index) => (
          <div key={index} className="col">
            <div className="card video-card h-100">
              {video.type === 'online' ? (
                <iframe
                  src={video.source}
                  title={`Video ${index + 1}`}
                  allowFullScreen
                  frameBorder="0"
                  className="card-img-top video-frame"
                ></iframe>
              ) : null}
              <div className="card-body">
                <h5 className="card-title text-center">Video {index + 1}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
