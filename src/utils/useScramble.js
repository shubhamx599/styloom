import { useState, useEffect } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789✦/·—';

export function useScramble(targetText, delay = 0) {
  const [text, setText] = useState('');

  useEffect(() => {
    let f = 0;
    const tot = 52;
    let iv;

    const timeoutId = setTimeout(() => {
      iv = setInterval(() => {
        setText(
          targetText
            .split('')
            .map((ch, i) => {
              if (ch === ' ' || ch === '/' || ch === '·') return ch;
              return f > (i / targetText.length) * tot * 0.72
                ? ch
                : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join('')
        );
        
        f++;
        if (f >= tot) {
          setText(targetText);
          clearInterval(iv);
        }
      }, 24);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (iv) clearInterval(iv);
    };
  }, [targetText, delay]);

  return text;
}
