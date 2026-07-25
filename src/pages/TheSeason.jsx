import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';

const editorials = [
  { id: 1, cat: 'campaigns', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=85', title: 'Void Structure', season: 'Campaign — 04', delay: 0 },
  { id: 2, cat: 'capsules', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=85', title: 'White Tension', season: 'Capsule — 03', delay: 0.1 },
  { id: 3, cat: 'archive', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85', title: 'Hard Geometry', season: 'Preview — 02', delay: 0.2 },
  { id: 4, cat: 'editorials', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=85', title: 'Soft Ground', season: 'Editorial — VOGUE', delay: 0 },
  { id: 5, cat: 'campaigns', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85', title: 'Pale Signal', season: 'Campaign — 05', delay: 0.1 },
  { id: 6, cat: 'capsules', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85', title: 'Raw Form', season: 'Capsule — 04', delay: 0.2 },
  { id: 7, cat: 'archive', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=85', title: 'Dark Measure', season: 'Preview — 01', delay: 0 },
  { id: 8, cat: 'editorials', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85', title: 'Open Latitude', season: 'Editorial — KINFOLD', delay: 0.1 },
  { id: 9, cat: 'campaigns', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=85', title: 'Still Motion', season: 'Campaign — 06', delay: 0.2 },
];

export default function TheSeason() {
  const [filter, setFilter] = useState('all');

  const filteredEditorials = editorials.filter(ed => filter === 'all' || ed.cat === filter);

  return (
    <TransitionWrapper>
      <div className="page-banner" data-ghost="WRK">
        <div className="banner-inner">
          <span className="banner-tag">01 / Selected Works</span>
          <h1 className="banner-title">Studio <em>Collections</em></h1>
          <p className="banner-sub">Our most significant aesthetic projects — documented for the archive.</p>
        </div>
      </div>

      <section id="page-editorials">
        <Reveal className="filter-bar">
          {['all', 'campaigns', 'editorials', 'capsules', 'archive'].map(f => (
            <button 
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="editorial-full-grid">
          <AnimatePresence>
            {filteredEditorials.map(ed => (
              <motion.div 
                key={ed.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="editorial-full-item"
              >
                <div className="editorial-item">
                  <div className="editorial-image">
                    <img src={ed.img} alt={ed.title} />
                    <div className="editorial-info">
                      <p className="editorial-season">{ed.season}</p>
                      <h3>{ed.title}</h3>
                      <Link to="#" className="editorial-link">View Project <i className="ri-arrow-right-line"></i></Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Reveal id="cta-section">
        <h2>Want to understand<br /><em>the process deeper?</em></h2>
        <Link to="/journal" className="btn-solid inv">View Our Process <i className="ri-arrow-right-line"></i></Link>
      </Reveal>
    </TransitionWrapper>
  );
}
