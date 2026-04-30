import { useEffect, useState } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <a href="#home" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('home'); }}>
      B.R<span>—</span>Web Developer
      </a>
      <ul className="nav-links">
        {[['about','About'], ['skills','Skills'], ['projects','Projects'], ['experience','Experience']].map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id); }}>{label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta" onClick={e => { e.preventDefault(); scrollTo('contact'); }}>
        Hire Me
      </a>
    </nav>
  );
}

export function Footer() {
  return (
    <>
      <div className="glow-line" />
      <footer className="footer">
        <span className="footer-copy">
          © 2026 <span>Besart Ramadani</span>. All rights reserved.
        </span>
      </footer>
    </>
  );
}