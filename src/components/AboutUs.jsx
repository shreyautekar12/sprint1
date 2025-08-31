import React, { useState } from 'react';

// Mock data for the About Us page
const aboutUsData = {
  title: "About Our Company",
  image: "https://www.befunky.com/images/prismic/0d88c466-8c06-4ddc-8534-1047b109136d_features-background-remover4.png?auto=avif,webp&format=jpg&width=581",  // Main image for About Us section
  description: "We are a company dedicated to providing exceptional services to our customers. Our journey has been one of growth and innovation, guided by our mission to offer the best customer experiences.",
  mission: "To provide high-quality services that improve the lives of our customers through innovation and commitment.",
  vision: "To be the most trusted and innovative service provider in the industry, always prioritizing our customers' needs.",
  teamMembers: [
    {
      name: "John Doe",
      position: "CEO",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCBQAq4fDkjizcfZGBW_6ir3gL4Kd8b_3fA&s",
      bio: "John has over 20 years of experience in the tech industry, leading innovative projects."
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s",
      bio: "Jane is passionate about technology and leads the company's tech initiatives with creativity and strategy."
    },
    {
      name: "Alice Johnson",
      position: "COO",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg",
      bio: "Alice ensures the smooth operation of all our services, keeping things running seamlessly."
    }
  ],
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCBQAq4fDkjizcfZGBW_6ir3gL4Kd8b_3fA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s",
    "https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg"
  ]
};

const AboutUs = () => {
  return (
    <div style={{ padding: '30px', maxWidth: '1100px', margin: '0 auto', backgroundColor: '#f9fafb', fontFamily: 'Arial, sans-serif' }}>
      {/* Header Section */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>{aboutUsData.title}</h1>
        <img
          src={aboutUsData.image}
          alt="About Us"
          style={{
            width: '100%',
            maxWidth: '1000px',
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
            marginBottom: '30px',
          }}
        />
      </header>

      {/* Description Section */}
      <section style={{ marginBottom: '50px', color: '#34495e', lineHeight: '1.8', fontSize: '1.2rem', textAlign: 'center' }}>
        <p>{aboutUsData.description}</p>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ marginBottom: '50px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#2c3e50', fontWeight: 'bold' }}>Our Mission</h2>
        <p style={{ fontSize: '1.2rem', color: '#7f8c8d' }}>{aboutUsData.mission}</p>
        <h2 style={{ fontSize: '2.5rem', color: '#2c3e50', fontWeight: 'bold', marginTop: '30px' }}>Our Vision</h2>
        <p style={{ fontSize: '1.2rem', color: '#7f8c8d' }}>{aboutUsData.vision}</p>
      </section>

      {/* Team Section */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#2c3e50', fontWeight: 'bold', textAlign: 'center' }}>Meet Our Team</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
          {aboutUsData.teamMembers.map((member, index) => (
            <div key={index} style={{ maxWidth: '280px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', padding: '20px' }}>
              <img
                src={member.image}
                alt={member.name}
                style={{ width: '100%', height: 'auto', borderRadius: '50%', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}
              />
              <h3 style={{ marginTop: '20px', color: '#2c3e50', fontSize: '1.6rem', fontWeight: 'bold' }}>{member.name}</h3>
              <p style={{ fontSize: '1.1rem', color: '#3498db' }}>{member.position}</p>
              <p style={{ color: '#7f8c8d', fontSize: '1rem' }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#2c3e50', fontWeight: 'bold', textAlign: 'center' }}>Our Gallery</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {aboutUsData.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              style={{
                width: '32%',
                marginBottom: '20px',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          ))}
        </div>
      </section>

      {/* Navigation Section */}
      <section style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#2c3e50', fontWeight: 'bold' }}>Explore More</h3>
        <nav>
          <a href="/services" style={{ marginRight: '30px', fontSize: '1.1rem', color: '#007BFF', textDecoration: 'none' }}>Our Services</a>
          <a href="/contact" style={{ fontSize: '1.1rem', color: '#007BFF', textDecoration: 'none' }}>Contact Us</a>
        </nav>
      </section>
    </div>
  );
};

export default AboutUs;
