import profileImage from '../assets/Besart6.png';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home">
      <div className="hero-radial" />
      <div className="hero-radial-2" />

      <div className="hero-content">
        <p className="hero-eyebrow">Besart Ramadani — Skopje, MK</p>

        <h1 className="hero-title">
          Full‑Stack<br />
          <span className="accent">Web Developer</span>
        </h1>

        <p className="hero-subtitle">Next.js · Tailwind · Contentful</p>

        <p className="hero-desc">
          I build immersive, fast, and beautiful web applications. Combining
          clean code with user‑focused design to create digital products that
          actually matter.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="5 12 12 5 19 12"/><line x1="12" y1="5" x2="12" y2="19"/>
            </svg>
            View Projects
          </button>
          <a
            href="/Besart_Ramadani_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            Preview CV
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image-frame">
          <img src={profileImage} alt="Besart Ramadani" />

          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <div className="hero-badge-text">
              <strong>Available</strong> for freelance
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">8+</span>
              <span className="hero-stat-lbl">Projects</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">2+</span>
              <span className="hero-stat-lbl">Years Exp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
