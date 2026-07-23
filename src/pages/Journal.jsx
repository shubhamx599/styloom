import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';

const articles = [
  { id: 1, cat: 'case-study', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=85', title: 'The Silhouette That Defined the Era', meta: 'Case Study · 6 min', desc: "Six campaigns. One shape. No coordination. Here's how it happened and what it means for modern design.", link: '/journal/article', delay: 0 },
  { id: 2, cat: 'process', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85', title: 'Building the Foundation: Ten Signals in Modern Design', meta: 'Process · 10 min', desc: "Before the work begins, the signals are already there. Here's what Styloom looks for when establishing an aesthetic.", link: '/journal/article', delay: 0.1 },
  { id: 3, cat: 'interview', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85', title: '"The Seam Is Where the Thinking Happens" — A Craftsperson Speaks', meta: 'Interview · 8 min', desc: "On what it means to build a garment by hand today, and why speed is the enemy of everything.", link: '/journal/article', delay: 0.2 },
  { id: 4, cat: 'philosophy', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=85', title: 'Monochrome Is Not Boring. You\'re Reading It Wrong.', meta: 'Philosophy · 5 min', desc: "The single-colour outfit is the hardest thing to do in fashion. Here's why the best versions of it endure.", link: '/journal/article', delay: 0 },
  { id: 5, cat: 'case-study', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&q=85', title: 'Reading Tokyo: The City That Always Arrives Last — and Right', meta: 'Case Study · 7 min', desc: "Tokyo street style remains the most technically interesting in the world. Here's a full decode of our latest campaign.", link: '/journal/article', delay: 0.1 },
  { id: 6, cat: 'process', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=85', title: 'The Psychology of Colour in Minimalist Design', meta: 'Process · 6 min', desc: "Colour is never arbitrary. Palette choices carry a specific cultural message — and here's how to wield them.", link: '/journal/article', delay: 0.2 },
  { id: 7, cat: 'philosophy', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=85', title: 'The Year Fashion Stopped Justifying Itself', meta: 'Philosophy · 9 min', desc: "The biggest shift isn't a silhouette or a colour. It's a refusal — the best designers simply stopped explaining their work.", link: '/journal/article', delay: 0 },
  { id: 8, cat: 'interview', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=85', title: 'Priya Nair: "We Don\'t Follow Trends. We Find the Direction."', meta: 'Interview · 7 min', desc: "Styloom's Creative Director on what she looks for in a campaign — and the moment she knows a project is complete.", link: '/journal/article', delay: 0.1 },
  { id: 9, cat: 'philosophy', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=85', title: 'The Intelligence Behind a Wardrobe That Never Ages', meta: 'Philosophy · 5 min', desc: "Twelve carefully chosen pieces will always outperform a hundred impulsive ones. Here's how the best wardrobes are actually built.", link: '/journal/article', delay: 0.2 },
];

export default function Journal() {
  const [filter, setFilter] = useState('all');

  const filteredArticles = articles.filter(art => filter === 'all' || art.cat === filter);

  return (
    <TransitionWrapper>
      <div className="page-banner" data-ghost="PRC">
        <div className="banner-inner">
          <span className="banner-tag">04 / Process</span>
          <h1 className="banner-title">The <em>Process</em></h1>
          <p className="banner-sub">Philosophy, case studies, and dispatches from the studio floor.</p>
        </div>
      </div>

      <section id="journal-featured">
        <Reveal className="feat-grid">
          <div className="feat-img-wrap">
            <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=85" alt="Quiet Luxury" />
          </div>
          <div className="feat-body">
            <span className="feat-tag">✦ Featured · Studio Philosophy</span>
            <p className="feat-meta">Case Study &nbsp;·&nbsp; 10 min read</p>
            <h2>Quiet Luxury, Part Two: The Permanent Aesthetic</h2>
            <p>The first wave of quiet luxury was a reaction to maximalism. This second wave is something more permanent. It's not a trend responding to something else — it's a worldview. And that changes everything about how to design for it.</p>
            <Link to="/journal/article" className="btn-ghost">Read Full Analysis <i className="ri-arrow-right-line"></i></Link>
          </div>
        </Reveal>
      </section>

      <section id="journal-grid-section">
        <Reveal className="jrn-filter">
          {['all', 'philosophy', 'case-study', 'process', 'interview'].map(f => (
            <button 
              key={f} 
              className={`jfilt-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
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
                  <span className="jrn-cat">{art.cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</span>
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
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '12px' }}>✦ Studio Notes</span>
          <h2 style={{ fontFamily: 'var(--font-disp)', fontSize: 'clamp(22px, 3.2vw, 42px)', fontWeight: 600, color: 'var(--t1)', lineHeight: 1.1 }}>Create less.<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Mean more.</em></h2>
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
