import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled-components
const Container = styled.div`
    margin-top: 50px;
    padding: 30px;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 50px auto;
    font-family: 'Arial', sans-serif;
`;

const Heading = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
`;

const InputField = styled.input`
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 16px;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 16px;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 14px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const CreateDeliveryBoy = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        vehicle_number: '',
        address: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const { name, phone, email, vehicle_number, address } = formData;
        const phonePattern = /^[0-9]{10}$/; // 10-digit phone number
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!phonePattern.test(phone)) {
            setError('Invalid phone number format');
            return false;
        }

        if (!emailPattern.test(email)) {
            setError('Invalid email format');
            return false;
        }

        if (!name || !phone || !email || !vehicle_number || !address) {
            setError('All fields are required');
            return false;
        }

        setError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:5000/api/deliveryboy/add', // Corrected the backend URL
                formData,
                { headers: { 'Content-Type': 'application/json' } }
            );
            alert(response.data.message);
            setFormData({
                name: '',
                phone: '',
                email: '',
                vehicle_number: '',
                address: ''
            });
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || 'Error adding delivery boy');
        }
    };

    return (
        <Container>
            <Heading>Create Delivery Boy</Heading>
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                <InputField name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <InputField name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                <InputField name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <InputField name="vehicle_number" value={formData.vehicle_number} onChange={handleChange} placeholder="Vehicle Number" required />
                <TextArea name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
                <SubmitButton type="submit">Add Delivery Boy</SubmitButton>
            </form>
        </Container>
    );
};

export default CreateDeliveryBoy;
