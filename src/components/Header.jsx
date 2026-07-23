import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('contour-theme') || 'dark');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation();

  // Handle theme toggle
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('contour-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Handle scroll for transparent nav
  useEffect(() => {
    const isInnerPage = location.pathname !== '/';
    
    const handleScroll = () => {
      if (isInnerPage) {
        setIsTransparent(false);
        return;
      }
      
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const past = window.scrollY > heroEl.offsetTop + heroEl.offsetHeight - 80;
        setIsTransparent(!past);
      } else {
        // Fallback if hero isn't found immediately
        setIsTransparent(window.scrollY < 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  // Reusable NavLink block
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/collections", label: "The Season" },
    { to: "/runway", label: "Runway" },
    { to: "/journal", label: "Journal" },
    { to: "/about", label: "About" },
    { to: "/connect", label: "Connect" },
  ];

  return (
    <>
      <header id="site-header">
        <div id="top-bar">
          <div id="marquee-track">
            {/* Repeated twice for infinite scroll illusion */}
            {[...Array(2)].map((_, idx) => (
              <span key={idx} className="contents">
                <span>SS26 Now Showing</span><span className="msep">✦</span>
                <span>Milan</span><span className="msep">✦</span>
                <span>Paris</span><span className="msep">✦</span>
                <span>New York</span><span className="msep">✦</span>
                <span>London</span><span className="msep">✦</span>
                <span>Tokyo</span><span className="msep">✦</span>
                <span>New Delhi</span><span className="msep">✦</span>
                <span>Contour Intelligence — Issue 01 · 2026</span><span className="msep">✦</span>
              </span>
            ))}
          </div>
        </div>

        <nav id="main-nav" className={isTransparent ? 'transparent' : ''}>
          <Link to="/" id="nav-logo">
            <div className="logo-diamond"></div>
            <span className="logo-word">Contour</span>
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
            <Link to="/collections" id="nav-cta">The Season</Link>
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
        <div id="mob-foot">© 2026 Contour · The shape of what's next.</div>
      </div>
    </>
  );
}
