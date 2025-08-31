import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Track user registration status
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const registered = localStorage.getItem('isRegistered');
    if (registered === 'true') {
      setIsRegistered(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isRegistered');
    setIsRegistered(false);
    navigate('/');
  };

  const [form, setForm] = useState({
    item: '',
    location: '',
    description: '',
    senderName: '',
    receiverName: '',
    senderNumber: '',
    receiverNumber: '',
    senderAddress: '',
    receiverAddress: '',
    email: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = Object.values(form);
    if (values.some(value => value.trim() === '')) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/delivery/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Details submitted successfully!');
        localStorage.setItem('isRegistered', 'true');
        setIsRegistered(true);
        navigate('/deliveryBoy');
      } else {
        alert(data.message || 'Failed to save data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  const inputStyle = {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border 0.3s',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)',
  };

  const sectionStyle = {
    marginBottom: '20px',
    backgroundColor: '#f5f8fa',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #e1e5ea',
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      {/* NAVIGATION */}
      <nav style={{ backgroundColor: '#2c3e50', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#ecf0f1', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem' }}>
          DeliveryService
        </Link>
        <div style={{ display: 'flex', gap: '25px' }}>
          <Link to="/" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Home</Link>
          <Link to="/about-us" style={{ color: '#ecf0f1', textDecoration: 'none' }}>About Us</Link>
          <Link to="/ContactUs" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Contact</Link>
          {!isRegistered ? (
            <Link to="/register" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Register</Link>
          ) : (
            <button onClick={handleLogout} style={{ background: 'transparent', border: 'none', color: '#ecf0f1', cursor: 'pointer' }}>
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* FORM CARD */}
      <div style={{ maxWidth: '960px', margin: '40px auto', padding: '40px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)', animation: 'fadeIn 0.5s ease-in-out' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50' }}>Product Details. Let Us Help.</h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* ITEM DETAILS */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: '10px', color: '#34495e' }}>Item Details</h3>
            <input type="text" name="item" placeholder="What is your product?" value={form.item} onChange={handleChange} style={inputStyle} />
            <input type="text" name="location" placeholder="Where to pick it from?" value={form.location} onChange={handleChange} style={{ ...inputStyle, marginTop: '10px' }} />
            <input type="text" name="description" placeholder="Describe the item" value={form.description} onChange={handleChange} style={{ ...inputStyle, marginTop: '10px' }} />
          </div>

          {/* SENDER INFO */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: '10px', color: '#34495e' }}>Sender Information</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <input type="text" name="senderName" placeholder="Sender's Name" value={form.senderName} onChange={handleChange} style={inputStyle} />
              <input type="text" name="senderNumber" placeholder="Sender's Number" value={form.senderNumber} onChange={handleChange} style={inputStyle} />
              <input type="text" name="senderAddress" placeholder="Sender's Address" value={form.senderAddress} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          {/* RECEIVER INFO */}
          <div style={sectionStyle}>
            <h3 style={{ marginBottom: '10px', color: '#34495e' }}>Receiver Information</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <input type="text" name="receiverName" placeholder="Receiver's Name" value={form.receiverName} onChange={handleChange} style={inputStyle} />
              <input type="text" name="receiverNumber" placeholder="Receiver's Number" value={form.receiverNumber} onChange={handleChange} style={inputStyle} />
              <input type="text" name="receiverAddress" placeholder="Receiver's Address" value={form.receiverAddress} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} style={inputStyle} />
          </div>

          <button type="submit" style={{
            padding: '12px',
            background: 'linear-gradient(to right, #3498db, #2980b9)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
            onMouseOver={e => (e.currentTarget.style.opacity = 0.9)}
            onMouseOut={e => (e.currentTarget.style.opacity = 1)}>
            Submit
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#2c3e50', color: '#ecf0f1', padding: '40px 20px', marginTop: '40px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1100px', margin: 'auto' }}>
          <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
            <h4 style={{ marginBottom: '10px' }}>About Us</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              We help deliver lost or emergency items with care, speed, and trust. Your delivery is our promise.
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '150px', marginBottom: '20px' }}>
            <h4 style={{ marginBottom: '10px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li><Link to="/delivery-boy" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Delivery Login</Link></li>
              <li><Link to="/aboutus" style={{ color: '#ecf0f1', textDecoration: 'none' }}>About</Link></li>
              <li><Link to="/contact" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Contact</Link></li>
              <li><Link to="/terms" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Terms of Service</Link></li>
              <li><Link to="/privacy" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
            <h4 style={{ marginBottom: '10px' }}>Contact</h4>
            <p style={{ fontSize: '0.9rem' }}>📍 123 Delivery Lane, Mumbai, India</p>
            <p style={{ fontSize: '0.9rem' }}>📞 +91 98765 43210</p>
            <p style={{ fontSize: '0.9rem' }}>✉ support@deliveryservice.com</p>
          </div>
          <div style={{ flex: '1', minWidth: '150px' }}>
            <h4 style={{ marginBottom: '10px' }}>Follow Us</h4>
            <p style={{ fontSize: '0.9rem', color: '#bdc3c7' }}>
              <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none', marginRight: '10px' }}>Facebook</a> |
              <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none', margin: '0 10px' }}>Twitter</a> |
              <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none', marginLeft: '10px' }}>Instagram</a>
            </p>
          </div>
        </div>

        <hr style={{ margin: '30px 0', borderColor: '#7f8c8d' }} />

        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#bdc3c7' }}>
          &copy; {new Date().getFullYear()} Delivery Service. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
