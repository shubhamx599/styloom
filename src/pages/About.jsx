import { Link } from 'react-router-dom';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';
import AnimatedCounter from '../components/AnimatedCounter';

const values = [
  { num: '01', title: 'Clarity', desc: 'Fashion speaks in signals, not statements. Our job is to translate the signal clearly — without the noise the industry surrounds itself with.', delay: 0 },
  { num: '02', title: 'Precision', desc: 'We track what we can verify. We analyse what we understand. We do not speculate. Every trend call we make is built on evidence from the runway, the street, and the studio.', delay: 0.1 },
  { num: '03', title: 'Perspective', desc: 'Fashion means different things in different cities. Our intelligence is built from 40+ cities globally, because the same silhouette reads differently in Delhi than it does in Paris.', delay: 0.2 },
  { num: '04', title: 'Independence', desc: 'We are not affiliated with any label, brand, or house. Our analysis serves the reader — not the industry. We call what we see, not what we\'re paid to say.', delay: 0 },
  { num: '05', title: 'Longevity', desc: 'We are not interested in what is trending this week. We are interested in what will matter next season — and the one after that. Real fashion intelligence is never short-term.', delay: 0.1 },
  { num: '06', title: 'Access', desc: 'The best fashion intelligence should not require industry credentials to access. CONTOUR was built to give serious readers — wherever they are — the same depth as an industry insider.', delay: 0.2 },
];

const team = [
  { name: 'Arjun Mehta', role: 'Founder & Editor-in-Chief', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=85', delay: 0 },
  { name: 'Priya Nair', role: 'Head of Trend Intelligence', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=85', delay: 0.1 },
  { name: 'Luca Romano', role: 'Runway Correspondent', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=85', delay: 0.2 },
  { name: 'Aiko Tanaka', role: 'Asia Pacific Editor', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=85', delay: 0.3 },
];

export default function About() {
  return (
    <TransitionWrapper>
      <div className="page-banner" data-ghost="CTR">
        <div className="banner-inner">
          <span className="banner-tag">02 / About</span>
          <h1 className="banner-title">The <em>Intelligence</em></h1>
          <p className="banner-sub">We read fashion so you can understand it. Six years of signal, pattern, and direction.</p>
        </div>
      </div>

      <section id="about-story">
        <div className="story-grid">
          <Reveal className="story-left">
            <span className="sec-tag">— The Origin</span>
            <h2>We don't predict<br /><em>trends.</em><br />We decode them.</h2>
            <p>CONTOUR was built in 2020 out of frustration. Fashion was happening everywhere — on runways, on streets, in studios — but the intelligence behind it was locked inside industry circles most people couldn't access.</p>
            <p>We set out to change that. To build a platform that reads the season, translates the runway, and tells the story of what fashion is actually doing — and why.</p>
            <p>The name "Contour" is deliberate. A contour is an outline — the shape of something before you can see its full form. That's what we do: we show you the shape of what's next before everyone else can see it.</p>
            <Link to="/collections" className="btn-ghost" style={{ marginTop: '16px' }}>Explore SS26 <i className="ri-arrow-right-line"></i></Link>
          </Reveal>
          <Reveal className="story-right d1" delay={0.15}>
            <div className="story-img-main">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85" alt="Contour Studio" />
            </div>
            <div className="story-badge"><h3>2020</h3><p>Founded</p></div>
          </Reveal>
        </div>
      </section>

      <div id="about-stats">
        <Reveal className="astat" delay={0}>
          <AnimatedCounter value={6} suffix="+" />
          <p>Years reading fashion</p>
        </Reveal>
        <Reveal className="astat" delay={0.1}>
          <AnimatedCounter value={200} suffix="+" />
          <p>Editorials published</p>
        </Reveal>
        <Reveal className="astat" delay={0.2}>
          <AnimatedCounter value={40} suffix="+" />
          <p>Cities tracked</p>
        </Reveal>
        <Reveal className="astat" delay={0.3}>
          <AnimatedCounter value={5} suffix="" />
          <p>Runway seasons covered</p>
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
            <Reveal key={i} className={`val-item ${v.delay > 0 ? `d${v.delay * 10}` : ''}`} delay={v.delay}>
              <div className="val-num">{v.num}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about-team">
        <Reveal className="sec-header">
          <span className="sec-tag">— The People</span>
          <h2>The <em>Edit Room</em></h2>
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
        <h2>Read the season<br /><em>with us.</em></h2>
        <Link to="/journal" className="btn-solid inv">Open the Journal <i className="ri-arrow-right-line"></i></Link>
      </Reveal>
    </TransitionWrapper>
  );
}
