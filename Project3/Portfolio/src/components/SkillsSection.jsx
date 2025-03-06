import React, { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    {
      category: "Technical Skills",
      skills: [
        { name: "HTML5", percentage: 95 },
        { name: "CSS3", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "React", percentage:86 },
        { name: "Node.js", percentage:70 },
        { name: "SQl", percentage:95 },
        { name: "MongoDB", percentage:70 },
        { name: "Git", percentage: 85 },
        { name: "Tailwind CSS", percentage:30 },
        { name: "Next.js", percentage:50 },
      ],
    },
    {
      category: "Testing Skills",
      skills: [
        { name: "Manual Testing", percentage: 90 },
        { name: "Sanity Testing", percentage:85 },
        { name: "Exploratory Testing", percentage:90 },
        { name: "Jira", percentage: 85 },
      ],
    },
  ];
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="skillsection" className="skills-section" ref={skillsRef}>
      <h2>My Skills</h2>
      <p>Here are my technical skills and proficiency levels in various technologies</p>
      {skills.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3> {/* Display category title */}
          <div className="skills-container">
            {category.skills.map((skill, i) => (
              <div className="skill" key={i}>
                <div
                  className={`circle ${animate ? "rotate" : ""}`}
                  style={{
                    "--percentage": `${skill.percentage * 3.6}deg`,
                  }}
                >
                  <div className="inner-circle">
                    <span>{skill.percentage}%</span>
                  </div>
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
export default SkillsSection;
