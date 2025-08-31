import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [deliveryBoys, setDeliveryBoys] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/deliveryboy/all')
      .then(res => {
        setDeliveryBoys(res.data);
      })
      .catch(err => console.error('Error fetching delivery boys:', err));
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const styles = {
    container: { fontFamily: 'Segoe UI, sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f9f9f9' },
    nav: { backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    navTitle: { fontSize: '22px', fontWeight: 'bold' },
    logoutButton: { backgroundColor: '#f87171', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' },
    content: { display: 'flex', flex: 1 },
    sidebar: { width: '200px', backgroundColor: '#3b82f6', color: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' },
    menuItem: { cursor: 'pointer', padding: '10px', borderRadius: '4px', backgroundColor: '#2563eb', transition: 'background 0.2s' },
    main: { flex: 1, padding: '30px' },
    card: { backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '20px' },
    table: { width: '100%', borderCollapse: 'collapse' },
    th: { backgroundColor: '#1e3a8a', color: '#fff', padding: '10px', textAlign: 'left' },
    td: { border: '1px solid #ddd', padding: '10px' },
    footer: { backgroundColor: '#1e3a8a', color: '#fff', padding: '10px', textAlign: 'center' },
    image: { width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={styles.navTitle}>Admin Panel</div>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </nav>

      <div style={styles.content}>
        <aside style={styles.sidebar}>
          <div style={styles.menuItem} onClick={() => navigate('/create-delivery-boy')}>Create Delivery Boy</div>
          <div style={styles.menuItem}>All Deliveries</div>
          <div style={styles.menuItem}>Emergency Requests</div>
          <div style={styles.menuItem}>User Feedback</div>
          <div style={styles.menuItem}>Settings</div>
        </aside>

        <main style={styles.main}>
          <div style={styles.card}>
            <h2>Welcome, Admin!</h2>
            <p>Manage deliveries, requests, and settings from here.</p>
          </div>

          <div style={styles.card}>
            <h3>All Delivery Boys</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Phone</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Vehicle No</th>
                  <th style={styles.th}>Address</th>
                  {/** Optional Photo / Unique ID / etc. */}
                </tr>
              </thead>
              <tbody>
                {deliveryBoys.map((boy) => (
                  <tr key={boy.id}>
                    <td style={styles.td}>{boy.id}</td>
                    <td style={styles.td}>{boy.name}</td>
                    <td style={styles.td}>{boy.phone}</td>
                    <td style={styles.td}>{boy.email}</td>
                    <td style={styles.td}>{boy.vehicle_number}</td>
                    <td style={styles.td}>{boy.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} Delivery Service Admin • Built with ❤️ by devlop
      </footer>
    </div>
  );
}
