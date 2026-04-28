import { useEffect, useRef } from 'react';
import makceniThumb from '../assets/makceni.png';
import bbsThumb from '../assets/bbs.png';
import signinThumb from '../assets/signin.png';
import accountantThumb from '../assets/accountant.jpg';

const PROJECTS = [
  {
    title: 'MakCeni',
    desc: 'Helps drivers compare fuel & product prices across North Macedonia — real-time scraping, gas station maps, Safe City speed camera alerts, and a market data dashboard.',
    thumb: makceniThumb,
    tech: 'Next.js · Cheerio · Leaflet · Vercel',
    live: 'https://besarttr.github.io/makceni/',
    code: 'https://github.com/BesarttR/makceni',
    featured: true,
  },
  {
    title: 'Accountants Web App',
    desc: 'Responsive, multilingual accountant platform built with React and Vite — clean interface for financial management with i18n support.',
    thumb: accountantThumb,
    tech: 'React · Vite · i18n',
    live: 'https://besarttr.github.io/accountant-project/',
    code: 'https://github.com/BesarttR/accountant-project',
  },
  {
    title: 'BBS.com Clone',
    desc: 'Pixel-perfect homepage clone of BBS.com built during an internship — demonstrates layout accuracy, component architecture, and SASS styling.',
    thumb: bbsThumb,
    tech: 'React · SASS · JavaScript',
    live: 'https://besarttr.github.io/my-bbs-project/',
    code: 'https://github.com/BesarttR/my-bbs-project',
  },
  {
    title: 'Sign In / Sign Up',
    desc: 'A polished React authentication UI — responsive forms with validation, clean design, and seamless UX flow between register and login states.',
    thumb: signinThumb,
    tech: 'React · HTML · SASS',
    live: 'https://besarttr.github.io/login-project/',
    code: 'https://github.com/BesarttR/login-project',
  },
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section projects-section" id="projects" ref={ref}>
      <div className="reveal">
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">Projects I've <span>shipped</span></h2>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div
            className="project-card reveal"
            key={p.title}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="project-corner" />
            <img src={p.thumb} alt={p.title} className="project-thumb" />
            <div className="project-body">
              <span className="project-tech-tag">{p.tech}</span>
              <h3 className="project-title">
                {p.title}
                {p.featured && (
                  <span style={{
                    marginLeft: 10,
                    fontSize: '0.6rem',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-cyan)',
                    border: '1px solid var(--accent-cyan)',
                    padding: '2px 7px',
                    verticalAlign: 'middle',
                  }}>Featured</span>
                )}
              </h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-links">
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live Demo
                </a>
                <a href={p.code} target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
