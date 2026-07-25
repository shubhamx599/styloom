import { Link } from 'react-router-dom';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';

const cities = [
  { id: '01', name: 'Paris Shoot', season: 'Haute Couture · VOGUE', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=85', desc: 'Our Paris campaign was a decisive statement about construction. The dominant visual language: clothing that looks effortless but reveals extraordinary technical discipline upon closer study. We styled volume that knows exactly what it is doing.' },
  { id: '02', name: 'Milan Series', season: 'Ready-to-Wear · EDITORIAL', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=85', desc: 'Milan this season was about the body in motion. The strongest shots moved away from static silhouette and toward something more kinetic — fabric that responded to movement, proportion that shifted as the wearer walked. Fluidity captured on film.' },
  { id: '03', name: 'New York', season: 'Urban Silhouette · KINFOLD', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1000&q=85', desc: 'New York sent a clear signal for Spring: the rejection of maximalism is complete. What replaced it was not minimalism — it was something more precise. Restraint with intention. We styled a quiet collection for a loud city.' },
  { id: '04', name: 'London', season: 'Subversive Form · INDEPENDENT', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1000&q=85', desc: 'London continues to do what London has always done best: subvert the conversation. While Paris spoke about construction, London asked a different question — what does clothing mean when the wearer refuses to be categorised? Identity over aesthetics.' },
  { id: '05', name: 'Tokyo', season: 'Space & Drape · ARCHIVE', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1000&q=85', desc: 'Tokyo offered the most considered perspective. Our styling here focused on the space between the garment and the body. Not drape. Not fit. The deliberate space left between cloth and skin. It was the most technically demanding project we executed.' },
];

export default function Runway() {
  return (
    <TransitionWrapper>
      <div className="page-banner" data-ghost="CMP">
        <div className="banner-inner">
          <span className="banner-tag">03 / Campaigns</span>
          <h1 className="banner-title">The <em>Campaigns</em></h1>
          <p className="banner-sub">Global reach. Visual storytelling. The aesthetic we build.</p>
        </div>
      </div>

      <section id="runway-intro">
        <div className="runway-intro-grid">
          <Reveal className="runway-intro-left">
            <span className="sec-tag">— Our Work</span>
            <h2>Our styling<br /><em>is a language.</em><br />We translate it.</h2>
            <p>Every campaign sends a message — through silhouette, fabric, proportion, and mood. Most people see the clothes. We build what's underneath: the cultural signal, the directional shift, the visual foundation.</p>
            <p style={{ marginTop: '14px' }}>This is our complete campaign portfolio — city by city, frame by frame, signal by signal.</p>
            <Link to="/collections" className="btn-ghost" style={{ marginTop: '28px' }}>View Collections <i className="ri-arrow-right-line"></i></Link>
          </Reveal>
          
          <Reveal className="runway-intro-images delay-1" delay={0.15}>
            {cities.slice(0, 4).map((city) => (
              <div key={city.id} className="runway-intro-image">
                <img src={city.img.replace('w=1000', 'w=500')} alt={`${city.name} Campaign`} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="runway-cities">
        {cities.map((city) => (
          <Reveal key={city.id} className="city-block">
            <div className="city-img-wrap">
              <img src={city.img} alt={`${city.name} Campaign`} />
            </div>
            <div className="city-details">
              <div className="city-n">{city.id}</div>
              <h3>{city.name}</h3>
              <p className="city-season">{city.season}</p>
              <p>{city.desc}</p>
              <Link to="/journal" className="btn-ghost">Read Process <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal id="cta-section">
        <h2>Want the full<br /><em>studio story?</em></h2>
        <Link to="/journal" className="btn-solid inv">Open the Process <i className="ri-arrow-right-line"></i></Link>
      </Reveal>
    </TransitionWrapper>
  );
}
