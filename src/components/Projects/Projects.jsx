import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "To-Do App",
      desc: "A simple and clean task management app built using React with local storage support.",
      tech: "React, JavaScript, CSS",
      github: "https://github.com/",
      live: "https://",
    },
    {
      title: "Weather App",
      desc: "Real-time weather checking app using OpenWeather API with modern UI.",
      tech: "React, API, Tailwind CSS",
      github: "https://github.com/",
      live: "https://",
    },
    {
      title: "Food Delivery Website",
      desc: "A complete food ordering website built with Spring Boot, MongoDB, and Thymeleaf.",
      tech: "Spring Boot, MongoDB, Thymeleaf",
      github: "https://github.com/",
      live: "https://",
    },
    {
      title: "MERN Admin Panel",
      desc: "A management dashboard for agents with CSV upload & data distribution features.",
      tech: "MongoDB, Express, React, Node.js",
      github: "https://github.com/",
      live: "https://",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React and modern UI design.",
      tech: "React, CSS, Vercel",
      github: "https://github.com/",
      live: "https://",
    },
  ];

  return (
    <div className="projects">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p className="project-desc">{project.desc}</p>
            <p className="project-tech"><span>Tech:</span> {project.tech}</p>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="live-btn" href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
