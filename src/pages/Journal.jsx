import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';

const articles = [
  { id: 1, cat: 'analysis', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=85', title: 'The Silhouette That Defined SS26 — And No One Planned It', meta: 'April 2026 · 6 min', desc: "Six designers. One shape. No coordination. Here's how it happened and what it means for AW26.", link: '/journal/article', delay: 0 },
  { id: 2, cat: 'forecast', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85', title: 'AW26 Forecast: The Ten Signals We\'re Tracking Now', meta: 'March 2026 · 10 min', desc: "Before the shows begin, the signals are already there. Here's what STYLOOM is watching heading into Autumn.", link: '/journal/article', delay: 0.1 },
  { id: 3, cat: 'interview', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85', title: '"The Seam Is Where the Thinking Happens" — A Craftsperson Speaks', meta: 'February 2026 · 8 min', desc: "On what it means to build a garment by hand in 2026, and why speed is the enemy of everything.", link: '/journal/article', delay: 0.2 },
  { id: 4, cat: 'trend', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=85', title: 'Monochrome Is Not Boring. You\'re Reading It Wrong.', meta: 'February 2026 · 5 min', desc: "The single-colour outfit is the hardest thing to do in fashion. Here's why the best versions of it are everywhere this season.", link: '/journal/article', delay: 0 },
  { id: 5, cat: 'analysis', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&q=85', title: 'Reading Tokyo: The City That Always Arrives Last — and Right', meta: 'March 2026 · 7 min', desc: "Tokyo Fashion Week 2026 was the most technically interesting runway season in five years. Here's a full decode.", link: '/journal/article', delay: 0.1 },
  { id: 6, cat: 'forecast', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=85', title: 'The Colour Forecast for 2026: What the Palettes Are Telling Us', meta: 'January 2026 · 6 min', desc: "Colour is never arbitrary. This season's palette choices carry a specific cultural message — and here's how to read it.", link: '/journal/article', delay: 0.2 },
  { id: 7, cat: 'trend', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=85', title: '2026: The Year Fashion Stopped Justifying Itself', meta: 'January 2026 · 9 min', desc: "The biggest shift this year isn't a silhouette or a colour. It's a refusal — the best designers simply stopped explaining their work. Here's why that matters.", link: '/journal/article', delay: 0 },
  { id: 8, cat: 'interview', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=85', title: 'Priya Nair: "We Don\'t Chase Trends. We Find the Direction."', meta: 'December 2025 · 7 min', desc: "STYLOOM's head of trend intelligence on what she looks for in a season — and the moment she knew SS26 was going to be different.", link: '/journal/article', delay: 0.1 },
  { id: 9, cat: 'analysis', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=85', title: 'The Intelligence Behind a Wardrobe That Never Ages', meta: 'November 2025 · 5 min', desc: "Twelve carefully chosen pieces will always outperform a hundred impulsive ones. Here's how the best wardrobes are actually built.", link: '/journal/article', delay: 0.2 },
];

export default function Journal() {
  const [filter, setFilter] = useState('all');

  const filteredArticles = articles.filter(art => filter === 'all' || art.cat === filter);

  return (
    <TransitionWrapper>
      <div className="page-banner" data-ghost="JRN">
        <div className="banner-inner">
          <span className="banner-tag">04 / Journal</span>
          <h1 className="banner-title">The <em>Journal</em></h1>
          <p className="banner-sub">Fashion analysis, trend forecasts, and dispatches from the season — Issue 01 · 2026.</p>
        </div>
      </div>

      <section id="journal-featured">
        <Reveal className="feat-grid">
          <div className="feat-img-wrap">
            <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=85" alt="Quiet Luxury" />
          </div>
          <div className="feat-body">
            <span className="feat-tag">✦ Featured · Trend Analysis</span>
            <p className="feat-meta">May 2026 &nbsp;·&nbsp; 10 min read &nbsp;·&nbsp; Issue 01</p>
            <h2>Quiet Luxury, Season Two: Why It Came Back Stronger</h2>
            <p>The first wave of quiet luxury was a reaction to maximalism. This second wave is something more permanent. It's not a trend responding to something else — it's a worldview. And that changes everything about how to read it.</p>
            <Link to="/journal/article" className="btn-ghost">Read Full Analysis <i className="ri-arrow-right-line"></i></Link>
          </div>
        </Reveal>
      </section>

      <section id="journal-grid-section">
        <Reveal className="jrn-filter">
          {['all', 'trend', 'analysis', 'forecast', 'interview'].map(f => (
            <button 
              key={f} 
              className={`jfilt-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="jrn-full-grid">
          <AnimatePresence>
            {filteredArticles.map(art => (
              <motion.article 
                key={art.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="jrn-card"
              >
                <div className="jrn-img">
                  <img src={art.img} alt={art.title} />
                  <span className="jrn-cat">{art.cat.charAt(0).toUpperCase() + art.cat.slice(1)}</span>
                </div>
                <div className="jrn-body">
                  <p className="jrn-meta">{art.meta}</p>
                  <h3>{art.title}</h3>
                  <p>{art.desc}</p>
                  <Link to={art.link} className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Inline Newsletter Block */}
      <Reveal 
        style={{
          background: 'var(--s2)', 
          padding: '80px 60px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '40px', 
          flexWrap: 'wrap', 
          borderTop: '1px solid var(--border)', 
          borderBottom: '1px solid var(--border)'
        }}
      >
        <div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '12px' }}>✦ Intelligence Brief</span>
          <h2 style={{ fontFamily: 'var(--font-disp)', fontSize: 'clamp(22px, 3.2vw, 42px)', fontWeight: 600, color: 'var(--t1)', lineHeight: 1.1 }}>Read less.<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Know more.</em></h2>
        </div>
        <div style={{ display: 'flex', gap: 0, maxWidth: '400px', width: '100%', flex: '0 0 auto' }}>
          <input type="email" placeholder="Your email" style={{ flex: 1, background: 'var(--s3)', border: '1px solid var(--border)', borderRight: 'none', padding: '15px 18px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--t1)', outline: 'none', minWidth: 0 }} />
          <button 
            style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '15px 22px', fontFamily: 'var(--font-mono)', fontSize: '9.5px', letterSpacing: '2px', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'background .2s' }}
            onMouseEnter={(e) => e.target.style.background = '#cc3700'}
            onMouseLeave={(e) => e.target.style.background = 'var(--accent)'}
          >
            Subscribe
          </button>
        </div>
      </Reveal>
    </TransitionWrapper>
  );
}
