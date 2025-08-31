import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const correctUsername = 'admin';
  const correctPassword = '123422';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Please enter both username and password.');
      return;
    }

    if (username === correctUsername && password === correctPassword) {
      navigate('/admin-dashboard');
    } else {
      setMessage('Login failed. Invalid username or password.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Admin Login</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        style={styles.input}
      />

      <div style={styles.passwordWrapper}>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={styles.input}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={styles.toggleButton}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      <button type="submit" style={styles.button}>Login</button>

      {message && <p style={styles.message}>{message}</p>}
    </form>
  );
}

const styles = {
  form: {
    width: '320px',
    margin: '100px auto',
    padding: '30px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  passwordWrapper: {
    position: 'relative'
  },
  toggleButton: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#007BFF',
    cursor: 'pointer',
    fontSize: '14px'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  message: {
    color: 'red',
    textAlign: 'center',
    marginTop: '15px'
  }
};
