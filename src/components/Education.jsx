import React from 'react';

const Education = () => {
  const educationData = [
    {
      title: '🎓 B.E. Computer Science Engineering',
      school: 'Fatima Michael College, Madurai',
      period: '2022–2026',
      details: 'CGPA: 8.2 | Coursework: DSA, Web Tech, AI, DBMS'
    },
    {
      title: '📘 Higher Secondary (CS)',
      school: 'YWCA Matric Hr Sec School',
      period: '2022',
      details: '72% | Electives: CS, Math, Physics. School topper in coding practicals.'
    },
    {
      title: '📖 SSLC',
      school: 'YWCA Matric Hr Sec School',
      period: '2020',
      details: '66% | Foundation in logical reasoning, science exhibitions participant.'
    }
  ];

  return (
    <section id="education" style={{ background: 'rgba(10, 15, 28, 0.4)' }}>
      <div className="container">
        <h2>Education & Academic Journey</h2>
        <div className="grid">
          {educationData.map((edu, index) => (
            <div key={index} className="card tilt-card">
              <h3>{edu.title}</h3>
              <p><strong>{edu.school}</strong> ({edu.period})</p>
              <p>📌 {edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
