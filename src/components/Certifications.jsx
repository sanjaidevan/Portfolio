import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" style={{ background: 'rgba(10, 15, 28, 0.4)' }}>
      <div className="container">
        <h2>Certifications & Languages</h2>
        <div className="grid">
          <div className="card tilt-card">
            <h3>📜 Certifications (2023-2024)</h3>
            <ul>
              <li>Python (Basic) – HackerRank</li>
              <li>Python & C – Sololearn</li>
              <li>Soft Skills – NPTEL</li>
              <li>MySQL for Developers – Udemy (in progress)</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              <strong>Languages:</strong> Tamil (Native), English (Fluent)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
