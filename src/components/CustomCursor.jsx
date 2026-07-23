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
    const ticker = gsap.ticker.add(() => {
      // Linear interpolation (lerp) for smooth trailing
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      setRingX(rx);
      setRingY(ry);
    });

    // Handle hover states for the ring expansion
    const interactables = document.querySelectorAll('a, button, .magnetic, .ed-item, .fw-card, .jrn-card');
    
    const onEnter = () => document.body.classList.add('cur-hover');
    const onLeave = () => document.body.classList.remove('cur-hover');

    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove(ticker);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
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
