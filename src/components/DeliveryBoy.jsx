import React, { useState, useEffect } from 'react';

const DeliveryBoy = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    // Fetch deliveries from the backend
    const fetchDeliveries = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/delivery/all');
        const data = await response.json();
        if (response.ok) {
          setDeliveries(data.deliveries);
        } else {
          alert('Failed to fetch deliveries');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong!');
      }
    };

    fetchDeliveries();
  }, []);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#2c3e50', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ color: '#ecf0f1', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem' }}>DeliveryService</a>
      </nav>

      <div style={{ maxWidth: '960px', margin: '40px auto', padding: '40px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50' }}>Delivery List</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {deliveries.length === 0 ? (
            <p>No deliveries available.</p>
          ) : (
            deliveries.map((delivery) => (
              <div key={delivery.id} style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#f5f8fa', marginBottom: '20px', border: '1px solid #e1e5ea' }}>
                <h3>{delivery.item}</h3>
                <p><strong>Pickup Location:</strong> {delivery.location}</p>
                <p><strong>Description:</strong> {delivery.description}</p>
                <p><strong>Sender:</strong> {delivery.sender_name} ({delivery.sender_number})</p>
                <p><strong>Receiver:</strong> {delivery.receiver_name} ({delivery.receiver_number})</p>
                <p><strong>Email:</strong> {delivery.email}</p>
                <p><strong>Submitted on:</strong> {new Date(delivery.timestamp).toLocaleString()}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryBoy;
