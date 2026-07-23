import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';

const editorials = [
  { id: 1, cat: 'ss26', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=85', title: 'Void Structure', season: 'SS26 — Lead Editorial', delay: 0 },
  { id: 2, cat: 'capsule', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=85', title: 'White Tension', season: 'SS26 — Capsule', delay: 0.1 },
  { id: 3, cat: 'aw26', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85', title: 'Hard Geometry', season: 'AW26 — Preview', delay: 0.2 },
  { id: 4, cat: 'resort', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=85', title: 'Soft Ground', season: 'Resort 2026', delay: 0 },
  { id: 5, cat: 'ss26', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85', title: 'Pale Signal', season: 'SS26 — Series II', delay: 0.1 },
  { id: 6, cat: 'capsule', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85', title: 'Raw Form', season: 'SS26 — Capsule II', delay: 0.2 },
  { id: 7, cat: 'aw26', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=85', title: 'Dark Measure', season: 'AW26 — Preview II', delay: 0 },
  { id: 8, cat: 'resort', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85', title: 'Open Latitude', season: 'Resort 2026 — II', delay: 0.1 },
  { id: 9, cat: 'ss26', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=85', title: 'Still Motion', season: 'SS26 — Series III', delay: 0.2 },
];

export default function TheSeason() {
  const [filter, setFilter] = useState('all');

  const filteredEditorials = editorials.filter(ed => filter === 'all' || ed.cat === filter);

  return (
    <TransitionWrapper>
      <div className="page-banner" data-ghost="SS26">
        <div className="banner-inner">
          <span className="banner-tag">01 / The Season</span>
          <h1 className="banner-title">SS26 <em>Editorials</em></h1>
          <p className="banner-sub">This season's most significant looks, silhouettes, and signals — decoded for 2026.</p>
        </div>
      </div>

      <section id="page-editorials">
        <Reveal className="filter-bar">
          {['all', 'ss26', 'aw26', 'capsule', 'resort'].map(f => (
            <button 
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : f === 'ss26' ? 'SS26' : f === 'aw26' ? 'AW26 Preview' : f === 'capsule' ? 'Capsule' : 'Resort'}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="ed-full-grid">
          <AnimatePresence>
            {filteredEditorials.map(ed => (
              <motion.div 
                key={ed.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="ed-full-item"
              >
                <div className="ed-item">
                  <div className="ed-img">
                    <img src={ed.img} alt={ed.title} />
                    <div className="ed-info">
                      <p className="ed-season">{ed.season}</p>
                      <h3>{ed.title}</h3>
                      <Link to="#" className="ed-link">View Editorial <i className="ri-arrow-right-line"></i></Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Reveal id="cta-section">
        <h2>Want to understand<br /><em>the season deeper?</em></h2>
        <Link to="/journal" className="btn-solid inv">Read the Journal <i className="ri-arrow-right-line"></i></Link>
      </Reveal>
    </TransitionWrapper>
  );
}
