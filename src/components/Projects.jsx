import { useEffect, useRef } from 'react';
import raceroomThumb from '../assets/raceroom.png';
import biropropThumb from '../assets/biropro.png';
import makceniThumb from '../assets/makceni.png';
import bbsThumb from '../assets/bbs.png';
import accountantThumb from '../assets/accountant.jpg';
import signinThumb from '../assets/signin.png';

const PROJECTS = [
  {
    title: 'Race Room',
    desc: 'Fully functional e-commerce platform built for the modern web — featuring product listings, user authentication, secure checkout, payment integration, and a complete admin panel for managing orders, inventory, and customers. Race Room was used as an example store name.',
    thumb: raceroomThumb,
    tech: 'Next.js · Tailwind · NestJS · Supabase',
    live: 'https://race-room-blue.vercel.app',
    featured: true,
  },
  {
    title: 'BiroPro',
    desc: 'Modern accounting & bookkeeping SaaS built for Macedonian firms — complete with a professional landing page, secure admin panel, and multi-user workspace where company owners can onboard and manage their entire team inside the platform.',
    thumb: biropropThumb,
    tech: 'Next.js · Tailwind · Supabase',
    live: 'https://biropro.vercel.app',
    featured: true,
  },
  {
    title: 'MakCeni',
    desc: 'Helps drivers compare fuel & product prices across North Macedonia — real-time scraping, gas station maps, Safe City speed camera alerts, and a live market data dashboard.',
    thumb: makceniThumb,
    tech: 'Next.js · Cheerio · Leaflet · Vercel',
    live: 'https://makceni.mk/',
  },
  {
    title: 'Accountant Firm Landing Page',
    desc: 'Professional landing page for an accountant firm — clean, modern design with multilingual support, service showcase, and contact section.',
    thumb: accountantThumb,
    tech: 'React · Vite · i18n',
    live: 'https://accountant-project-uhs3.vercel.app',
  },
  {
    title: 'BBS.com Clone',
    desc: 'Pixel-perfect homepage clone of BBS.com built during an internship — demonstrates layout accuracy, component architecture, and SASS styling.',
    thumb: bbsThumb,
    tech: 'React · SASS · JavaScript',
    live: 'https://besarttr.github.io/my-bbs-project/',
  },
  {
  title: 'Sign In / Sign Up UI',
  desc: 'Polished authentication UI — responsive forms with validation, clean modern design, and seamless UX flow between register and login states.',
  thumb: signinThumb,
  tech: 'React · HTML · SASS',
  live: 'https://besarttr.github.io/login-project/',
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}