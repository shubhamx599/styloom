import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';
import AnimatedCounter from '../components/AnimatedCounter';
import { useScramble } from '../utils/useScramble';

export default function Home() {
  const scrambledTag = useScramble("Styloom / SS26 · Issue 01", 350);
  
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
            <div className="h-line"><div className="h-inner t-mod">of what's next —</div></div>
            <div className="h-line i2"><div className="h-inner t-si">2026</div></div>
          </div>

          <div id="hero-bottom">
            <p id="hero-desc">
              Fashion intelligence.<br />
              Trend direction. Editorial<br />
              perspective. Season 2026.
            </p>
            <div id="hero-actions">
              <Link to="/collections" id="hero-cta" className="magnetic">
                <div id="hero-cta-body">Explore SS26</div>
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
            <motion.video 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ y: videoY }}
            >
              <source src="https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_24fps.mp4" type="video/mp4" />
            </motion.video>
            <div id="vid-top">Styloom · SS26</div>
            <div id="vid-bot">
              <span>Editorial</span>
              <span>© 2026</span>
            </div>
            <div id="vid-side">S S 2 6 &nbsp; E D I T O R I A L</div>
          </div>
        </div>
      </section>

      {/* TREND STRIP */}
      <div className="trend-strip">
        <div className="trend-track">
          <span>Styloom</span><span className="acc">✦</span>
          <span>The Shape of What's Next</span><span className="acc">✦</span>
          <span>SS26</span><span className="acc">✦</span>
          <span>Fashion Intelligence</span><span className="acc">✦</span>
          <span>Trend Forecasting</span><span className="acc">✦</span>
          <span>Editorial Direction</span><span className="acc">✦</span>
          <span>Styloom</span><span className="acc">✦</span>
          <span>The Shape of What's Next</span><span className="acc">✦</span>
          <span>SS26</span><span className="acc">✦</span>
          <span>Fashion Intelligence</span><span className="acc">✦</span>
          <span>Trend Forecasting</span><span className="acc">✦</span>
          <span>Editorial Direction</span><span className="acc">✦</span>
        </div>
      </div>

      {/* EDITORIALS */}
      <section id="editorials">
        <Reveal className="sec-header">
          <span className="sec-tag">— 01 / The Season</span>
          <h2>SS26 <em>Editorials</em></h2>
          <div className="sec-line"></div>
        </Reveal>

        <div className="ed-grid">
          <Reveal className="ed-item ed-item-lg">
            <div className="ed-img">
              <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=85" alt="Void Structure" />
            </div>
            <div className="ed-info">
              <p className="ed-season">SS26 — Lead Editorial</p>
              <h3>Void Structure</h3>
              <p>The most radical silhouette of the season asks nothing of you. It simply exists — precise, unhurried, complete.</p>
              <Link to="/collections" className="ed-link">View Editorial <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>

          <Reveal className="ed-item ed-item-sm d1" delay={0.1}>
            <div className="ed-img">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=85" alt="White Tension" />
            </div>
            <div className="ed-info">
              <p className="ed-season">SS26 — Capsule</p>
              <h3>White Tension</h3>
              <Link to="/collections" className="ed-link">View <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>

          <Reveal className="ed-item ed-item-sm d2" delay={0.2}>
            <div className="ed-img">
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85" alt="Hard Geometry" />
            </div>
            <div className="ed-info">
              <p className="ed-season">AW26 — Preview</p>
              <h3>Hard Geometry</h3>
              <Link to="/collections" className="ed-link">View <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="ed-cta">
          <Link to="/collections" className="btn-ghost">All Editorials <i className="ri-arrow-right-line"></i></Link>
        </Reveal>
      </section>

      {/* MANIFESTO */}
      <Reveal id="manifesto">
        <blockquote>
          "Fashion is not what you wear.<br />
          It is <em>how the world reads you</em><br />
          before you speak."
        </blockquote>
        <cite>— Styloom Editorial, Issue 01 · 2026</cite>
      </Reveal>

      {/* SEASON INTELLIGENCE */}
      <section id="season-intel">
        <div className="si-inner">
          <Reveal className="si-left">
            <span className="sec-tag">— 02 / Intelligence</span>
            <h2>We don't follow<br /><em>fashion.</em><br />We read it.</h2>
            <p>STYLOOM is a fashion intelligence platform built for those who want to understand the season before it happens. Trend forecasting, editorial analysis, and runway decoding — all in one place.</p>
            <p>We track what the industry signals, translate what it means, and tell you what comes next.</p>
            <Link to="/about" className="btn-ghost" style={{ marginTop: '16px' }}>What We Do <i className="ri-arrow-right-line"></i></Link>
          </Reveal>
          <Reveal className="si-right d1" delay={0.15}>
            <div className="si-stats">
              <div className="si-stat">
                <AnimatedCounter value={6} suffix="+" />
                <p>Years tracking</p>
              </div>
              <div className="si-stat">
                <AnimatedCounter value={40} suffix="+" />
                <p>Cities covered</p>
              </div>
              <div className="si-stat">
                <AnimatedCounter value={200} suffix="+" />
                <p>Editorials</p>
              </div>
            </div>
            <div className="si-img">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85" alt="Styloom Intelligence" />
              <div className="si-badge">Est. 2020</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RUNWAY PREVIEW */}
      <section id="runway-home">
        <Reveal className="sec-header">
          <span className="sec-tag">— 03 / Runway</span>
          <h2>On the <em>Runway</em></h2>
          <div className="sec-line"></div>
        </Reveal>
        <div className="fw-grid">
          <Reveal className="fw-card">
            <div className="fw-img">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85" alt="Paris SS26" />
              <span className="fw-badge">SS26</span>
            </div>
            <div className="fw-info">
              <h3>Paris</h3>
              <p>Haute Couture · Jan 2026</p>
              <Link to="/runway" className="fw-link">Decode the looks <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
          <Reveal className="fw-card d1" delay={0.1}>
            <div className="fw-img">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=85" alt="Milan SS26" />
              <span className="fw-badge">SS26</span>
            </div>
            <div className="fw-info">
              <h3>Milan</h3>
              <p>Ready-to-Wear · Feb 2026</p>
              <Link to="/runway" className="fw-link">Decode the looks <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
          <Reveal className="fw-card d2" delay={0.2}>
            <div className="fw-img">
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=85" alt="New York AW25" />
              <span className="fw-badge">AW25</span>
            </div>
            <div className="fw-info">
              <h3>New York</h3>
              <p>NYFW · September 2025</p>
              <Link to="/runway" className="fw-link">Decode the looks <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section id="journal-home">
        <Reveal className="sec-header">
          <span className="sec-tag">— 04 / Journal</span>
          <h2>From the <em>Edit Room</em></h2>
          <div className="sec-line"></div>
        </Reveal>
        <div className="journal-grid">
          <Reveal className="jrn-card">
            <div className="jrn-img">
              <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=85" alt="Quiet Luxury" />
              <span className="jrn-cat">Trend</span>
            </div>
            <div className="jrn-body">
              <p className="jrn-meta">May 2026 · 8 min</p>
              <h3>The Return of Quiet Luxury: Season Two</h3>
              <p>It came back. Stronger. Quieter. And this time, it isn't leaving.</p>
              <Link to="/journal/quiet-luxury" className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
          <Reveal className="jrn-card d1" delay={0.1}>
            <div className="jrn-img">
              <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=85" alt="Silhouette" />
              <span className="jrn-cat">Analysis</span>
            </div>
            <div className="jrn-body">
              <p className="jrn-meta">April 2026 · 6 min</p>
              <h3>The Silhouette That Defined This Spring</h3>
              <p>One shape. Six designers. An unspoken consensus no one planned.</p>
              <Link to="/journal/silhouette" className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
          <Reveal className="jrn-card d2" delay={0.2}>
            <div className="jrn-img">
              <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85" alt="Architecture" />
              <span className="jrn-cat">Forecast</span>
            </div>
            <div className="jrn-body">
              <p className="jrn-meta">March 2026 · 10 min</p>
              <h3>AW26 Forecast: The Ten Signals We're Watching</h3>
              <p>Before the shows begin, the signals are already there. Here's what to look for.</p>
              <Link to="/journal/aw26-forecast" className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <Reveal id="cta-section">
        <h2>Track fashion<br /><em>before it happens.</em></h2>
        <Link to="/collections" className="btn-solid inv">Explore SS26 <i className="ri-arrow-right-line"></i></Link>
      </Reveal>
    </TransitionWrapper>
  );
}
