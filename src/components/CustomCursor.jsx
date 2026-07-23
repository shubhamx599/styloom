import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    
    if (!dot || !ring) return;

    // Use GSAP quickSetter for massive performance boost
    const setDotX = gsap.quickSetter(dot, "x", "px");
    const setDotY = gsap.quickSetter(dot, "y", "px");
    const setRingX = gsap.quickSetter(ring, "x", "px");
    const setRingY = gsap.quickSetter(ring, "y", "px");

    // We track the target mouse position (mx, my) and the ring's current position (rx, ry)
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      // Dot moves instantly
      setDotX(mx);
      setDotY(my);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Ticker for the trailing ring effect
    const tick = () => {
      // Linear interpolation (lerp) for smooth trailing
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      setRingX(rx);
      setRingY(ry);
    };
    gsap.ticker.add(tick);

    // Handle hover states for the ring expansion using event delegation
    const interactSelector = 'a, button, .magnetic, .ed-item, .fw-card, .jrn-card';
    
    const onMouseOver = (e) => {
      if (e.target.closest(interactSelector)) {
        document.body.classList.add('cur-hover');
      }
    };
    
    const onMouseOut = (e) => {
      if (e.target.closest(interactSelector)) {
        document.body.classList.remove('cur-hover');
      }
    };

    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove(tick);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  // Return the same HTML structure expected by styles.css
  return (
    <>
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
}
