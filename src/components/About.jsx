import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="glass" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left', padding: '2.5rem' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            I'm a final-year Computer Science student with a burning passion for building digital experiences that matter. My journey started with C and Python, and quickly evolved into full-stack web development, AI integration, and real-world problem solving.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>💡 What drives me:</strong> I love turning complex challenges into elegant, scalable solutions. Whether it's detecting emotions in real-time, building voice assistants, or crafting responsive web apps — I thrive on learning by doing.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>🚀 Currently:</strong> Interning as a Web Developer at <strong>Shadowws Company</strong> (PHP, MySQL, JS). Building production-ready modules and improving my full-stack expertise. Also exploring Cloud basics and DevOps tools.
          </p>
          <p>
            <strong>🌍 Beyond code:</strong> I'm flexible with US timezones, fluent in Tamil & English, and always ready to collaborate on impactful projects. Let's build something awesome together.
          </p>
          <div className="badge-light" style={{ marginTop: '1.5rem' }}>
            <i className="fas fa-heart" style={{ color: '#f472b6' }}></i> Open for Software Engineer roles (2026)
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
