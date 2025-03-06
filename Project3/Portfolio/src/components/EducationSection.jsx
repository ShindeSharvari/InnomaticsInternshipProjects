// Education.jsx
import React from "react";


const EducationSection = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "MES's Institute of Management & Career Courses, Pune",
      duration: "2022 - 2024",
      skills: ["Java", "SQL", "Software Testing", "Data Structures"],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Sadguru Gadage Maharaj College, Karad",
      duration: "2019 - 2022",
      skills: ["Python", "C++", "Algorithms", "Database Management"],
    },
  ];

  return (
    <div id="education" className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-circle"></div>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <p className="institution">{item.institution}</p>
              <p className="duration">{item.duration}</p>
              <div className="skills">
                {item.skills.map((skill, idx) => (
                  <span key={idx} className="skillEduc">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
