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
          <p className="banner-sub">Project inquiries, creative direction, styling partnerships, or just a conversation about design.</p>
        </div>
      </div>

      <section id="connect-section">
        <div className="connect-inner">
          <Reveal className="connect-left">
            <span className="sec-tag">— Get in Touch</span>
            <h2>We read<br /><em>every message.</em></h2>
            <p>Whether you're a designer, a brand, a photographer, or just someone who appreciates modern aesthetics — if you have a project in mind, we want to hear about it. Styloom Studio was built on the idea that the best design comes from collaboration.</p>

            <div className="connect-details">
              <div className="connect-detail">
                <i className="ri-map-pin-line"></i>
                <div><h4>Base</h4><p>Lodhi Colony, New Delhi — 110003</p></div>
              </div>
              <div className="connect-detail">
                <i className="ri-mail-line"></i>
                <div><h4>Studio Inquiries</h4><p>studio@styloom.fashion</p></div>
              </div>
              <div className="connect-detail">
                <i className="ri-camera-lens-line"></i>
                <div><h4>Production</h4><p>production@styloom.fashion</p></div>
              </div>
              <div className="connect-detail">
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

          <Reveal className="connect-right delay-1">
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
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject — e.g. Project Inquiry, Styling, Other" autoComplete="off" />
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

      {/* 
        INFO BLOCKS 
        Abstracted into CSS classes for improved component readability and modular styling.
      */}
      <div className="info-blocks-grid">
        <Reveal className="info-block">
          <span className="info-tag">✦ Client Inquiries</span>
          <h3 className="info-title">For potential<br /><em>projects.</em></h3>
          <p className="info-desc">Creative direction, campaign styling, brand consultation, and aesthetic strategy — contact our studio directly. We respond to all new client inquiries within one business day.</p>
          <a href="mailto:studio@styloom.fashion" className="info-link">studio@styloom.fashion <i className="ri-arrow-right-line"></i></a>
        </Reveal>
        
        <Reveal className="info-block collab delay-1">
          <span className="info-tag">✦ Collaborations</span>
          <h3 className="info-title">Work with<br /><em>STYLOOM.</em></h3>
          <p className="info-desc">We regularly collaborate with independent designers, photographers, and other creative studios on projects that advance modern design. If you have an idea that fits, we'd like to hear it.</p>
          <a href="mailto:production@styloom.fashion" className="info-link">production@styloom.fashion <i className="ri-arrow-right-line"></i></a>
        </Reveal>
      </div>
    </TransitionWrapper>
  );
}
