import React from 'react';
import YourComponent from './energyanimation';
import { Container, Row, Col } from 'react-bootstrap';

const SolarPanelMonitoringSystem = () => {
  const containerStyle = {
    width: '100%', // Full width
    padding: '20px',
    background: '#0a0a0a', // Radial gradient background
    color: '#ffffff', // Text color
    fontFamily: 'Arial, sans-serif', // Example font family
    textAlign: 'center', // Center text
  };

  const headerStyle = {
    color: '#39ff14', 
    textShadow: '0 0 10px #39ff14', // Neon green text shadow
    fontSize: '2.2rem', // Larger font size for the header
    fontWeight: 'bold', // Bold font weight
    letterSpacing: '1px', // Increased letter spacing
    margin: '0.5rem 0', // Adjust top and bottom margins
  };

  const bodyStyle = {
    lineHeight: '1.6',
    fontSize: '1rem', // Slightly larger font size for the body
    fontWeight: '300', // Lighter font weight
    letterSpacing: '0.5px', // Adjusted letter spacing
    margin: '1rem 0', // Adjust top and bottom margins
  };

  return (
    <div style={containerStyle} id='dec'>
      <header style={headerStyle}>
        <h1>Welcome to our AI-Powered Solar Panel Monitoring System!</h1>
        <p>
          Harness the power of cutting-edge technology to track and optimize your solar energy production effortlessly.
        </p>
      </header>

      <section style={bodyStyle}>
        <Container>
          <Row>
            <Col>
            <p>
          Our intuitive dashboard provides real-time insights into your solar panel array's performance,
          delivering accurate data on energy output, efficiency, and environmental impact.
        </p>

        <p>
          Experience the future of clean energy management as our AI algorithms analyze historical trends,
          predict future yields, and suggest optimizations for maximum efficiency.
        </p>

        <p>
          Monitor, control, and embrace sustainable living with confidence, all at your fingertips.
          Join us in revolutionizing your solar journey towards a greener and more sustainable future!
        </p>

        <p>
          Whether you're a homeowner, business owner, or environmental enthusiast,
          our AI-powered solution empowers you to make informed decisions for a brighter, cleaner future.
        </p>

            </Col>
            <Col>
              <YourComponent></YourComponent>
            </Col>
          </Row>
        </Container>
        
        
      </section>
    </div>
  );
};

export default SolarPanelMonitoringSystem;
