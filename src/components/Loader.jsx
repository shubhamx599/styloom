import { useEffect, useState } from 'react';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer2;
    // Hide the loader after 1900ms (matching legacy script.js)
    const timer1 = setTimeout(() => {
      setIsVisible(false);
      // Wait for the fade out transition before adding 'hero-in' class
      timer2 = setTimeout(() => {
        document.body.classList.add('hero-in');
      }, 260);
    }, 1900);

    return () => {
      clearTimeout(timer1);
      if (timer2) clearTimeout(timer2);
    };
  }, []);

  return (
    <div id="loader" className={!isVisible ? 'hide' : ''}>
      <div id="loader-text">
        <span style={{ '--i': 1 }}>S</span>
        <span style={{ '--i': 2 }}>T</span>
        <span style={{ '--i': 3 }}>Y</span>
        <span style={{ '--i': 4 }}>L</span>
        <span style={{ '--i': 5 }}>O</span>
        <span style={{ '--i': 6 }}>O</span>
        <span style={{ '--i': 7 }}>M</span>
      </div>
      <div id="loader-sub">Styloom Studio · Archival Portfolio</div>
      <div id="loader-bar"></div>
    </div>
  );
}
