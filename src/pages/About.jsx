import { Link } from 'react-router-dom';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';
import AnimatedCounter from '../components/AnimatedCounter';

const values = [
  { num: '01', title: 'Clarity', desc: 'Design speaks in forms, not statements. Our job is to build the aesthetic clearly — without the noise the industry surrounds itself with.', delay: 0 },
  { num: '02', title: 'Precision', desc: 'We craft what we can verify. We design what we understand. Every decision we make is built on the foundation of material and shape.', delay: 0.1 },
  { num: '03', title: 'Longevity', desc: 'We are not interested in what is trending this week. We are interested in what will matter next decade. Real design is never short-term.', delay: 0.2 },
  { num: '04', title: 'Independence', desc: 'We are an independent creative studio. Our vision serves the work — not passing industry fads. We create what we believe in.', delay: 0 },
  { num: '05', title: 'Craft', desc: 'A silhouette is only as strong as its construction. We obsess over the micro-details so the macro-vision remains flawless.', delay: 0.1 },
  { num: '06', title: 'Discretion', desc: 'The best design does not need to shout to be seen. Styloom was built on the principle of quiet, undeniable presence.', delay: 0.2 },
];

const team = [
  { name: 'Arjun Mehta', role: 'Founder & Executive Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=85', delay: 0 },
  { name: 'Priya Nair', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=85', delay: 0.1 },
  { name: 'Luca Romano', role: 'Lead Stylist', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=85', delay: 0.2 },
  { name: 'Aiko Tanaka', role: 'Art Director', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=85', delay: 0.3 },
];

export default function About() {
  return (
    <TransitionWrapper>
      <div className="page-banner" data-ghost="CTR">
        <div className="banner-inner">
          <span className="banner-tag">02 / About</span>
          <h1 className="banner-title">The <em>Studio</em></h1>
          <p className="banner-sub">We craft timeless aesthetics. Six years of form, fabric, and visual direction.</p>
        </div>
      </div>

      <section id="about-story">
        <div className="story-grid">
          <Reveal className="story-left">
            <span className="sec-tag">— The Origin</span>
            <h2>We don't follow<br /><em>trends.</em><br />We ignore them.</h2>
            <p>Styloom Studio was built in 2020 out of a desire for permanence. Fashion was moving too fast, driven by seasonal hype and fleeting algorithms. We wanted to build something that lasts.</p>
            <p>We set out to create a studio focused entirely on the foundation of modern design: conceptual styling, editorial direction, and visual storytelling that endures beyond a single season.</p>
            <p>The name "Styloom" represents the loom of style — the structural framework upon which true aesthetic vision is woven. That is what we do: we build the foundation.</p>
            <Link to="/collections" className="btn-ghost" style={{ marginTop: '16px' }}>Explore Archives <i className="ri-arrow-right-line"></i></Link>
          </Reveal>
          <Reveal className="story-right delay-1" delay={0.15}>
            <div className="story-img-main">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85" alt="Styloom Studio" />
            </div>
            <div className="story-badge"><h3>2020</h3><p>Founded</p></div>
          </Reveal>
        </div>
      </section>

      <div id="about-stats">
        <Reveal className="about-stat" delay={0}>
          <AnimatedCounter value={6} suffix="+" />
          <p>Years active</p>
        </Reveal>
        <Reveal className="about-stat" delay={0.1}>
          <AnimatedCounter value={200} suffix="+" />
          <p>Campaigns styled</p>
        </Reveal>
        <Reveal className="about-stat" delay={0.2}>
          <AnimatedCounter value={40} suffix="+" />
          <p>Global clients</p>
        </Reveal>
        <Reveal className="about-stat" delay={0.3}>
          <AnimatedCounter value={12} suffix="" />
          <p>Design awards</p>
        </Reveal>
      </div>

      <section id="about-values">
        <Reveal className="sec-header">
          <span className="sec-tag">— Our Principles</span>
          <h2>What we <em>believe</em></h2>
          <div className="sec-line"></div>
        </Reveal>
        <div className="values-grid">
          {values.map((v, i) => (
            <Reveal key={i} className={`value-item ${v.delay > 0 ? `d${v.delay * 10}` : ''}`} delay={v.delay}>
              <div className="value-number">{v.num}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about-team">
        <Reveal className="sec-header">
          <span className="sec-tag">— The People</span>
          <h2>The <em>Studio Team</em></h2>
          <div className="sec-line"></div>
        </Reveal>
        <div className="team-grid">
          {team.map((t, i) => (
            <Reveal key={i} className={`team-card ${t.delay > 0 ? `d${t.delay * 10}` : ''}`} delay={t.delay}>
              <div className="team-img"><img src={t.img} alt={t.name} /></div>
              <p className="team-name">{t.name}</p>
              <p className="team-role">{t.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal id="cta-section">
        <h2>Create with<br /><em>us.</em></h2>
        <Link to="/journal" className="btn-solid inv">View Our Process <i className="ri-arrow-right-line"></i></Link>
      </Reveal>
    </TransitionWrapper>
  );
}
