import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
      setFormStatus('❌ All fields required.');
      return;
    }
    
    if (!email.includes('@')) {
      setFormStatus('❌ Valid email required.');
      return;
    }
    
    setFormStatus('✨ Sending...');
    
    setTimeout(() => {
      setFormStatus('✅ Message sent! I\'ll reply soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setFormStatus(''), 4000);
    }, 1000);
  };

  return (
    <section id="contact" style={{ background: 'rgba(10, 15, 28, 0.5)' }}>
      <div className="container">
        <h2>Let's Connect</h2>
        <div className="contact-grid">
          <div className="glass" style={{ padding: '2rem' }}>
            <h3>Reach out directly</h3>
            <p>Open for Software Engineer roles (2026) and freelance.</p>
            <div style={{ margin: '2rem 0' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <i className="fas fa-envelope" style={{ color: 'var(--primary)' }}></i>
                sanjaidevan06@gmail.com
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <i className="fas fa-phone-alt" style={{ color: 'var(--primary)' }}></i>
                +91 98653 16246
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <i className="fab fa-linkedin" style={{ color: 'var(--primary)' }}></i>
                linkedin.com/in/sanjai-devan
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <i className="fab fa-github" style={{ color: 'var(--primary)' }}></i>
                github.com/sanjaidevan
              </div>
            </div>
            <div className="badge-light">
              <i className="fas fa-clock"></i> US timezone ready
            </div>
            <div className="badge-light" style={{ marginTop: '0.5rem' }}>
              <i className="fas fa-map-marker-alt"></i> Madurai, India (Remote/Relocation)
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem' }}>
            <h3>Send a Message</h3>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  rows="3"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
              {formStatus && (
                <p id="formStatus" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
                  <span style={{
                    color: formStatus.includes('❌') ? '#f87171' :
                      formStatus.includes('✨') ? '#a5f3fc' :
                      formStatus.includes('✅') ? '#4ade80' : 'inherit'
                  }}>
                    {formStatus}
                  </span>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
