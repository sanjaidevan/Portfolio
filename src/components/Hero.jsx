import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [nameComplete, setNameComplete] = useState(false);

  const fullName = "Sanjai Devan KR";
  const roles = [
    "Aspiring Software Engineer",
    "Web Developer Intern @ Shadowws",
    "Python & AI Enthusiast",
    "Full-Stack Learner"
  ];

  useEffect(() => {
    // Type name
    if (name.length < fullName.length) {
      const timer = setTimeout(() => {
        setName(fullName.slice(0, name.length + 1));
      }, 120);
      return () => clearTimeout(timer);
    } else {
      setNameComplete(true);
    }
  }, [name]);

  useEffect(() => {
    // Type roles
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      let nextDelay = isDeleting ? 70 : 120;

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        nextDelay = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        nextDelay = 500;
      }

      setTimeout(typeEffect, nextDelay);
    };

    const timer = setTimeout(typeEffect, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div>
          <div id="typed-name">
            {name}
            {!nameComplete && <span className="cursor-name">|</span>}
          </div>
        </div>
        <div className="typing-wrapper">
          <span id="typed-text">{text}</span>
          <span className="cursor">|</span>
        </div>
        <p>B.E. Computer Science (2022-2026) | Web Dev Intern @ Shadowws | US Timezone Ready</p>
        <div style={{ marginTop: '2rem' }}>
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="https://www.linkedin.com/in/sanjai-devan-90546b274" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
      <div id="particles"></div>
    </section>
  );
};

export default Hero;
