import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // 🔄 Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !number || !password) {
      setMessage('All fields are required. Don\'t leave any empty');
      return;
    }

    if (!acceptedTerms) {
      setMessage('You need to accept the terms & conditions to register.');
      return;
    }

    setLoading(true); // Start loading
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/register', {
        name,
        email,
        number,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('isRegistered', 'true'); // ✅ Save registration status
        setMessage("You're successfully registered!");
        setTimeout(() => {
          navigate('/home'); // Redirect after showing message
        }, 1500);
      }
    } catch (error) {
      setMessage('Something went wrong. Try again.');
    }

    setLoading(false); // End loading
    setName('');
    setEmail('');
    setNumber('');
    setPassword('');
    setAcceptedTerms(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', background: '#f5f5f5', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '20px', color: '#333' }}>Register Here</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required style={{ padding: '10px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: '10px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
        <input type="tel" placeholder="Phone Number" value={number} onChange={(e) => setNumber(e.target.value)} required style={{ padding: '10px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: '10px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />

        <label style={{ fontSize: '0.9rem' }}>
          <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} style={{ marginRight: '10px' }} />
          I agree to the Terms and Conditions
        </label>

        <button type="submit" style={{ padding: '10px', fontSize: '1rem', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          Register
        </button>
      </form>

      {message && <p style={{ textAlign: 'center', marginTop: '20px', color: '#ff5555' }}>{message}</p>}

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>
          Already have an account? <a href="/login" style={{ color: '#007BFF' }}>Login here</a>
        </p>
        <p>
          <a href="/forgot-password" style={{ color: '#007BFF' }}>Forgot Password?</a>
        </p>
        <p>
          <a href="/admin" style={{ color: '#007BFF' }}>Admin Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
