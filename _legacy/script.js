/* =============================================
   CONTOUR — script.js
   Fashion Intelligence · 2026
   ============================================= */

/* ── THEME — DARK IS DEFAULT ─────────────────── */
const root  = document.documentElement;
const saved = localStorage.getItem('contour-theme') || 'dark';
root.setAttribute('data-theme', saved);

function setThemeIcon(t) {
  const ic = document.getElementById('theme-icon');
  if (ic) ic.className = t === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
}
setThemeIcon(saved);

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('contour-theme', next);
  setThemeIcon(next);
});

/* ── LOADER ─────────────────────────────────── */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('hide');
    setTimeout(() => {
      document.body.classList.add('hero-in');
      initScramble();
    }, 260);
  }, 1900);
});

/* ── CUSTOM CURSOR ───────────────────────────── */
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
if (dot && ring) {
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    dot.style.left=mx+'px'; dot.style.top=my+'px';
  });
  (function loop(){rx+=(mx-rx)*.11;ry+=(my-ry)*.11;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop);})();
  document.querySelectorAll('a,button,.ed-item,.fw-card,.jrn-card,.team-card,.city-block,.filter-btn,.jfilt-btn,.feat-grid').forEach(el=>{
    el.addEventListener('mouseenter',()=>document.body.classList.add('cur-hover'));
    el.addEventListener('mouseleave',()=>document.body.classList.remove('cur-hover'));
  });
}

/* ── WARM GLOW CURSOR ON HERO ─────────────────── */
const heroEl = document.getElementById('hero');
if (heroEl) {
  heroEl.addEventListener('mousemove', e => {
    const r = heroEl.getBoundingClientRect();
    heroEl.style.setProperty('--lx', ((e.clientX-r.left)/r.width*100).toFixed(1)+'%');
    heroEl.style.setProperty('--ly', ((e.clientY-r.top)/r.height*100).toFixed(1)+'%');
  });
}

/* ── TEXT SCRAMBLE ───────────────────────────── */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789✦/·—';
function scramble(el, text, delay) {
  if (!el) return;
  let f=0, tot=52;
  setTimeout(()=>{
    const iv = setInterval(()=>{
      el.textContent = text.split('').map((ch,i)=>{
        if(ch===' '||ch==='/'||ch==='·') return ch;
        return f > (i/text.length)*tot*.72 ? ch : GLYPHS[Math.floor(Math.random()*GLYPHS.length)];
      }).join('');
      if(++f>=tot){el.textContent=text;clearInterval(iv);}
    }, 24);
  }, delay||0);
}
function initScramble() {
  const tag = document.getElementById('hero-tag');
  if (tag) scramble(tag, tag.dataset.text || tag.textContent.trim(), 350);
}

/* ── MAGNETIC BUTTONS ────────────────────────── */
document.querySelectorAll('.magnetic').forEach(btn=>{
  btn.addEventListener('mousemove', e=>{
    const r=btn.getBoundingClientRect();
    btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.26}px)`;
  });
  btn.addEventListener('mouseleave', ()=>{
    btn.style.transition='transform .55s cubic-bezier(.16,1,.3,1)';
    btn.style.transform='';
    setTimeout(()=>btn.style.transition='',600);
  });
});

/* ── ANIMATED COUNTERS ───────────────────────── */
const co = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    const el=e.target, raw=el.dataset.count, num=parseInt(raw), suf=raw.replace(/[0-9]/g,'');
    const dur=1700, t0=performance.now();
    const tick=now=>{ const p=Math.min((now-t0)/dur,1),ease=1-Math.pow(1-p,3); el.textContent=Math.floor(ease*num)+suf; if(p<1)requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
    co.unobserve(el);
  }
}),{threshold:.4});
document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));

/* ── NAVIGATION ──────────────────────────────── */
const siteHeader = document.getElementById('site-header');
const mainNav    = document.getElementById('main-nav');
const isInner    = document.body.classList.contains('inner-page');

function handleNavScroll() {
  if (!isInner && heroEl) {
    const past = window.scrollY > heroEl.offsetTop + heroEl.offsetHeight - 80;
    mainNav.classList.toggle('transparent', !past);
  }
}
if (!isInner) mainNav.classList.add('transparent');
window.addEventListener('scroll', handleNavScroll, {passive:true});
handleNavScroll();

/* ── MOBILE MENU ─────────────────────────────── */
const mob = document.getElementById('mobile-overlay');
document.getElementById('nav-hamburger')?.addEventListener('click',()=>{
  mob?.classList.add('open'); document.body.style.overflow='hidden';
});
const closeMob=()=>{ mob?.classList.remove('open'); document.body.style.overflow=''; };
document.getElementById('mobile-close')?.addEventListener('click',closeMob);
mob?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMob));

/* ── SMOOTH SCROLL ───────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(!t)return; e.preventDefault();
    window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-((siteHeader?.offsetHeight||0)+10),behavior:'smooth'});
  });
});

/* ── SCROLL REVEAL ───────────────────────────── */
const ro = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target);}
}),{threshold:.09,rootMargin:'0px 0px -24px 0px'});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

/* ── ACTIVE NAV LINK ─────────────────────────── */
const pg = window.location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('#nav-links a,#mobile-links a').forEach(a=>{
  if(a.getAttribute('href')===pg||(pg===''&&a.getAttribute('href')==='index.html'))
    a.classList.add('active');
});

/* ── EDITORIAL / SEASON FILTER ───────────────── */
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat=btn.dataset.filter;
    document.querySelectorAll('.ed-full-item').forEach(item=>{
      const show=cat==='all'||item.dataset.cat===cat;
      Object.assign(item.style,{opacity:show?'':'0',transform:show?'':'scale(.97)',pointerEvents:show?'':'none'});
    });
  });
});

/* ── JOURNAL FILTER ──────────────────────────── */
document.querySelectorAll('.jfilt-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.jfilt-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat=btn.dataset.filter;
    document.querySelectorAll('.jrn-full-grid .jrn-card').forEach(card=>{
      const show=cat==='all'||card.dataset.cat===cat;
      Object.assign(card.style,{opacity:show?'':'0',transform:show?'':'scale(.97)',pointerEvents:show?'':'none'});
    });
  });
});

/* ── VIDEO PARALLAX ──────────────────────────── */
const heroVid = document.querySelector('#hero-video-frame video');
if (heroVid) window.addEventListener('scroll',()=>{ heroVid.style.transform=`translateY(${window.scrollY*.18}px)`; },{passive:true});

/* ── CONTACT FORM ────────────────────────────── */
document.getElementById('submit-btn')?.addEventListener('click',()=>{
  const n=document.getElementById('f-name')?.value.trim();
  const e=document.getElementById('f-email')?.value.trim();
  const m=document.getElementById('f-message')?.value.trim();
  const succ=document.getElementById('form-success');
  const b=document.querySelector('#submit-btn span');
  const btn=document.getElementById('submit-btn');
  if(!n||!e||!m){
    btn.style.background='#7a0000'; b.textContent='Fill all fields.';
    setTimeout(()=>{ btn.style.background=''; b.textContent='Send Message'; },2000); return;
  }
  btn.style.background='#1a5c35'; b.textContent='Sent ✦';
  if(succ) succ.style.display='block';
  ['f-name','f-email','f-message','f-subject'].forEach(id=>{ const el=document.getElementById(id); if(el)el.value=''; });
  setTimeout(()=>{ btn.style.background=''; b.textContent='Send Message'; if(succ)succ.style.display='none'; },3500);
});
