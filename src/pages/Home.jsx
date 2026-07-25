import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';
import AnimatedCounter from '../components/AnimatedCounter';
import { useScramble } from '../utils/useScramble';

export default function Home() {
  const scrambledTag = useScramble("Styloom Studio · Archival Portfolio", 350);
  
  // Drive the parallax effect of the hero video based on the window's scroll position.
  // We map the scrollY from 0-1000px to a Y translation of 0-180px for a subtle depth effect.
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 1000], [0, 180]);

  // Handle the interactive glow effect that follows the cursor over the hero section.
  // We calculate the cursor's percentage position relative to the hero container 
  // and pass it down as CSS variables to drive the radial gradient background.
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
            <div className="h-line"><div className="h-inner text-serif-italic">The</div></div>
            <div className="h-line indent-1"><div className="h-inner text-sans-bold">SHAPE</div></div>
            <div className="h-line"><div className="h-inner text-modern">of modern design —</div></div>
            <div className="h-line indent-2"><div className="h-inner text-serif-italic">WORKS</div></div>
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

      {/* 
        TREND STRIP 
        We map over a single array of strings rather than hardcoding repeating elements, 
        making the markup DRY and easier to update in the future.
      */}
      <div className="trend-strip">
        <div className="trend-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="contents">
              {['Styloom', 'Timeless Aesthetic Direction', 'Form & Fabric', 'Creative Studio', 'Conceptual Styling'].map((text, j) => (
                <span key={j} className="contents">
                  <span>{text}</span><span className="acc">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* EDITORIALS */}
      <section id="editorials">
        <Reveal className="sec-header">
          <span className="sec-tag">— 01 / Selected Works</span>
          <h2>Studio <em>Collections</em></h2>
          <div className="sec-line"></div>
        </Reveal>

        <div className="editorial-grid">
          <Reveal className="editorial-item editorial-item-large">
            <div className="editorial-image">
              <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=85" alt="Void Structure" />
            </div>
            <div className="editorial-info">
              <p className="editorial-season">Campaign — 04</p>
              <h3>Void Structure</h3>
              <p>The most radical silhouette asks nothing of you. It simply exists — precise, unhurried, complete.</p>
              <Link to="/collections" className="editorial-link">View Project <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>

          <Reveal className="editorial-item editorial-item-small delay-1" delay={0.1}>
            <div className="editorial-image">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=85" alt="White Tension" />
            </div>
            <div className="editorial-info">
              <p className="editorial-season">Capsule — 03</p>
              <h3>White Tension</h3>
              <Link to="/collections" className="editorial-link">View <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>

          <Reveal className="editorial-item editorial-item-small delay-2" delay={0.2}>
            <div className="editorial-image">
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85" alt="Hard Geometry" />
            </div>
            <div className="editorial-info">
              <p className="editorial-season">Preview — 02</p>
              <h3>Hard Geometry</h3>
              <Link to="/collections" className="editorial-link">View <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="editorial-cta">
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
        <div className="season-intel-inner">
          <Reveal className="season-intel-left">
            <span className="sec-tag">— 02 / Philosophy</span>
            <h2>We craft timeless<br /><em>aesthetics.</em></h2>
            <p>Styloom is a creative studio built for those who appreciate the foundation of modern design. Conceptual styling, editorial direction, and visual storytelling — all in one place.</p>
            <p>We ignore seasonal trends, focus on lasting form, and create what remains.</p>
            <Link to="/about" className="btn-ghost" style={{ marginTop: '16px' }}>Our Philosophy <i className="ri-arrow-right-line"></i></Link>
          </Reveal>
          <Reveal className="season-intel-right delay-1" delay={0.15}>
            <div className="season-intel-stats">
              <div className="season-intel-stat">
                <AnimatedCounter value={6} suffix="+" />
                <p>Years active</p>
              </div>
              <div className="season-intel-stat">
                <AnimatedCounter value={40} suffix="+" />
                <p>Global clients</p>
              </div>
              <div className="season-intel-stat">
                <AnimatedCounter value={200} suffix="+" />
                <p>Campaigns</p>
              </div>
            </div>
            <div className="season-intel-image">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85" alt="Styloom Studio" />
              <div className="season-intel-badge">Est. 2020</div>
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
        <div className="featured-campaign-grid">
          <Reveal className="featured-campaign-card">
            <div className="featured-campaign-image">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85" alt="Paris Shoot" />
              <span className="featured-campaign-badge">VOGUE</span>
            </div>
            <div className="featured-campaign-info">
              <h3>Paris Shoot</h3>
              <p>Haute Couture Styling</p>
              <Link to="/runway" className="featured-campaign-link">View Campaign <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
          <Reveal className="featured-campaign-card delay-1" delay={0.1}>
            <div className="featured-campaign-image">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=85" alt="Milan Editorial" />
              <span className="featured-campaign-badge">EDITORIAL</span>
            </div>
            <div className="featured-campaign-info">
              <h3>Milan Series</h3>
              <p>Ready-to-Wear</p>
              <Link to="/runway" className="featured-campaign-link">View Campaign <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
          <Reveal className="featured-campaign-card delay-2" delay={0.2}>
            <div className="featured-campaign-image">
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=85" alt="New York Street" />
              <span className="featured-campaign-badge">KINFOLD</span>
            </div>
            <div className="featured-campaign-info">
              <h3>New York</h3>
              <p>Urban Silhouette</p>
              <Link to="/runway" className="featured-campaign-link">View Campaign <i className="ri-arrow-right-line"></i></Link>
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
          <Reveal className="journal-card">
            <div className="journal-image">
              <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=85" alt="Quiet Luxury" />
              <span className="journal-category">Philosophy</span>
            </div>
            <div className="journal-body">
              <p className="journal-meta">Case Study · 8 min</p>
              <h3>The Philosophy of Quiet Luxury</h3>
              <p>It never leaves. It simply evolves. Understanding the foundation of modern design.</p>
              <Link to="/journal/quiet-luxury" className="journal-read-link">Read <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
          <Reveal className="journal-card delay-1" delay={0.1}>
            <div className="journal-image">
              <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=85" alt="Silhouette" />
              <span className="journal-category">Analysis</span>
            </div>
            <div className="journal-body">
              <p className="journal-meta">Case Study · 6 min</p>
              <h3>The Silhouette That Defined the Era</h3>
              <p>One shape. Six campaigns. An unspoken consensus we helped build.</p>
              <Link to="/journal/silhouette" className="journal-read-link">Read <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
          <Reveal className="journal-card delay-2" delay={0.2}>
            <div className="journal-image">
              <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85" alt="Architecture" />
              <span className="journal-category">Process</span>
            </div>
            <div className="journal-body">
              <p className="journal-meta">Behind the Scenes · 10 min</p>
              <h3>Understanding Fabric Weight</h3>
              <p>Before the design begins, the material speaks. Here's how we listen.</p>
              <Link to="/journal/aw26-forecast" className="journal-read-link">Read <i className="ri-arrow-right-line"></i></Link>
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
