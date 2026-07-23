import { useEffect, useState } from 'react';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the loader after 1900ms (matching legacy script.js)
    const timer1 = setTimeout(() => {
      setIsVisible(false);
      // Wait for the fade out transition before adding 'hero-in' class
      setTimeout(() => {
        document.body.classList.add('hero-in');
      }, 260);
    }, 1900);

    return () => clearTimeout(timer1);
  }, []);

  return (
    <div id="loader" className={!isVisible ? 'hide' : ''}>
      <div id="loader-text">
        <span style={{ '--i': 1 }}>C</span>
        <span style={{ '--i': 2 }}>O</span>
        <span style={{ '--i': 3 }}>N</span>
        <span style={{ '--i': 4 }}>T</span>
        <span style={{ '--i': 5 }}>O</span>
        <span style={{ '--i': 6 }}>U</span>
        <span style={{ '--i': 7 }}>R</span>
      </div>
      <div id="loader-sub">Fashion Intelligence · 2026</div>
      <div id="loader-bar"></div>
    </div>
  );
}
