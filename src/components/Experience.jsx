import { useEffect, useRef } from 'react';

const TIMELINE = [
  {
    date: 'Present',
    role: 'Junior Full-Stack Web Developer',
    company: 'Sim Sector Studios',
    tag: 'Current',
    desc: 'Joined Sim Sector Studios as a Junior Full-Stack Developer — building and maintaining production-grade web applications using Next.js, Tailwind CSS, and Supabase. Contributing to client projects across industries, implementing Contentful CMS integrations, and shipping responsive, performance-optimised interfaces end-to-end.',
  },
  {
    role: 'Frontend Intern',
    company: 'Sim Sector Studios',
    tag: null,
    desc: 'Completed a hands-on frontend internship at Sim Sector Studios. Worked directly on real client interfaces — translating designs into clean, responsive React components with Tailwind CSS. Gained experience in collaborative git workflows, code reviews, and shipping production-ready UI under senior guidance.',
  },
  {
    role: 'Full-Stack Development',
    company: 'Bootcamp & Online Courses · Self-directed',
    tag: null,
    desc: 'Completed intensive Full-Stack and Front-End development programs covering React, Next.js, Node.js, Express, REST APIs, and modern JavaScript. Built several production-grade side projects including makceni.mk — a real-time fuel price platform for Macedonian drivers deployed on Vercel.',
  },
  {
    role: "Bachelor's — Marketing Management",
    company: 'South East European University, Tetovo',
    tag: null,
    desc: 'Graduated with a degree in Marketing Management from SEEU. Combined business strategy and communication knowledge with self-taught technical skills — creating a rare edge for building products that are both technically solid and genuinely user-focused.',
  },
];

export default function Experience() {
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
    <section className="section experience-section" id="experience" ref={ref}>
      <div className="reveal">
        <p className="section-label">Experience & Education</p>
        <h2 className="section-title">My <span>journey</span></h2>
      </div>

      <div className="timeline">
        {TIMELINE.map((item, i) => (
          <div
            className="timeline-item reveal"
            key={i}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className="timeline-dot" style={item.tag ? { background: 'var(--accent-cyan)', boxShadow: '0 0 0 4px rgba(0,212,255,0.2)' } : {}} />
          
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-company">{item.company}</div>
            <p className="timeline-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
