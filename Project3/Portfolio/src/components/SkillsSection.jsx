import React from "react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Technical Skills",
      skills: [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ],
    },
  ];

  return (
    <section id="skillsection" className="skills-section">
      <h2>My Skills</h2>
      <p>Here are my technical skills and proficiency levels in various technologies</p>
      {skills.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3> 
          <div className="skills-container">
            {category.skills.map((skill, i) => (
              <div className="skill" key={i}>
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="skill-logo"
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
