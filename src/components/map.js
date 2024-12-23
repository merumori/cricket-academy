import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Define custom marker icon
const customIcon = new L.Icon({
  iconUrl: require("../img/map.png"), // Replace with your custom marker image path
  iconSize: [32, 32], // Adjust size of the icon
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
});

const MapComponent = () => {
  const position = [19.187, 72.847]; // Coordinates for Malad West, Mumbai

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Arjun Cricket Academy</h2>
      <div className="position-relative">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "100%", borderRadius: "8px" }}
        >
          {/* Add Tile Layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Add Marker with Custom Icon */}
          <Marker position={position} icon={customIcon}>
            <Popup>
              <strong>Arjun Cricket Academy</strong> <br />
              Malad West
            </Popup>
          </Marker>
        </MapContainer>
        {/* Get Direction Button */}
        <a
          href="https://maps.app.goo.gl/Eih4zcsRiCq2hKqq5"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-warning position-absolute"
          style={{
            top: "10px",
            right: "10px",
            zIndex: "1000",
          }}
        >
          Get Direction
        </a>
      </div>
    </div>
  );
};

export default MapComponent;
