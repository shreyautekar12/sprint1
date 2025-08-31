import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Ragister';
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard';
import CreateDeliveryBoy from './components/CreateDeliveryBoy';
import DeliveryBoy from './components/DeliveryBoy';
import Login from './components/login';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';


const App = () => {
  return (
    <Router>
      <Routes>\
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/create-delivery-boy" element={<CreateDeliveryBoy />} />
        <Route path="/delivery-boy" element={<DeliveryBoy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
