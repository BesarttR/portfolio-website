export function Nav() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className="nav">
      <a href="#home" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('home'); }}>
        BR<span>.</span>dev
      </a>
      <ul className="nav-links">
        {[['about','About'], ['skills','Skills'], ['projects','Projects'], ['experience','Experience']].map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id); }}>{label}</a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="nav-cta"
        onClick={e => { e.preventDefault(); scrollTo('contact'); }}
      >
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
