// ProjectCard.jsx
import React from 'react';


const ProjectCard = ({ project }) => {
  return (
      <div className="project-card">
      <img src={project.image} alt={project.name} className="project-image" />
      <h3 className="project-name">{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((tech, index) => (
          <img src={tech.icon} alt={tech.name} key={index} className="tech-icon" />
        ))}
      </div>
      <div className="project-links">
  {project.liveDemo && ( // This will only render if liveDemo exists
    <a 
      href={project.liveDemo} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="live-demo-link"
    >
      <img 
        src="Images/Icons/Arrow.png" 
        alt="Live Demo Icon" 
        className="button-icon" 
      />
      Live Demo
    </a>
  )}
  
  <a 
    href={project.githubRepo} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="github-repo-link"
  >
    <img 
      src="Images/Icons/Code.png" 
      alt="GitHub Icon" 
      className="button-icon" 
    />
    Code
  </a>
</div>


    </div>
  );
};

const ProjectCardSection = () => {
  const projects = [
    {
      name: 'Memory Game',
      description: 'A fun and challenging Memory Game built with React, featuring smooth animations, dynamic card shuffling, and a responsive design for all devices.',
      image: 'Images/Memory1.jpeg',
      technologies: [
        {  icon: 'Images/Icons/Html.png' },
        {  icon: 'Images/Icons/CSS3.png' },
        {  icon: 'Images/Icons/Js.png' },
      ],
      liveDemo: 'https://shindesharvari.github.io/InnomaticsInternshipProjects/Project2/MemoryGame.html',
      githubRepo: 'https://github.com/ShindeSharvari/InnomaticsInternshipProjects/tree/main/Project2',
    },
    {
        name: 'Innomatics Clone',
        description: 'Responsive Innomatics website clone with a sleek UI and smooth navigation, replicating the original experience.',
        image: 'Images/Clone.png',
        technologies: [
          {  icon: 'Images/Icons/Html.png' },
          {  icon: 'Images/Icons/CSS3.png' },
          {  icon: 'Images/Icons/Js.png' },
        ],
        liveDemo: 'https://shindesharvari.github.io/InnomaticsInternshipProjects/Project/Innomatics.html',
        githubRepo: 'https://github.com/ShindeSharvari/InnomaticsInternshipProjects/tree/main/Project',
      },
      {
        name: 'Portfolio',
        description: 'Showcasing my projects, skills, and passion for development, with a focus on clean design, innovation, and delivering impactful solutions. Explore my journey to excellence!',
        image: 'Images/Portfolio.jpg',
        technologies: [
          {  icon: 'Images/Icons/Html.png' },
          {  icon: 'Images/Icons/CSS3.png' },
          {  icon: 'Images/Icons/Js.png' },
        ],
        // liveDemo: 'https://shindesharvari.github.io/InnomaticsInternshipProjects/Project2/MemoryGame.html',
        githubRepo: 'https://github.com/ShindeSharvari/InnomaticsInternshipProjects/tree/main/Project3',
      },
      {
          name: 'Coffee Shop Website',
          description: 'Crafted a modern and visually appealing coffee shop website, highlighting menu items, special offers, and a seamless user experience for coffee lovers.',
          image: 'Images/Coffee.png',
          technologies: [
            {  icon: 'Images/Icons/Html.png' },
            {  icon: 'Images/Icons/CSS3.png' },
          ],
          liveDemo: 'https://shindesharvari.github.io/InnomaticsInternshipProjects/Task2/Index.html',
          githubRepo: 'https://github.com/ShindeSharvari/InnomaticsInternshipProjects/tree/main/Task2',
        },
        {
          name: 'To-Do List',
          description: 'Developed a dynamic To-Do List application allowing users to efficiently manage tasks with features like adding, editing, and deleting tasks, ensuring an organized workflow.',
          image: 'Images/ToDo.jpg',
          technologies: [
            {  icon: 'Images/Icons/Html.png' },
            {  icon: 'Images/Icons/CSS3.png' },
            {  icon: 'Images/Icons/React.png' },
          ],
          liveDemo: 'https://67c1546fbdb9dffcc79c906e--inspiring-profiterole-ab591a.netlify.app/',
          githubRepo: 'https://github.com/ShindeSharvari/InnomaticsInternshipProjects/tree/main/Task5',
        },
        {
            name: 'Myntra Clone',
            description: 'Created a Myntra Clone website home page replicating the design and functionality of the e-commerce platform, featuring a responsive layout, product catalog, and user-friendly interface',
            image: 'Images/Myntra.png',
            technologies: [
              {  icon: 'Images/Icons/Html.png' },
              {  icon: 'Images/Icons/CSS3.png' },
            ],
            liveDemo: 'https://shindesharvari.github.io/ClassTask/Myntra/MyntraClone.html',
            githubRepo: 'https://github.com/ShindeSharvari/ClassTask/tree/main/Myntra',
          },
    
  ];

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectCardSection;