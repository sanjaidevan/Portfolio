import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2>Experience & Professional Growth</h2>
        <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="card tilt-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3>💻 Web Developer Intern | Shadowws Company</h3>
            <p style={{ color: 'var(--primary-light)' }}>Duration: 3 months (Ongoing – completing April 2026)</p>
            <ul>
              <li>Developed dynamic web modules using PHP, MySQL, JavaScript for dashboards.</li>
              <li>Optimized DB queries, reduced load time by 20%.</li>
              <li>Implemented secure auth, REST APIs, Git version control.</li>
            </ul>
            <p><strong>Tech Stack:</strong> PHP · MySQL · JavaScript · HTML/CSS · Git · Bootstrap</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
