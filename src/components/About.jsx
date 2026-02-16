import { useState, useEffect } from 'react';
import skillsImage from '../assets/skills.png';
import aboutImage from '../assets/aboutme.png';
import skillIcon from '../assets/skill.png';
import jsIcon from '../assets/javascript.svg.png';
import reactIcon from '../assets/images.png';
import htmlCssIcon from '../assets/csshtml.jpg';
import nodeIcon from '../assets/nodes.png';

function About() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      id="about" 
      style={{ 
        padding: "40px 20px", 
        backgroundColor: "#62E5FB",
        display: "flex",
        alignItems: "center",
        minHeight: "100vh"
      }}
    >
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          /* Mobile responsive styles */
          .about-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: flex-start;
          }
          
          .about-title {
            font-size: 3.5rem;
            color: #0891b2;
            margin-bottom: 40px;
            text-align: left;
          }
          
          .about-image-container {
            position: relative;
            text-align: center;
          }
          
          .about-image {
            display: block;
            margin: 0 auto;
            width: 300px;
            height: auto;
            max-width: 100%;
          }
          
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            justify-items: center;
          }
          
          .skill-item {
            text-align: center;
          }
          
          .skill-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 10px;
          }
          
          /* Tablet breakpoint */
          @media (max-width: 768px) {
            .about-container {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            
            .about-title {
              font-size: 3rem;
              text-align: center;
              margin-bottom: 30px;
            }
            
            .about-image {
              width: 250px;
            }
            
            .skills-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 25px;
            }
            
            /* Hide decorative icons on mobile for cleaner look */
            .decorative-icon {
              display: none;
            }
          }
          
          /* Mobile breakpoint */
          @media (max-width: 480px) {
            .about-title {
              font-size: 2.5rem;
            }
            
            .about-image {
              width: 200px;
            }
            
            .about-text {
              font-size: 1rem !important;
            }
            
            .skills-title {
              font-size: 1rem !important;
            }
            
            .skill-icon {
              width: 50px;
              height: 50px;
            }
          }
        `}
      </style>

      <div className="about-container">
        {/* Left Side - Image, Decorative Elements, and Education */}
        <div className="about-image-container">
          <h2 
            className="about-title"
            style={{ 
              animation: hasAnimated ? "fadeInUp 0.8s ease-out forwards" : "none",
              opacity: hasAnimated ? 0 : 1
            }}
          >
            About me
          </h2>
          
          <img 
            src={aboutImage} 
            alt="About Me" 
            className="about-image"
            style={{ 
              animation: hasAnimated ? "fadeIn 0.8s ease-out 0.3s forwards" : "none",
              opacity: hasAnimated ? 0 : 1
            }} 
          />

          {/* Education moved here - under the image with 200px gap */}
          <p style={{ 
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#1e293b",
            marginTop: "200px",
            marginBottom: "20px",
            animation: hasAnimated ? "fadeInUp 0.8s ease-out 0.8s forwards" : "none",
            opacity: hasAnimated ? 0 : 1,
            textAlign: "left"
          }}>
            🎓 Education:<br/> Bachelor's in Marketing Management <br/>South East European University
          </p>
          
          {/* Decorative icons around image - ALL using TOP positioning now */}
          <div className="decorative-icon" style={{ 
            position: "absolute", 
            top: "180px", 
            left: "70px", 
            fontSize: "2rem",
            animation: hasAnimated ? "fadeIn 0.6s ease-out 0.5s forwards" : "none",
            opacity: hasAnimated ? 0 : 1
          }}>⚡</div>
          <div className="decorative-icon" style={{ 
            position: "absolute", 
            top: "180px", 
            right: "200px", 
            fontSize: "2rem",
            animation: hasAnimated ? "fadeIn 0.6s ease-out 0.6s forwards" : "none",
            opacity: hasAnimated ? 0 : 1
          }}>✨</div>
          <div className="decorative-icon" style={{ 
            position: "absolute", 
            top: "420px", 
            left: "70px", 
            fontSize: "2rem",
            animation: hasAnimated ? "fadeIn 0.6s ease-out 0.65s forwards" : "none",
            opacity: hasAnimated ? 0 : 1
          }}>👑</div>
          <div className="decorative-icon" style={{ 
            position: "absolute", 
            top: "430px", 
            right: "200px", 
            fontSize: "2rem",
            animation: hasAnimated ? "fadeIn 0.6s ease-out 0.7s forwards" : "none",
            opacity: hasAnimated ? 0 : 1
          }}>✏️</div>
          <div className="decorative-icon" style={{ 
            position: "absolute", 
            top: "260px", 
            right: "150px", 
            fontSize: "2rem",
            animation: hasAnimated ? "fadeIn 0.6s ease-out 0.75s forwards" : "none",
            opacity: hasAnimated ? 0 : 1
          }}>🎨</div>
          <div className="decorative-icon" style={{ 
            position: "absolute", 
            top: "330px", 
            left: "30px", 
            fontSize: "2rem",
            animation: hasAnimated ? "fadeIn 0.6s ease-out 0.8s forwards" : "none",
            opacity: hasAnimated ? 0 : 1
          }}>🔗</div>
        </div>

        {/* Right Side - Text and Skills */}
        <div style={{ textAlign: "left" }}>
          <p 
            className="about-text"
            style={{ 
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#1e293b",
              marginBottom: "40px",
              animation: hasAnimated ? "fadeInUp 0.8s ease-out 1s forwards" : "none",
              opacity: hasAnimated ? 0 : 1
            }}
          >
           I’m a web developer passionate about creating clean, modern, and responsive web applications with React, HTML, CSS, and JavaScript. With a Bachelor’s degree in Marketing Management and completed Full-Stack & Front-End development courses, I combine technical expertise with a user-focused mindset to build interfaces that are intuitive, fast, and practical.
My marketing background gives me a unique perspective on designing applications that not only work flawlessly but also deliver meaningful experiences to users. I’m dedicated to continuous learning, aiming to expand my skills into backend development with Node.js, Express, and databases, and ultimately grow into a versatile full-stack developer.
Highly motivated, disciplined, and detail-oriented, I write clean, maintainable code and strive to deliver projects that add real value. </p>

          {/* Skills Section */}
          <div style={{ marginBottom: "40px" }}>
            <h3 
              className="skills-title"
              style={{ 
                fontSize: "3rem", 
                color: "#1e293b",
                marginBottom: "30px",
                animation: hasAnimated ? "fadeInUp 0.8s ease-out 1.5s forwards" : "none",
                opacity: hasAnimated ? 0 : 1,
                display: "flex",
                alignItems: "center",
                gap: "15px"
              }}
            >
              <img src={skillIcon} alt="Skills" style={{ width: "50px", height: "50px" }} />
              Skills
            </h3>

            <div className="skills-grid">
              {/* HTML & CSS */}
              <div 
                className="skill-item"
                style={{ 
                  animation: hasAnimated ? "fadeInUp 0.8s ease-out 1.7s forwards" : "none", 
                  opacity: hasAnimated ? 0 : 1 
                }}
              >
                <img src={htmlCssIcon} alt="HTML & CSS" className="skill-icon" />
                <p style={{ margin: 0, fontWeight: "600", color: "#1e293b", fontSize: "1rem" }}>HTML & CSS</p>
              </div>

              {/* JavaScript */}
              <div 
                className="skill-item"
                style={{ 
                  animation: hasAnimated ? "fadeInUp 0.8s ease-out 1.9s forwards" : "none", 
                  opacity: hasAnimated ? 0 : 1 
                }}
              >
                <img src={jsIcon} alt="JavaScript" className="skill-icon" />
                <p style={{ margin: 0, fontWeight: "600", color: "#1e293b", fontSize: "1rem" }}>JavaScript</p>
              </div>

              {/* React */}
              <div 
                className="skill-item"
                style={{ 
                  animation: hasAnimated ? "fadeInUp 0.8s ease-out 2.1s forwards" : "none", 
                  opacity: hasAnimated ? 0 : 1 
                }}
              >
                <img src={reactIcon} alt="React" className="skill-icon" />
                <p style={{ margin: 0, fontWeight: "600", color: "#1e293b", fontSize: "1rem" }}>React</p>
              </div>

              {/* Node.js */}
              <div 
                className="skill-item"
                style={{ 
                  animation: hasAnimated ? "fadeInUp 0.8s ease-out 2.3s forwards" : "none", 
                  opacity: hasAnimated ? 0 : 1 
                }}
              >
                <img src={nodeIcon} alt="Node.js" className="skill-icon" />
                <p style={{ margin: 0, fontWeight: "600", color: "#1e293b", fontSize: "1rem" }}>Node.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;