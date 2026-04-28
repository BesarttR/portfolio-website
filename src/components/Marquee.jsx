const ITEMS = [
  'React', 'Next.js', 'Node.js', 'JavaScript', 'HTML & CSS',
  'Vite', 'MySQL', 'REST APIs', 'Git & GitHub', 'Responsive Design',
  'UI / UX', 'Vercel', 'React', 'Next.js', 'Node.js', 'JavaScript',
  'HTML & CSS', 'Vite', 'MySQL', 'REST APIs', 'Git & GitHub',
  'Responsive Design', 'UI / UX', 'Vercel',
];

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {ITEMS.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-sep" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
