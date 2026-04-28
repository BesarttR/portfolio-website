import { useEffect, useRef } from 'react';

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D7FEA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
  </svg>
);
const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D7FEA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#2D7FEA">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
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
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="reveal">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's build something<br /><span>together</span></h2>
      </div>

      <div className="contact-grid">
        <div>
          <p className="contact-intro reveal" style={{ transitionDelay: '0.1s' }}>
            I'm currently open to freelance projects and full-time opportunities.
            Whether you have a project in mind, want to collaborate, or just want to say hello
            — my inbox is open.
          </p>

          <div className="contact-links reveal" style={{ transitionDelay: '0.2s' }}>
            <a href="mailto:besartr1995@gmail.com" className="contact-link-item">
              <div className="contact-link-icon"><MailIcon /></div>
              <div>
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">besartr1995@gmail.com</span>
              </div>
            </a>

            <a
              href="https://wa.me/38970424069"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
            >
              <div className="contact-link-icon"><ChatIcon /></div>
              <div>
                <span className="contact-link-label">WhatsApp</span>
                <span className="contact-link-value">+389 70 424 069</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/besart-ramadani-5289bb2a3"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
            >
              <div className="contact-link-icon"><LinkedInIcon /></div>
              <div>
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value">Besart Ramadani</span>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input className="form-input" type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="Tell me about your project..." />
          </div>
          <button className="btn-primary" style={{ alignSelf: 'flex-start' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
