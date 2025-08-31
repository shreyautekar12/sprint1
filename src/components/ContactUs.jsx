import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [confirmation, setConfirmation] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, we would normally send data to the backend, but we simulate a submission.
    setConfirmation('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page" style={{ padding: '30px', backgroundColor: '#f1f2f6', fontFamily: 'Arial, sans-serif' }}>
      <div className="contact-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '3rem', fontWeight: 'bold' }}>Contact Us</h1>
        <p style={{ color: '#7f8c8d', fontSize: '1.2rem' }}>We’d love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
      </div>

      <div className="contact-form-container" style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ fontSize: '1.1rem', color: '#333' }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ fontSize: '1.1rem', color: '#333' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '30px' }}>
            <label htmlFor="message" style={{ fontSize: '1.1rem', color: '#333' }}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={textareaStyle}
            />
          </div>

          <button type="submit" style={submitButtonStyle}>Send Message</button>
        </form>

        {confirmation && <p style={confirmationStyle}>{confirmation}</p>}
      </div>

      {/* Optional: Footer with address or other contact details */}
      <footer style={{ textAlign: 'center', marginTop: '50px' }}>
        <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Company Address: 1234 Street Name, City, Country</p>
      </footer>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '1rem',
  boxSizing: 'border-box',
};

const textareaStyle = {
  width: '100%',
  padding: '12px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '1rem',
  height: '150px',
  boxSizing: 'border-box',
};

const submitButtonStyle = {
  backgroundColor: '#3498db',
  color: '#fff',
  padding: '14px 20px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1.2rem',
  cursor: 'pointer',
  width: '100%',
  marginTop: '20px',
};

const confirmationStyle = {
  color: '#2ecc71',
  fontSize: '1.2rem',
  textAlign: 'center',
  marginTop: '20px',
};

export default ContactUs;
