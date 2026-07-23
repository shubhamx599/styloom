import { useState } from 'react';
import TransitionWrapper from '../components/TransitionWrapper';
import Reveal from '../components/Reveal';

export default function Connect() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, error, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
      return;
    }

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 3500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <TransitionWrapper>
      <div className="page-banner" data-ghost="HLO">
        <div className="banner-inner">
          <span className="banner-tag">05 / Connect</span>
          <h1 className="banner-title">Let's <em>Connect</em></h1>
          <p className="banner-sub">Press, collaborations, editorial partnerships, or just a conversation about fashion.</p>
        </div>
      </div>

      <section id="connect-section">
        <div className="connect-inner">
          <Reveal className="connect-left">
            <span className="sec-tag">— Get in Touch</span>
            <h2>We read<br /><em>every message.</em></h2>
            <p>Whether you're a designer, a stylist, a journalist, or just someone who follows fashion closely — if you have something worth saying, we want to hear it. Contour was built on the idea that the best intelligence comes from many perspectives.</p>

            <div className="connect-details">
              <div className="cdet">
                <i className="ri-map-pin-line"></i>
                <div><h4>Base</h4><p>Lodhi Colony, New Delhi — 110003</p></div>
              </div>
              <div className="cdet">
                <i className="ri-mail-line"></i>
                <div><h4>Editorial</h4><p>edit@contour.fashion</p></div>
              </div>
              <div className="cdet">
                <i className="ri-newspaper-line"></i>
                <div><h4>Press</h4><p>press@contour.fashion</p></div>
              </div>
              <div className="cdet">
                <i className="ri-time-line"></i>
                <div><h4>Response Time</h4><p>Within 24 hours · Mon – Sat</p></div>
              </div>
            </div>

            <div className="socials">
              <a href="#" aria-label="Instagram"><i className="ri-instagram-line"></i></a>
              <a href="#" aria-label="X"><i className="ri-twitter-x-line"></i></a>
              <a href="#" aria-label="Pinterest"><i className="ri-pinterest-line"></i></a>
              <a href="#" aria-label="Email"><i className="ri-mail-line"></i></a>
            </div>
          </Reveal>

          <Reveal className="connect-right d1">
            <form onSubmit={handleSubmit} style={{ display: 'contents' }}>
              <div className="form-group">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" autoComplete="off" />
                <div className="f-line"></div>
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" autoComplete="off" />
                <div className="f-line"></div>
              </div>
              <div className="form-group">
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject — e.g. Press, Collaboration, Pitch, Other" autoComplete="off" />
                <div className="f-line"></div>
              </div>
              <div className="form-group">
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Your Message"></textarea>
                <div className="f-line"></div>
              </div>
              <button 
                type="submit" 
                className="btn-submit" 
                style={{ background: status === 'error' ? '#7a0000' : status === 'success' ? '#1a5c35' : '' }}
              >
                <span>{status === 'error' ? 'Fill all fields.' : status === 'success' ? 'Sent ✦' : 'Send Message'}</span>
                <i className="ri-arrow-right-line"></i>
              </button>
              <p id="form-success" style={{ display: status === 'success' ? 'block' : 'none' }}>Received. We'll be in touch within 24 hours. ✦</p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* TWO COL INFO */}
      <div style={{ background: 'var(--s0)', padding: '80px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', borderTop: '1px solid var(--border)' }}>
        <Reveal style={{ background: 'var(--s2)', padding: '52px 44px', border: '1px solid var(--border)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '16px' }}>✦ Press &amp; Media</span>
          <h3 style={{ fontFamily: 'var(--font-disp)', fontSize: 'clamp(20px, 2.5vw, 34px)', fontWeight: 600, color: 'var(--t1)', lineHeight: 1.15, marginBottom: '16px' }}>For media<br /><em style={{ fontStyle: 'italic', color: 'var(--t2)' }}>enquiries.</em></h3>
          <p style={{ fontSize: '13.5px', lineHeight: 1.8, color: 'var(--t2)', marginBottom: '24px' }}>Lookbook access, interview requests, image usage, and editorial partnerships — contact our press team directly. We respond to all press enquiries within one business day.</p>
          <a href="mailto:press@contour.fashion" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '7px', borderBottom: '1px solid rgba(255, 69, 0, .35)', paddingBottom: '3px' }}>press@contour.fashion <i className="ri-arrow-right-line"></i></a>
        </Reveal>
        
        <Reveal className="d1" style={{ background: 'rgba(255, 69, 0, .05)', padding: '52px 44px', border: '1px solid rgba(255, 69, 0, .15)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '16px' }}>✦ Collaborations</span>
          <h3 style={{ fontFamily: 'var(--font-disp)', fontSize: 'clamp(20px, 2.5vw, 34px)', fontWeight: 600, color: 'var(--t1)', lineHeight: 1.15, marginBottom: '16px' }}>Work with<br /><em style={{ fontStyle: 'italic', color: 'var(--t2)' }}>CONTOUR.</em></h3>
          <p style={{ fontSize: '13.5px', lineHeight: 1.8, color: 'var(--t2)', marginBottom: '24px' }}>We collaborate with designers, photographers, studios, and other editorial platforms on projects that advance the conversation about fashion. If you have an idea that fits, we'd like to hear it.</p>
          <a href="mailto:edit@contour.fashion" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '7px', borderBottom: '1px solid rgba(255, 69, 0, .35)', paddingBottom: '3px' }}>edit@contour.fashion <i className="ri-arrow-right-line"></i></a>
        </Reveal>
      </div>
    </TransitionWrapper>
  );
}
