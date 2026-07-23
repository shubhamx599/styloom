import { Link } from 'react-router-dom';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';

const cities = [
  { id: '01', name: 'Paris', season: 'Haute Couture · January 2026', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=85', desc: 'Paris opened SS26 with a decisive statement about construction. The dominant signal: clothing that looks effortless but reveals extraordinary technical discipline upon closer study. Volume is back — but controlled volume. Considered volume. Volume that knows exactly what it is doing.' },
  { id: '02', name: 'Milan', season: 'Ready-to-Wear · February 2026', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=85', desc: 'Milan this season was about the body in motion. The strongest collections here moved away from static silhouette and toward something more kinetic — fabric that responded to movement, proportion that shifted as the wearer walked. The most important word from Milan this season: fluidity.' },
  { id: '03', name: 'New York', season: 'NYFW · September 2025', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1000&q=85', desc: 'New York in September sent the first clear signal for Spring: the rejection of maximalism is complete. What replaced it was not minimalism — it was something more precise. Restraint with intention. The city that invented logomania is now building the counter-argument, one quiet collection at a time.' },
  { id: '04', name: 'London', season: 'LFW · February 2026', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1000&q=85', desc: 'London continues to do what London has always done best: subvert the conversation. While Paris spoke about construction and Milan about movement, London asked a different question — what does clothing mean when the wearer refuses to be categorised? The strongest signal from London: identity over aesthetics.' },
  { id: '05', name: 'Tokyo', season: 'Tokyo Fashion Week · March 2026', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1000&q=85', desc: 'Tokyo arrived last — and as always, offered the most considered perspective. Japanese fashion this season was about the space between the garment and the body. Not drape. Not fit. The deliberate space left between cloth and skin. It is the most technically demanding idea on any runway this season.' },
];

export default function Runway() {
  return (
    <TransitionWrapper>
      <div className="page-banner" data-ghost="RWY">
        <div className="banner-inner">
          <span className="banner-tag">03 / Runway</span>
          <h1 className="banner-title">The <em>Runway</em></h1>
          <p className="banner-sub">Five cities. Every season. What the runway said — and what it meant.</p>
        </div>
      </div>

      <section id="runway-intro">
        <div className="rint-grid">
          <Reveal className="rint-left">
            <span className="sec-tag">— SS26 Season</span>
            <h2>The runway<br /><em>is a language.</em><br />We translate it.</h2>
            <p>Every season, designers send a message — through silhouette, fabric, proportion, and mood. Most people see the clothes. We read what's underneath: the cultural signal, the directional shift, the thing the next season will be built on.</p>
            <p style={{ marginTop: '14px' }}>This is our complete SS26 runway intelligence — city by city, look by look, signal by signal.</p>
            <Link to="/collections" className="btn-ghost" style={{ marginTop: '28px' }}>View SS26 Editorials <i className="ri-arrow-right-line"></i></Link>
          </Reveal>
          
          <Reveal className="rint-imgs d1" delay={0.15}>
            {cities.slice(0, 4).map((city) => (
              <div key={city.id} className="rint-img">
                <img src={city.img.replace('w=1000', 'w=500')} alt={`${city.name} SS26`} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="runway-cities">
        {cities.map((city) => (
          <Reveal key={city.id} className="city-block">
            <div className="city-img-wrap">
              <img src={city.img} alt={`${city.name} SS26`} />
            </div>
            <div className="city-details">
              <div className="city-n">{city.id}</div>
              <h3>{city.name}</h3>
              <p className="city-season">{city.season}</p>
              <p>{city.desc}</p>
              <Link to="/journal" className="btn-ghost">Read Full Analysis <i className="ri-arrow-right-line"></i></Link>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal id="cta-section">
        <h2>Want the full<br /><em>season read?</em></h2>
        <Link to="/journal" className="btn-solid inv">Open the Journal <i className="ri-arrow-right-line"></i></Link>
      </Reveal>
    </TransitionWrapper>
  );
}
