import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';
import AnimatedCounter from '../components/AnimatedCounter';
import { useScramble } from '../utils/useScramble';

export default function Home() {
  const scrambledTag = useScramble("Styloom Studio · Archival Portfolio", 350);
  
  // Parallax for hero video
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 1000], [0, 180]);

  // Glow effect on hero
  const heroRef = useRef(null);
  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    heroRef.current.style.setProperty('--lx', `${x.toFixed(1)}%`);
    heroRef.current.style.setProperty('--ly', `${y.toFixed(1)}%`);
  };

  return (
    <TransitionWrapper>
      {/* HERO SECTION */}
      <section id="hero" ref={heroRef} onMouseMove={handleHeroMouseMove}>
        <div id="hero-left">
          <div id="hero-meta">
            <div id="hero-meta-line"></div>
            <span id="hero-tag">{scrambledTag}</span>
          </div>

          <div id="hero-titles">
            <div className="h-line"><div className="h-inner t-si">The</div></div>
            <div className="h-line i1"><div className="h-inner t-sb">SHAPE</div></div>
            <div className="h-line"><div className="h-inner t-mod">of modern design —</div></div>
            <div className="h-line i2"><div className="h-inner t-si">WORKS</div></div>
          </div>

          <div id="hero-bottom">
            <p id="hero-desc">
              Creative direction.<br />
              Conceptual styling.<br />
              Editorial perspective.
            </p>
            <div id="hero-actions">
              <Link to="/collections" id="hero-cta" className="magnetic">
                <div id="hero-cta-body">Explore Archives</div>
                <div id="hero-cta-icon"><i className="ri-arrow-right-line"></i></div>
              </Link>
            </div>
            <div id="hero-scroll">
              <div id="scroll-line"></div>
              <span>Scroll</span>
            </div>
          </div>
        </div>

        <div id="hero-right">
          <div id="hero-video-frame">
            <motion.div style={{ width: '100%', height: '100%', y: videoY }}>
              <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src="https://assets.mixkit.co/videos/44556/44556-720.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <div id="vid-top">Styloom Studio</div>
            <div id="vid-bot">
              <span>Editorial</span>
              <span>© Studio</span>
            </div>
            <div id="vid-side">A R C H I V A L   W O R K S</div>
          </div>
        </div>
      </section>

      {/* TREND STRIP */}
      <div className="trend-strip">
        <div className="trend-track">
          <span>Styloom</span><span className="acc">✦</span>
          <span>Timeless Aesthetic Direction</span><span className="acc">✦</span>
          <span>Form & Fabric</span><span className="acc">✦</span>
          <span>Creative Studio</span><span className="acc">✦</span>
          <span>Conceptual Styling</span><span className="acc">✦</span>
          <span>Styloom</span><span className="acc">✦</span>
          <span>Timeless Aesthetic Direction</span><span className="acc">✦</span>
          <span>Form & Fabric</span><span className="acc">✦</span>
          <span>Creative Studio</span><span className="acc">✦</span>
          <span>Conceptual Styling</span><span className="acc">✦</span>
        </div>
      </div>

      {/* EDITORIALS */}
      <section id="editorials">
        <Reveal className="sec-header">
          <span className="sec-tag">— 01 / Selected Works</span>
          <h2>Studio <em>Collections</em></h2>
          <div className="sec-line"></div>
        </Reveal>

        <div className="ed-grid">
          <Reveal className="ed-item ed-item-lg">
            <div className="ed-img">
              <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=85" alt="Void Structure" />
            </div>
            <div className="ed-info">
              <p className="ed-season">Campaign — 04</p>
              <h3>Void Structure</h3>
              <p>The most radical silhouette asks nothing of you. It simply exists — precise, unhurried, complete.</p>
              <Link to="/collections" className="ed-link">View Project <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>

          <Reveal className="ed-item ed-item-sm d1" delay={0.1}>
            <div className="ed-img">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=85" alt="White Tension" />
            </div>
            <div className="ed-info">
              <p className="ed-season">Capsule — 03</p>
              <h3>White Tension</h3>
              <Link to="/collections" className="ed-link">View <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>

          <Reveal className="ed-item ed-item-sm d2" delay={0.2}>
            <div className="ed-img">
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85" alt="Hard Geometry" />
            </div>
            <div className="ed-info">
              <p className="ed-season">Preview — 02</p>
              <h3>Hard Geometry</h3>
              <Link to="/collections" className="ed-link">View <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="ed-cta">
          <Link to="/collections" className="btn-ghost">All Collections <i className="ri-arrow-right-line"></i></Link>
        </Reveal>
      </section>

      {/* MANIFESTO */}
      <Reveal id="manifesto">
        <blockquote>
          Fashion is not what you wear.<br />
          It is <em>how the world reads you</em><br />
          before you speak.
        </blockquote>
        <cite>— Styloom Studio</cite>
      </Reveal>

      {/* SEASON INTELLIGENCE */}
      <section id="season-intel">
        <div className="si-inner">
          <Reveal className="si-left">
            <span className="sec-tag">— 02 / Philosophy</span>
            <h2>We craft timeless<br /><em>aesthetics.</em></h2>
            <p>Styloom is a creative studio built for those who appreciate the foundation of modern design. Conceptual styling, editorial direction, and visual storytelling — all in one place.</p>
            <p>We ignore seasonal trends, focus on lasting form, and create what remains.</p>
            <Link to="/about" className="btn-ghost" style={{ marginTop: '16px' }}>Our Philosophy <i className="ri-arrow-right-line"></i></Link>
          </Reveal>
          <Reveal className="si-right d1" delay={0.15}>
            <div className="si-stats">
              <div className="si-stat">
                <AnimatedCounter value={6} suffix="+" />
                <p>Years active</p>
              </div>
              <div className="si-stat">
                <AnimatedCounter value={40} suffix="+" />
                <p>Global clients</p>
              </div>
              <div className="si-stat">
                <AnimatedCounter value={200} suffix="+" />
                <p>Campaigns</p>
              </div>
            </div>
            <div className="si-img">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85" alt="Styloom Studio" />
              <div className="si-badge">Est. 2020</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RUNWAY PREVIEW */}
      <section id="runway-home">
        <Reveal className="sec-header">
          <span className="sec-tag">— 03 / Campaigns</span>
          <h2>Featured <em>Campaigns</em></h2>
          <div className="sec-line"></div>
        </Reveal>
        <div className="fw-grid">
          <Reveal className="fw-card">
            <div className="fw-img">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85" alt="Paris Shoot" />
              <span className="fw-badge">VOGUE</span>
            </div>
            <div className="fw-info">
              <h3>Paris Shoot</h3>
              <p>Haute Couture Styling</p>
              <Link to="/runway" className="fw-link">View Campaign <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
          <Reveal className="fw-card d1" delay={0.1}>
            <div className="fw-img">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=85" alt="Milan Editorial" />
              <span className="fw-badge">EDITORIAL</span>
            </div>
            <div className="fw-info">
              <h3>Milan Series</h3>
              <p>Ready-to-Wear</p>
              <Link to="/runway" className="fw-link">View Campaign <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
          <Reveal className="fw-card d2" delay={0.2}>
            <div className="fw-img">
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=85" alt="New York Street" />
              <span className="fw-badge">KINFOLD</span>
            </div>
            <div className="fw-info">
              <h3>New York</h3>
              <p>Urban Silhouette</p>
              <Link to="/runway" className="fw-link">View Campaign <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section id="journal-home">
        <Reveal className="sec-header">
          <span className="sec-tag">— 04 / Process</span>
          <h2>From the <em>Studio</em></h2>
          <div className="sec-line"></div>
        </Reveal>
        <div className="journal-grid">
          <Reveal className="jrn-card">
            <div className="jrn-img">
              <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=85" alt="Quiet Luxury" />
              <span className="jrn-cat">Philosophy</span>
            </div>
            <div className="jrn-body">
              <p className="jrn-meta">Case Study · 8 min</p>
              <h3>The Philosophy of Quiet Luxury</h3>
              <p>It never leaves. It simply evolves. Understanding the foundation of modern design.</p>
              <Link to="/journal/quiet-luxury" className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
          <Reveal className="jrn-card d1" delay={0.1}>
            <div className="jrn-img">
              <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=85" alt="Silhouette" />
              <span className="jrn-cat">Analysis</span>
            </div>
            <div className="jrn-body">
              <p className="jrn-meta">Case Study · 6 min</p>
              <h3>The Silhouette That Defined the Era</h3>
              <p>One shape. Six campaigns. An unspoken consensus we helped build.</p>
              <Link to="/journal/silhouette" className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
          <Reveal className="jrn-card d2" delay={0.2}>
            <div className="jrn-img">
              <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85" alt="Architecture" />
              <span className="jrn-cat">Process</span>
            </div>
            <div className="jrn-body">
              <p className="jrn-meta">Behind the Scenes · 10 min</p>
              <h3>Understanding Fabric Weight</h3>
              <p>Before the design begins, the material speaks. Here's how we listen.</p>
              <Link to="/journal/aw26-forecast" className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <Reveal id="cta-section">
        <h2>Design that outlasts<br /><em>the season.</em></h2>
        <Link to="/collections" className="btn-solid inv">Explore Archives <i className="ri-arrow-right-line"></i></Link>
      </Reveal>
    </TransitionWrapper>
  );
}
