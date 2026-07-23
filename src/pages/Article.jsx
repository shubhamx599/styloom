import { Link } from 'react-router-dom';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';

export default function Article() {
  return (
    <TransitionWrapper>
      <div id="article-hero">
        <div className="art-eyebrow">
          <span className="art-cat">Case Study</span>
          <span className="art-meta"><span>Studio Philosophy</span> &nbsp;·&nbsp; <span>10 min read</span> &nbsp;·&nbsp; Process</span>
        </div>
        <Reveal className="art-title" as="h1">
          Quiet Luxury, Part Two:<br /><em>The Permanent Aesthetic</em>
        </Reveal>
        <Reveal className="art-deck" as="p" delay={0.1}>
          The first wave was a reaction. This second wave is a conviction. And that changes everything about how to design for it.
        </Reveal>
        <Reveal className="art-byline" delay={0.2}>
          <div className="art-byline-img">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80" alt="Priya Nair" />
          </div>
          <div className="art-byline-text">
            <p>Priya Nair</p>
            <p>Creative Director · Styloom Studio</p>
          </div>
        </Reveal>
      </div>

      <div id="article-body">
        <Reveal className="art-body-img">
          <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=90" alt="Quiet Luxury Silhouette" />
        </Reveal>
        <p className="art-img-caption">Studio Campaign — Styloom</p>

        <Reveal className="art-p" as="p">
          The first time quiet luxury appeared as a recognisable trend, it was easy to read. It was a reaction. Maximalism had gone too far, logomania had exhausted itself, and a significant portion of the public was tired of being shouted at by design.
        </Reveal>

        <Reveal className="art-p" as="p">
          The quiet came in as relief. Understated fabrics, neutral palettes, the absence of visible branding. The message was simple: <strong>I don't need to prove anything with what I'm wearing.</strong> It resonated. Designers responded. Retailers pushed it.
        </Reveal>

        <Reveal className="art-p" as="p">
          And then, as usually happens with named trends, the fast fashion industry mass-produced the aesthetic into meaninglessness. The beige wool coats were everywhere. The quiet had become very, very loud.
        </Reveal>

        <Reveal className="art-h2" as="h2">
          But Something Didn't <em>Leave</em>
        </Reveal>

        <Reveal className="art-p" as="p">
          Here's what the premature obituaries missed: the cultural driver that produced this shift in the first place didn't go away. The exhaustion with performance — with dressing to be seen, to signal status, to demonstrate taste — that exhaustion only deepened over the years.
        </Reveal>

        <Reveal className="art-p" as="p">
          If anything, economic uncertainty, the continued saturation of digital aesthetics, and the growing awareness of overconsumption made the underlying impulse stronger. People didn't stop wanting clothing that was quiet. They just stopped accepting cheap imitations of quietness.
        </Reveal>

        <Reveal className="art-pull">
          "The difference between a passing trend and a permanent shift is simple: <em>intention</em>. The first wave was about looking understated. This wave is about being it."
        </Reveal>

        <Reveal className="art-p" as="p">
          That's the crucial distinction. What we're focusing on in our studio right now is not the same surface-level luxury that dominated mood boards in the past. It's more precise. More demanding. And significantly harder to fake.
        </Reveal>

        <Reveal className="art-h2" as="h2">
          What's <em>Different</em> Now
        </Reveal>

        <Reveal className="art-p" as="p">
          Three things separate a permanent aesthetic from the first wave of a trend, and all three inform how we design at Styloom.
        </Reveal>

        <Reveal className="art-p" as="p">
          <strong>Construction is visible.</strong> The first wave was largely about surface — the absence of a logo, the neutral palette, the understated silhouette. The permanent aesthetic goes deeper. The garments that define this moment are technically exceptional. The quietness is in the fabric, the drape, the weight, the way a collar lies. This requires real craft, and it cannot be mass-produced convincingly.
        </Reveal>

        <Reveal className="art-p" as="p">
          <strong>It has a point of view.</strong> Early iterations were largely neutral — beige, cream, grey, navy. A mature aesthetic has a stronger formal language. There are specific silhouettes (wider shoulder, elongated torso), specific fabrics (heavy wool, brushed cashmere, technical linen), and a consistent relationship between the body and the garment that feels considered rather than simply inoffensive.
        </Reveal>

        <Reveal className="art-p" as="p">
          <strong>It's worn differently.</strong> The people wearing this convincingly are not wearing it as a statement about wealth. They're wearing it because they've made a decision about their relationship with design — that they want fewer pieces, made better, that work harder and last longer. This is a values position, not an aesthetic one.
        </Reveal>

        <Reveal className="art-body-img">
          <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=90" alt="Quiet Luxury Detail" />
        </Reveal>
        <p className="art-img-caption">Construction detail — Studio Capsule · Styloom</p>

        <Reveal className="art-h2" as="h2">
          What This Means for <em>Design</em>
        </Reveal>

        <Reveal className="art-p" as="p">
          If the signals from our latest campaigns are accurate — and we believe they are — then the future of design will take this further rather than pivoting away from it. The direction of travel is toward even greater technical investment, even more considered construction, and an even more deliberate reduction in surface decoration.
        </Reveal>

        <Reveal className="art-p" as="p">
          The one area where we expect evolution rather than continuation is color. The neutral palette that defined early quiet luxury will begin to admit more precise, considered color — not as decoration, but as the same kind of intentional decision that defines the rest of the aesthetic. <strong>Color used as restraint, not as expression.</strong>
        </Reveal>

        <Reveal className="art-p" as="p">
          The studios to watch are those who have been building technical capacity quietly for years. The ones who were never really part of the initial wave — because they were always doing something more serious than a trend. Those are the ones who will define what permanent design actually becomes.
        </Reveal>

        <div className="art-divider"></div>
        <Reveal className="art-p" as="p" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--t3)' }}>
          Case Study by Priya Nair · Styloom Studio
        </Reveal>
      </div>

      <div className="art-nav">
        <Link to="/journal"><i className="ri-arrow-left-line"></i> Back to Process</Link>
        <Link to="/journal/article">Next Case Study <i className="ri-arrow-right-line"></i></Link>
      </div>

      <section id="article-related">
        <Reveal className="sec-header">
          <span className="sec-tag">— Keep Reading</span>
          <h2>More from the <em>Studio</em></h2>
          <div className="sec-line"></div>
        </Reveal>
        <div className="related-grid">
          <Reveal className="jrn-card">
            <div className="jrn-img"><img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80" alt="Silhouette" /><span className="jrn-cat">Case Study</span></div>
            <div className="jrn-body"><p className="jrn-meta">Case Study · 6 min</p><h3>The Silhouette That Defined the Era</h3><p>Six campaigns, one shape, no coordination.</p><Link to="/journal/article" className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link></div>
          </Reveal>
          <Reveal className="jrn-card d1">
            <div className="jrn-img"><img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80" alt="AW26" /><span className="jrn-cat">Process</span></div>
            <div className="jrn-body"><p className="jrn-meta">Process · 10 min</p><h3>Building the Foundation</h3><p>What Styloom watches when establishing an aesthetic.</p><Link to="/journal/article" className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link></div>
          </Reveal>
          <Reveal className="jrn-card d2">
            <div className="jrn-img"><img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80" alt="Monochrome" /><span className="jrn-cat">Philosophy</span></div>
            <div className="jrn-body"><p className="jrn-meta">Philosophy · 5 min</p><h3>Monochrome Is Not Boring.</h3><p>You're just reading it wrong.</p><Link to="/journal/article" className="jrn-read">Read <i className="ri-arrow-right-line"></i></Link></div>
          </Reveal>
        </div>
      </section>
    </TransitionWrapper>
  );
}
