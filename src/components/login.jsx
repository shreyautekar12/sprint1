import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isRegistered = localStorage.getItem('isRegistered');
    if (!isRegistered) {
      setMessage('You must register before logging in.');
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Please enter both email and password.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.status === 200) {
        setMessage('Login successful!');
        localStorage.setItem('isLoggedIn', 'true');
        setTimeout(() => {
          navigate('/home');
        }, 1500);
      } else {
        setMessage('Invalid email or password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Login to Your Account</h2>

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{ padding: '10px', fontSize: '1rem', backgroundColor: loading ? '#6c757d' : '#28a745', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {message && <p style={{ textAlign: 'center', marginTop: '20px', color: message.includes('successful') ? 'green' : '#ff5555' }}>{message}</p>}

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>
          Don't have an account? <a href="/register" style={{ color: '#007BFF' }}>Register</a>
        </p>
        <p>
          <a href="/forgot-password" style={{ color: '#007BFF' }}>Forgot Password?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;