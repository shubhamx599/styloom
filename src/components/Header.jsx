import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('styloom-theme') || 'dark');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation();

  // Sync theme with the DOM and persist user preference.
  // We use data-theme on the root element to drive CSS variable resolution.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('styloom-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Calculate when the navigation bar should lose its transparency.
  // This depends on whether we are on the homepage (with the hero banner) or an inner page.
  useEffect(() => {
    const isInnerPage = location.pathname !== '/';
    
    const handleScroll = () => {
      // Inner pages always require a solid background for readability.
      if (isInnerPage) {
        setIsTransparent(false);
        return;
      }
      
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        // Transition to solid once the user scrolls past the hero section.
        const past = window.scrollY > heroEl.offsetTop + heroEl.offsetHeight - 80;
        setIsTransparent(!past);
      } else {
        // Graceful fallback in case the hero element hasn't mounted yet.
        setIsTransparent(window.scrollY < 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Prevent background scrolling when the mobile menu is open.
  // This avoids the common bug where users can scroll the page underneath the modal.
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  // Reusable NavLink block
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/collections", label: "Collections" },
    { to: "/runway", label: "Campaigns" },
    { to: "/journal", label: "Process" },
    { to: "/about", label: "About" },
    { to: "/connect", label: "Connect" },
  ];

  return (
    <>
      <header id="site-header">
        <div id="top-bar">
          <div id="marquee-track">
            {/* 
              We duplicate the items twice to create an infinite, seamless scrolling effect.
              When the first block finishes scrolling out of view, the second block seamlessly follows, 
              and the animation resets perfectly.
            */}
            {[...Array(2)].map((_, idx) => (
              <span key={idx} className="contents">
                {["Form", "Function", "Fabric", "Styloom Studio", "Archival Works"].map((word, i) => (
                  <span key={i} className="contents">
                    <span>{word}</span><span className="marquee-separator">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <nav id="main-nav" className={isTransparent ? 'transparent' : ''}>
          <Link to="/" id="nav-logo">
            <div className="logo-diamond"></div>
            <span className="logo-word">Styloom</span>
          </Link>

          <div id="nav-links">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div id="nav-right">
            <button id="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
              <i id="theme-icon" className={theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'}></i>
            </button>
            <Link to="/collections" id="nav-cta">Collections</Link>
            <div id="nav-hamburger" onClick={() => setIsMobileOpen(true)}>
              <i className="ri-menu-3-fill"></i>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div id="mobile-overlay" className={isMobileOpen ? 'open' : ''}>
        <div id="mobile-close" onClick={closeMobile}><i className="ri-close-line"></i></div>
        <div id="mobile-links">
          {navLinks.map((link) => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              onClick={closeMobile}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div id="mob-foot">© Styloom Studio · Archival Portfolio</div>
      </div>
    </>
  );
}
