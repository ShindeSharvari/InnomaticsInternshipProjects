import React, { useEffect, useRef } from "react";

const AboutSection = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const getThreshold = () => {
      if (window.innerWidth <= 768) {
        return 0.1; // Smaller threshold for smaller screens
      }
      return 0.5; // Default threshold for larger screens
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate"); // Optional: Replay animation
          }
        });
      },
      { threshold: getThreshold() } // Use dynamic threshold
    );

    const section = aboutSectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="aboutSection" className="about-section" ref={aboutSectionRef}>
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="/Images/About.png" alt="Profile Picture" />
        </div>
        <div className="about-text">
          <div>
            <p>
              Hi, I'm <strong>Sharvari Sunil Shinde</strong>, a passionate developer and
              problem-solver with a strong foundation in <strong>computer applications</strong>.
              I have successfully completed my <strong>Master of Computer Applications (MCA)</strong>
              with a CGPA of <strong>7.93</strong>, and I thrive on learning new technologies
              and applying them to solve real-world challenges.
            </p>
            <p>
              With expertise in <strong>HTML5, CSS3, JavaScript,</strong> and <strong>Java</strong>,
              I have worked on diverse projects such as a <strong>quiz application</strong>, a
              <strong> memory game</strong>, and a <strong>to-do application</strong>. My recent
              internship at <strong>Innomatics Research Lab</strong> gave me hands-on experience
              in creating scalable, user-friendly applications, including an
              <strong>Innomatics clone</strong>, a <strong>shopping cart</strong>, and a
              <strong>café website</strong>.
            </p>
            <p>
              I am always driven by my <strong>passion for development</strong> and the excitement
              of tackling <strong>complex problems</strong>. My strengths lie in my ability to adapt
              quickly to new technologies, work collaboratively in a team, and stay focused on
              delivering high-quality solutions.
            </p>
            <p>
              Outside of coding, I enjoy exploring <strong>creative pursuits</strong> like sketching
              and painting, which keep me balanced and inspired. I am also open to exploring
              <strong> new tools and frameworks</strong> to continually enhance my skill set.
            </p>
            <p>Let’s connect and collaborate on building innovative, impactful solutions together!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
