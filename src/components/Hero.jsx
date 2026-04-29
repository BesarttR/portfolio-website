import { useEffect, useRef } from 'react';

const CODE_LINES = [
  { token: 'const', type: 'keyword' },
  { token: ' besart', type: 'var' },
  { token: ' = {', type: 'bracket' },
  { token: '\n  role:', type: 'key' },
  { token: ' "Full-Stack Web Developer"', type: 'string' },
  { token: ',\n  stack:', type: 'key' },
  { token: ' ["Next.js"', type: 'string' },
  { token: ', "Tailwind"', type: 'string' },
  { token: ', "Contentful"]', type: 'string' },
  { token: ',\n  location:', type: 'key' },
  { token: ' "Skopje, MK"', type: 'string' },
  { token: ',\n  available:', type: 'key' },
  { token: ' true', type: 'bool' },
  { token: ',\n  hire:', type: 'key' },
  { token: ' () => ', type: 'plain' },
  { token: '"let\'s talk"', type: 'string' },
  { token: '\n}', type: 'bracket' },
];

const COLORS = {
  keyword: '#C792EA',
  var:     '#82AAFF',
  bracket: '#F0F6FF',
  key:     '#00D4FF',
  string:  '#C3E88D',
  bool:    '#F78C6C',
  plain:   '#8BA3C9',
};

function CodeBlock() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let fullText = '';
    CODE_LINES.forEach(l => { fullText += l.token; });

    let charIndex = 0;
    let lineIndex = 0;
    let lineCharIndex = 0;
    const rendered = CODE_LINES.map(() => '');

    const tick = () => {
      if (lineIndex >= CODE_LINES.length) return;
      const line = CODE_LINES[lineIndex];
      lineCharIndex++;
      rendered[lineIndex] = line.token.slice(0, lineCharIndex);

      // Build HTML
      el.innerHTML = rendered.map((text, i) => {
        const color = COLORS[CODE_LINES[i].type] || '#F0F6FF';
        return `<span style="color:${color}">${text.replace(/\n/g, '<br/>&nbsp;&nbsp;')}</span>`;
      }).join('') + '<span class="typewriter-cursor"></span>';

      if (lineCharIndex >= line.token.length) {
        lineIndex++;
        lineCharIndex = 0;
      }

      charIndex++;
      if (charIndex < fullText.length + CODE_LINES.length) {
        setTimeout(tick, 28);
      }
    };

    const delay = setTimeout(tick, 800);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div style={{
      background: 'rgba(10, 22, 40, 0.9)',
      border: '1px solid rgba(45, 127, 234, 0.3)',
      borderRadius: '2px',
      padding: '32px 36px',
      fontFamily: 'var(--font-mono)',
      fontSize: '1rem',
      lineHeight: '2',
      position: 'relative',
      minWidth: '420px',
      boxShadow: '0 0 60px rgba(45, 127, 234, 0.1), inset 0 0 40px rgba(0,0,0,0.3)',
    }}>
      {/* Terminal dots */}
      <div style={{ display: 'flex', gap: 7, marginBottom: 24 }}>
        {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
          <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.8 }} />
        ))}
      </div>
      <div ref={ref} />
    </div>
  );
}

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
          <a href="/Besart_Ramadani_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            Preview CV
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 }}>
          <CodeBlock />
       <div className="hero-badge" style={{ position: 'static', alignSelf: 'flex-start' }}>
  <div className="hero-badge-dot" />
  <div className="hero-badge-text">
    <strong>Open</strong> to roles & freelance
  </div>
</div>
        </div>
      </div>
    </section>
  );
}