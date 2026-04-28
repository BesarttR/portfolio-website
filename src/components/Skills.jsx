import { useEffect, useRef } from 'react';

const icons = {
  react: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2.05" fill="#00D4FF"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D4FF" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D4FF" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D4FF" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  js: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E"/>
      <text x="12" y="17" textAnchor="middle" fill="#222" fontSize="8" fontWeight="bold" fontFamily="monospace">JS</text>
    </svg>
  ),
  html: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 2l1.5 17L12 21l7.5-2L21 2H3z" fill="#E44D26"/>
      <path d="M12 2v19l6.1-1.7L19.5 2H12z" fill="#F16529"/>
      <text x="12" y="15" textAnchor="middle" fill="#fff" fontSize="5.5" fontWeight="bold" fontFamily="monospace">HTML</text>
    </svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#3C873A"/>
      <text x="12" y="14.5" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold" fontFamily="monospace">JS</text>
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sb-g1" x1="4" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3ECF8E"/>
          <stop offset="100%" stopColor="#1a7a50"/>
        </linearGradient>
      </defs>
      <path d="M13.5 2.5L4 14h8l-1.5 7.5L21 10h-8l.5-7.5z" fill="url(#sb-g1)"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2 11.01L12.99 1.8a1.27 1.27 0 00-1.79 0L9.27 3.73l2.27 2.27a1.5 1.5 0 011.9 1.9l2.19 2.19a1.5 1.5 0 11-.9.9l-2.04-2.04v5.38a1.5 1.5 0 11-1.2-.02V8.76a1.5 1.5 0 01-.81-1.97L8.44 4.54 1.8 11.22a1.27 1.27 0 000 1.79l9.2 9.2a1.27 1.27 0 001.8 0l9.4-9.4a1.27 1.27 0 00.01-1.8z" fill="#F05032"/>
    </svg>
  ),
  vite: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5 3.5L13 21l-1.5-8.5L5 10l16.5-6.5z" fill="#646CFF"/>
      <path d="M13 21L9.5 6l-4.5 4 8 11z" fill="#BD34FE"/>
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="20" height="12" rx="2" stroke="#2D7FEA" strokeWidth="1.5"/>
      <path d="M7 12h10M12 9v6" stroke="#2D7FEA" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="6" cy="12" r="1" fill="#00D4FF"/>
      <circle cx="18" cy="12" r="1" fill="#00D4FF"/>
    </svg>
  ),
};

const tailwindIcon = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.667 1.715 1.215C13.29 10.48 14.21 11.4 16.5 11.4c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.667-1.715-1.215C15.21 6.92 14.29 6 12 6zm-4.5 5.7c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.667 1.715 1.215C8.79 16.18 9.71 17.1 12 17.1c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.667-1.715-1.215C10.71 12.62 9.79 11.7 7.5 11.7z" fill="#38BDF8"/>
  </svg>
);

const contentfulIcon = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#2478CC" opacity="0.15"/>
    <circle cx="8.5" cy="8.5" r="2.2" fill="#2478CC"/>
    <path d="M16.5 8.5a8 8 0 01-8 8" stroke="#2478CC" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M19 12a7 7 0 01-7 7" stroke="#2478CC" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5"/>
  </svg>
);

const SKILLS = [
  { name: 'React / Next.js',  icon: icons.react,    level: 87 },
  { name: 'Tailwind CSS',     icon: tailwindIcon,   level: 90 },
  { name: 'JavaScript',       icon: icons.js,       level: 88 },
  { name: 'Node.js',          icon: icons.node,     level: 70 },
  { name: 'Supabase',         icon: icons.supabase, level: 68 },
  { name: 'Contentful CMS',   icon: contentfulIcon, level: 72 },
  { name: 'Git & GitHub',     icon: icons.git,      level: 80 },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          ref.current?.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
          ref.current?.querySelectorAll('.skill-bar-fill').forEach(el => {
            el.style.width = el.dataset.level + '%';
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="reveal">
        <p className="section-label">Skills & Stack</p>
        <h2 className="section-title">Tools I build with</h2>
      </div>

      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <div
            className="skill-card reveal"
            key={s.name}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <span className="skill-card-icon skill-svg-icon">{s.icon}</span>
            <div className="skill-name">{s.name}</div>
            <div className="skill-bar-wrap">
              <div className="skill-bar-fill" data-level={s.level} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
