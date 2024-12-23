import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Login.css';
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import videoFile from '../components/video/login.mp4';

const Login = ({ onLogin }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Static credentials
  const validUsername = "admin";
  const validPassword = "123";

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      setError(""); // Clear any previous errors
      onLogin(); // Update login status in the parent component
      navigate("/"); // Redirect to the Home component
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <>
      {/* Video Background */}
      <video autoPlay muted loop id="background-video">
        <source src={videoFile} type="video/mp4" />
      </video>

      {/* Black Transparent Overlay */}
      <div className="video-overlay"></div>

      {/* Login Form */}
      <div className="container-fluid login-container d-flex align-items-center justify-content-center">
        <div className="login-box">
          <h2>Login</h2>
          <p>Use social media to login</p>
          <div className="d-flex justify-content-center gap-3 mb-3">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaGoogle className="icon" />
          </div>
          <form onSubmit={handleLogin}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
              <input
                type="text"
                placeholder="Username"
                className="form-control input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 login-button">
              Login
            </button>
          </form>
          <a href="#" className="forgot-password mt-3 d-block">Forgot password</a>
        </div>
      </div>
    </>
  );
};

export default Login;
