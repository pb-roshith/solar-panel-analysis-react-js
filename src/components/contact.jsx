import React from 'react';

const styles = {
  formContainer: {
    background: 'radial-gradient(circle, #1a1a1a, #000)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
    width: '300px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: 'transparent',
    color: '#fff',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: 'transparent',
    color: '#fff',
  },
  submitButton: {
    background: '#00ff00',
    color: '#000',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

const ContactForm = () => {
  return (
    <div style={styles.formContainer} id="con">
      <form style={styles.form}>
        <h2 style={{ color: '#fff' }}>Contact Us</h2>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" rows="4" style={styles.textarea} />
        <button type="submit" style={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
