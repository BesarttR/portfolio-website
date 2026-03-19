import makceniThumbnail from "../assets/makceni.png";
import bbsThumbnail from "../assets/bbs.png";
import signinThumbnail from "../assets/signin.png";
import accountantThumbnail from "../assets/accountant.jpg";

const projects = [
  {
    title: "Sign In/Sign Up page",
    description:
      "A simple React app for user registration and login, with responsive design and a clean UI.",
    thumbnail: signinThumbnail,
    techStack: "HTML, JavaScript, SASS, React",
    liveUrl: "https://besarttr.github.io/login-project/",
    codeUrl: "https://github.com/BesarttR/login-project",
  },
  {
    title: "MakCeni",
    description:
      "Makceni helps you compare prices of everyday products across North Macedonia so you can shop smart and save." ,
    thumbnail: makceniThumbnail,
    techStack: "HTML, JavaScript, SASS, React",
    liveUrl: "https://besarttr.github.io/makceni/",
    codeUrl: "https://github.com/BesarttR/makceni",
  },
  {
    title: "BBS.com (clone website)",
    description:
      "BBS.com homepage clone built to practice while doing an internship at the company that maintains the original BBS.com",
    thumbnail: bbsThumbnail,
    techStack: "HTML, JavaScript, SASS, React",
    liveUrl:
      "https://besarttr.github.io/my-bbs-project/",
    codeUrl: "https://github.com/BesarttR/my-bbs-project",
  },
    {
    title: "Accountants webapplication",
    description:
      "Built a responsive, multilingual accountant web app with React and Vite, delivering a clean and efficient interface for financial management." ,
    thumbnail: accountantThumbnail,
    techStack: "React, React DOM, i18n for multilingual support.",
    liveUrl: "https://besarttr.github.io/accountant-project/",
    codeUrl: "https://github.com/BesarttR/accountant-project",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "60px 40px",
      }}
    >
      <style>
        {`
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            max-width: 1400px;
            margin: 0 auto;
          }

          .project-card {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            padding-bottom: 40px;
          }

          .project-card::after {
            content: "";
            display: block;
            width: 100%;
            height: 4px;
            margin-top: 20px;
            background: linear-gradient(
              to right,
              transparent 0%,
              #0891b2 25%,
              #0891b2 75%,
              transparent 100%
            );
            border-radius: 2px;
          }

          .project-thumbnail {
            width: 100%;
            height: 220px;
            overflow: hidden;
            border-radius: 16px;
            margin-bottom: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }

          .project-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            background-color: #f9fafb;
          }

          .projects-title {
            font-size: 3rem;
            color: #111827;
            margin-bottom: 50px;
            text-align: center;
            font-weight: 700;
          }

          .project-title {
            font-size: 1.5rem;
            color: #0891b2;
            margin-bottom: 12px;
            font-weight: 600;
          }

          .project-description {
            font-size: 0.95rem;
            color: #6b7280;
            line-height: 1.6;
            margin-bottom: 16px;
          }

          .project-tech {
            font-size: 0.9rem;
            color: #374151;
            margin-bottom: 20px;
          }

          .project-links {
            display: flex;
            gap: 20px;
            align-items: center;
            flex-wrap: wrap;
          }

          .project-link {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #111827;
            text-decoration: underline;
            font-size: 0.95rem;
            font-weight: 500;
          }

          @media (max-width: 768px) {
            .projects-grid {
              grid-template-columns: 1fr;
              gap: 50px;
              padding: 0 20px;
            }

            .projects-title {
              font-size: 2.5rem;
              margin-bottom: 40px;
            }

            .project-thumbnail {
              height: 200px;
            }
          }

          @media (max-width: 480px) {
            .projects-grid {
              gap: 40px;
              padding: 0;
            }

            .projects-title {
              font-size: 2rem;
              margin-bottom: 30px;
            }

            .project-thumbnail {
              height: 180px;
              border-radius: 12px;
            }

            .project-title {
              font-size: 1.25rem;
            }

            .project-description {
              font-size: 0.9rem;
            }

            .project-tech {
              font-size: 0.85rem;
            }

            .project-link {
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-thumbnail">
              <img src={project.thumbnail} alt={project.title} />
            </div>

            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <p className="project-tech">
              <strong>Tech stack:</strong> {project.techStack}
            </p>

            <div className="project-links">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Live Preview
              </a>

              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
