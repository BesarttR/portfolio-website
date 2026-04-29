import { useEffect, useRef, useState } from 'react';

const IconPin = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#00D4FF"/>
  </svg>
);
const IconBriefcase = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="20" height="13" rx="2" stroke="#2D7FEA" strokeWidth="1.5"/>
    <path d="M16 8V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#2D7FEA" strokeWidth="1.5"/>
    <line x1="2" y1="14" x2="22" y2="14" stroke="#2D7FEA" strokeWidth="1" opacity="0.5"/>
  </svg>
);
const IconRocket = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 7 6 7 13h10c0-7-5-11-5-11z" fill="#2D7FEA" opacity="0.8"/>
    <path d="M7 13c0 2 1 3 2 4l3 3 3-3c1-1 2-2 2-4" stroke="#2D7FEA" strokeWidth="1.2" fill="none"/>
    <circle cx="12" cy="10" r="1.5" fill="#00D4FF"/>
    <path d="M9 17l-2 3M15 17l2 3" stroke="#2D7FEA" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const IconCap = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L2 9l10 6 10-6-10-6z" fill="#2D7FEA"/>
    <path d="M6 12v5c0 2 2.7 4 6 4s6-2 6-4v-5" stroke="#2D7FEA" strokeWidth="1.5" fill="none"/>
    <line x1="20" y1="9" x2="20" y2="14" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const FULL_TEXT = `Full-Stack Web Developer with a sharp focus on Next.js and Tailwind CSS — my primary weapons for building fast, scalable, and visually refined web applications. I deliver pixel-perfect interfaces backed by solid architecture, whether that's a high-performance marketing site, a dynamic web app, or a headless CMS integration via Contentful.

With a background in Marketing Management and completed Full-Stack & Front-End development programs, I bring a rare combination: technical depth and product instinct. I understand both how to build it and why it should be built that way — from component structure to conversion-focused UX.

My stack spans React, Next.js, Tailwind CSS, Node.js, Supabase, and REST APIs. I'm currently expanding into Contentful CMS development, helping clients build content-rich platforms that are easy to manage and impossible to outgrow.`;

const STATS = [
  { num: '6+', label: 'Projects Shipped' },
  { num: '8+', label: 'Technologies' },
  { num: '100%', label: 'Remote Ready' },
  { num: '2+', label: 'Years Experience' },
];

function StatCard({ num, label, visible, delay }) {
  const [count, setCount] = useState('0');

  useEffect(() => {
    if (!visible) return;
    const isPercent = num.includes('%');
    const isPlus = num.includes('+');
    const target = parseInt(num);

    if (isNaN(target)) {
      setCount(num);
      return;
    }
    let current = 0;
    const increment = Math.ceil(target / 30);
    const timer = setTimeout(() => {
      const tick = setInterval(() => {
        current = Math.min(current + increment, target);
        setCount(current + (isPercent ? '%' : isPlus ? '+' : ''));
        if (current >= target) clearInterval(tick);
      }, 40);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, num, delay]);

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      padding: '28px 24px',
      textAlign: 'center',
      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
      transition: 'border-color 0.2s, background 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--border-bright)';
      e.currentTarget.style.background = 'var(--bg-card-hover)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.background = 'var(--bg-card)';
    }}
    >
      <div style={{
        fontSize: '2.4rem',
        fontWeight: 800,
        background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
        marginBottom: 10,
      }}>
        {visible ? count : '0'}
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
      }}>
        {label}
      </div>
    </div>
  );
}

function TypewriterText({ text, isVisible }) {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);
  const timerRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || startedRef.current) return;
    startedRef.current = true;

    const CHARS_PER_TICK = 2;
    const DELAY_MS = 18;

    const tick = () => {
      indexRef.current = Math.min(indexRef.current + CHARS_PER_TICK, text.length);
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current < text.length) {
        timerRef.current = setTimeout(tick, DELAY_MS);
      }
    };

    timerRef.current = setTimeout(tick, 300);
    return () => clearTimeout(timerRef.current);
  }, [isVisible, text]);

  const paragraphs = displayed.split('\n\n');

  return (
    <>
      {paragraphs.map((para, i) => (
        <p key={i} className="about-text">
          {para}
          {i === paragraphs.length - 1 && indexRef.current < text.length && (
            <span className="typewriter-cursor" />
          )}
        </p>
      ))}
    </>
  );
}

export default function About() {
  const ref = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setTextVisible(true);
          setStatsVisible(true);
          sectionObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const revealObserver = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.05 }
    );

    if (ref.current) sectionObserver.observe(ref.current);
    ref.current?.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <section className="section about-section" id="about" ref={ref}>
      <div className="reveal">
        <p className="section-label">About me</p>
        <h2 className="section-title">Building with purpose,<br /><span>shipping with craft</span></h2>
      </div>

      <div className="about-grid">
        <div>
          <div className="reveal" style={{ transitionDelay: '0.1s', marginBottom: '36px' }}>
            <TypewriterText text={FULL_TEXT} isVisible={textVisible} />
          </div>

          <div className="about-cards reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="about-card">
              <span className="about-card-icon">{IconCap}</span>
              <div className="about-card-title">Education</div>
              <div className="about-card-sub">Marketing Management · SEEU</div>
            </div>
            <div className="about-card">
              <span className="about-card-icon">{IconPin}</span>
              <div className="about-card-title">Location</div>
              <div className="about-card-sub">Skopje, North Macedonia</div>
            </div>
            <div className="about-card">
              <span className="about-card-icon">{IconBriefcase}</span>
              <div className="about-card-title">Focus</div>
              <div className="about-card-sub">Next.js · Tailwind · Contentful</div>
            </div>
            <div className="about-card">
              <span className="about-card-icon">{IconRocket}</span>
              <div className="about-card-title">Status</div>
              <div className="about-card-sub">Open to opportunities</div>
            </div>
          </div>
        </div>

        <div className="about-right reveal" style={{ transitionDelay: '0.2s' }}>
          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            {STATS.map((s, i) => (
              <StatCard key={s.label} num={s.num} label={s.label} visible={statsVisible} delay={i * 150} />
            ))}
          </div>

          {/* Services block */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderLeft: '3px solid var(--accent-blue)',
            padding: '24px',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent-blue)',
              marginBottom: 16,
            }}>
              What I offer
            </div>
            {[
              'Next.js Web Applications',
              'Tailwind CSS UI Development',
              'Contentful CMS Integration',
              'REST API Development',
              'Responsive & Mobile-first Design',
            ].map(service => (
              <div key={service} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 0',
                borderBottom: '1px solid var(--border)',
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
              }}>
                <span style={{ color: 'var(--accent-cyan)', fontSize: '0.7rem' }}>▹</span>
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}