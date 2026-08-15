import React from 'react';

const Projects = () => {
  const projects = [
    {
      image: 'https://picsum.photos/id/1/400/200',
      alt: 'Emotion Detection',
      icon: '🧠',
      title: 'Real-time Emotion Detection',
      description: 'Python, OpenCV, DeepFace, Pandas. Detects emotions, logs data, relaxation alerts.',
      hover: 'Real-time DeepFace',
      github: null
    },
    {
      image: 'https://picsum.photos/id/26/400/200',
      alt: 'Voice Chatbot',
      icon: '🎤',
      title: 'Voice-Enabled Chatbot',
      description: 'pyttsx3, SpeechRecognition. Rule-based voice assistant with TTS.',
      hover: 'Voice Assistant',
      github: null
    },
    {
      image: 'https://picsum.photos/id/20/400/200',
      alt: 'Portfolio',
      icon: '✨',
      title: 'Modern Portfolio Website',
      description: 'Glassmorphism, AI chatbot, dark theme, responsive.',
      hover: 'Live Demo',
      github: null
    },
    {
      image: 'https://picsum.photos/id/42/400/200',
      alt: 'Shadowws',
      icon: '🏢',
      title: 'Shadowws Company Website',
      description: 'PHP, MySQL, JS. Corporate site with admin panel.',
      hover: 'Company Website',
      github: 'https://github.com/sanjaidevan/shadowws-website.git'
    },
    {
      image: 'https://picsum.photos/id/24/400/200',
      alt: 'Employee CRUD',
      icon: '👥',
      title: 'Employee CRUD',
      description: 'PHP, MySQL, Bootstrap. Full CRUD with search & pagination.',
      hover: 'CRUD Operation',
      github: 'https://github.com/sanjaidevan/Employee-CRUD-operation'
    },
    {
      image: 'https://picsum.photos/id/15/400/200',
      alt: 'Hospital CRUD',
      icon: '🏥',
      title: 'Hospital CRUD',
      description: 'PHP, MySQL. Manage patients, doctors, appointments.',
      hover: 'Healthcare CRUD',
      github: 'https://github.com/sanjaidevan/Hospital-CRUD-operation'
    }
  ];

  return (
    <section id="projects" style={{ background: 'rgba(10, 15, 28, 0.4)' }}>
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="grid">
          {projects.map((project, index) => (
            <div key={index} className="card project-card tilt-card">
              <img className="project-img" src={project.image} alt={project.alt} />
              <div className="hover-preview">
                <i className="fas fa-search-plus"></i> {project.hover}
              </div>
              <h3>{project.icon} {project.title}</h3>
              <p>{project.description}</p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="repo-link">
                  <i className="fab fa-github"></i> GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://github.com/sanjaidevan" target="_blank" rel="noopener noreferrer" className="github-repo-link">
            <i className="fab fa-github"></i> Explore all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
