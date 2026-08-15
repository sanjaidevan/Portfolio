import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="grid">
          <div className="card tilt-card">
            <h3>⚙️ Programming Languages</h3>
            <p>C, Python, JavaScript, PHP, SQL</p>
            <h3 style={{ marginTop: '1rem' }}>🛠️ Frameworks & Tools</h3>
            <p>Git, Bootstrap, REST APIs, Linux, VS Code, phpMyAdmin</p>
          </div>
          <div className="card tilt-card">
            <h3>🌐 Web Technologies</h3>
            <p>HTML5, CSS3, JavaScript (ES6), MySQL, Responsive Design, PHP</p>
            <h3 style={{ marginTop: '1rem' }}>📊 Core Competencies</h3>
            <p>Problem Solving · Debugging · Analytical Thinking · Team Collaboration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
