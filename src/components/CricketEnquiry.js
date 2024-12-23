import React, { useState } from 'react';

const CricketEnquiry = () => {
  const [message, setMessage] = useState('');
  const [savedMessage, setSavedMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedMessage(message); // Save the message
    setMessage(''); // Clear input field
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h1>Cricket Inquiry</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <textarea
          value={message}
          onChange={handleInputChange}
          placeholder="Enter your inquiry here..."
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          required
        ></textarea>
        <br />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
          Submit
        </button>
      </form>

      {savedMessage && (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
          <h3>Saved Inquiry:</h3>
          <p>{savedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default CricketEnquiry;
