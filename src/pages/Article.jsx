import { Link } from 'react-router-dom';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';

export default function Article() {
  return (
    <TransitionWrapper>
      <div id="article-hero">
        <div className="art-eyebrow">
          <span className="art-cat">Trend</span>
          <span className="art-meta"><span>May 2026</span> &nbsp;·&nbsp; <span>10 min read</span> &nbsp;·&nbsp; Issue 01</span>
        </div>
        <Reveal className="art-title" as="h1">
          Quiet Luxury, Season Two:<br /><em>Why It Came Back Stronger</em>
        </Reveal>
        <Reveal className="art-deck" as="p" delay={0.1}>
          The first wave was a reaction. This second wave is a conviction. And that changes everything about how to read it.
        </Reveal>
        <Reveal className="art-byline" delay={0.2}>
          <div className="art-byline-img">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80" alt="Priya Nair" />
          </div>
          <div className="art-byline-text">
            <p>Priya Nair</p>
            <p>Head of Trend Intelligence · Contour</p>
          </div>
        </Reveal>
      </div>

      <div id="article-body">
        <Reveal className="art-body-img">
          <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=90" alt="Quiet Luxury SS26" />
        </Reveal>
        <p className="art-img-caption">SS26 Editorial — Contour · 2026</p>

        <Reveal className="art-p" as="p">
          The first time quiet luxury appeared as a recognisable trend — sometime around 2022, picked up by fashion media around 2023 — it was easy to read. It was a reaction. Maximalism had gone too far, logomania had exhausted itself, and a significant portion of the fashion-aware public was tired of being shouted at by clothing.
        </Reveal>

        <Reveal className="art-p" as="p">
          The quiet came in as relief. Understated fabrics, neutral palettes, the absence of visible branding. The message was simple: <strong>I don't need to prove anything with what I'm wearing.</strong> It resonated. Designers responded. Retailers pushed it. Fashion media named it.
        </Reveal>

        <Reveal className="art-p" as="p">
          And then, as usually happens with named trends, it was declared dead approximately eighteen months after it was declared a thing. That was 2024. By then, the fast fashion industry had mass-produced the aesthetic into meaninglessness. The beige wool coats were everywhere. The quiet had become very, very loud.
        </Reveal>

        <Reveal className="art-h2" as="h2">
          But Something Didn't <em>Leave</em>
        </Reveal>

        <Reveal className="art-p" as="p">
          Here's what the premature obituaries missed: the cultural driver that produced quiet luxury in the first place didn't go away. The exhaustion with performance — with dressing to be seen, to signal status, to demonstrate taste — that exhaustion only deepened between 2024 and 2026.
        </Reveal>

        <Reveal className="art-p" as="p">
          If anything, the years of economic uncertainty, the continued saturation of social media aesthetics, and the growing awareness of overconsumption made the underlying impulse stronger. People didn't stop wanting clothing that was quiet. They just stopped accepting cheap imitations of quietness.
        </Reveal>

        <Reveal className="art-pull">
          "The difference between the first wave and this one is simple: <em>intention</em>. The first wave was about looking understated. This wave is about being it."
        </Reveal>

        <Reveal className="art-p" as="p">
          That's the crucial distinction for SS26. What we're seeing on the runway and in the strongest street-level fashion right now is not the same quiet luxury that dominated mood boards in 2023. It's more precise. More demanding. And significantly harder to fake.
        </Reveal>

        <Reveal className="art-h2" as="h2">
          What's <em>Different</em> This Time
        </Reveal>

        <Reveal className="art-p" as="p">
          Three things separate Season Two from the first wave, and all three matter for understanding where this is going.
        </Reveal>

        <Reveal className="art-p" as="p">
          <strong>Construction is visible.</strong> The first wave of quiet luxury was largely about surface — the absence of logo, the neutral palette, the understated silhouette. Season Two goes deeper. The garments that are defining this moment are technically exceptional. The quietness is in the fabric, the drape, the weight, the way a collar lies. This requires real craft, and it cannot be mass-produced convincingly.
        </Reveal>

        <Reveal className="art-p" as="p">
          <strong>It has a point of view.</strong> Season One quiet luxury was largely neutral — beige, cream, grey, navy. Season Two has a stronger formal language. There are specific silhouettes (wider shoulder, elongated torso), specific fabrics (heavy wool, brushed cashmere, technical linen), and a consistent relationship between the body and the garment that feels considered rather than simply inoffensive.
        </Reveal>

        <Reveal className="art-p" as="p">
          <strong>It's worn differently.</strong> The people wearing it most convincingly in 2026 are not wearing it as a statement about wealth. They're wearing it because they've made a decision about their relationship with clothing — that they want fewer pieces, made better, that work harder and last longer. This is a values position, not an aesthetic one.
        </Reveal>

        <Reveal className="art-body-img">
          <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=90" alt="Quiet Luxury Detail" />
        </Reveal>
        <p className="art-img-caption">Construction detail — SS26 Capsule · Contour</p>

        <Reveal className="art-h2" as="h2">
          What This Means for <em>AW26</em>
        </Reveal>

        <Reveal className="art-p" as="p">
          If the signals from the SS26 runway and the street are accurate — and we believe they are — then Autumn/Winter 2026 will take this further rather than pivoting away from it. The direction of travel is toward even greater technical investment, even more considered construction, and an even more deliberate reduction in surface decoration.
        </Reveal>

        <Reveal className="art-p" as="p">
          The one area where we expect evolution rather than continuation: colour. The neutral palette that defined both waves of quiet luxury will begin to admit more precise, considered colour — not as decoration, but as the same kind of intentional decision that defines the rest of the aesthetic. <strong>Colour used as restraint, not as expression.</strong>
        </Reveal>

        <Reveal className="art-p" as="p">
          The brands and designers to watch heading into AW26 are those who have been building technical capacity quietly for the last three years. The ones who were never really part of the first wave — because they were always doing something more serious than a trend. Those are the ones who will define what Season Two of quiet luxury actually becomes.
        </Reveal>

        <div className="art-divider"></div>
        <Reveal className="art-p" as="p" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--t3)' }}>
          Analysis by Priya Nair · Contour Intelligence · Issue 01 · May 2026
        </Reveal>
      </div>

      <div className="art-nav">
        <Link to="/journal"><i className="ri-arrow-left-line"></i> Back to Journal</Link>
        <Link to="/journal/article">Next Article <i className="ri-arrow-right-line"></i></Link>
      </div>

      <section id="article-related">
        <Reveal className="sec-header">
          <span className="sec-tag">— Keep Reading</span>
          <h2>More from the <em>Journal</em></h2>
          <div className="sec-line"></div>
        </Reveal>
        <div className="related-grid">
          <Reveal className="jrn-card">
            <div className="jrn-img"><img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80" alt="Silhouette" /><span className="jrn-cat">Analysis</span></div>
            <div className="jrn-body"><p className="jrn-meta">April 2026 · 6 min</p><h3>The Silhouette That Defined SS26</h3><p>Six designers, one shape, no coordination.</p><Link to="/journal/article" className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link></div>
          </Reveal>
          <Reveal className="jrn-card d1">
            <div className="jrn-img"><img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80" alt="AW26" /><span className="jrn-cat">Forecast</span></div>
            <div className="jrn-body"><p className="jrn-meta">March 2026 · 10 min</p><h3>AW26 Forecast: Ten Signals</h3><p>What CONTOUR is watching heading into Autumn.</p><Link to="/journal/article" className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link></div>
          </Reveal>
          <Reveal className="jrn-card d2">
            <div className="jrn-img"><img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80" alt="Monochrome" /><span className="jrn-cat">Trend</span></div>
            <div className="jrn-body"><p className="jrn-meta">February 2026 · 5 min</p><h3>Monochrome Is Not Boring.</h3><p>You're just reading it wrong.</p><Link to="/journal/article" className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link></div>
          </Reveal>
        </div>
      </section>
    </TransitionWrapper>
  );
}
