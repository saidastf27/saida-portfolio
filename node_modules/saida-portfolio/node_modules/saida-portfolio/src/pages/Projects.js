import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

function Projects() {
  const projectList = [
    {
      emoji: "🖥️",
      title: "Motorola 6809 Microprocessor Simulator",
      description:
        "Development of an educational simulator for the Motorola 6809 microprocessor in Java to visualize machine instructions.",
      tech: "Java, Swing",
      className: "motorola",
    },
    {
      emoji: "💬",
      title: "Real-time Chat App (Multi-Rooms)",
      description:
        "Web-based real-time chat application with support for multiple chat rooms and instant message delivery.",
      tech: "Node.js, Socket.io, Express.js, MongoDB",
      className: "chat",
    },
    {
      emoji: "📄",
      title: "Online Recruitment Application",
      description:
        "Recruitment platform for managing a CV database and streamlining the application tracking process.",
      tech: "PHP, MySQL, Bootstrap",
      className: "recruitment",
    },
    {
      emoji: "🧑‍💻",
      title: "Project Management App for Student Teams",
      description:
        "Web application to organize, track, and collaborate efficiently on student team projects.",
      tech: "HTML, CSS, JavaScript, PHP",
      className: "management",
    },
  ];

  return (
    <div className="projects-section container py-5">
      <h2 className="section-title">🎯 My Projects</h2>
      <div className="row">
        {projectList.map((project, index) => (
          <motion.div
            className="col-md-6 col-lg-4 mb-4"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glarePosition="all"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.02}
              transitionSpeed={1500}
              className="h-100"
            >
              <motion.div
                className={`project-card h-100 border-0 ${project.className}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="card-body-project d-flex flex-column">
                  <h5 className="project-title">
                    <span role="img" aria-label="project-icon">{project.emoji}</span>
                    <span className="fw-bold">{project.title}</span>
                  </h5>
                  <p className="project-description flex-grow-1">{project.description}</p>
                  <p className="project-tech">
                    <strong>🛠️ Technologies:</strong> {project.tech}
                  </p>
                </div>
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
