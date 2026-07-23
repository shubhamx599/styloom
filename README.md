# Styloom Studio — Archival Portfolio

**Styloom** is a premium, high-performance web application. Designed as a conceptual fashion styling studio, it showcases "past work", design philosophy, and campaigns. It is built as a complete, static showcase piece delivering an exceptionally high-end user experience.

## Tech Stack

This project was built focusing on top-tier performance, cinematic animations, and a seamless developer experience:

- **Framework:** React + Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4 + Vanilla CSS Hybrid
- **Animations:** Framer Motion (Page Transitions & Reveals) & GSAP (Custom Cursor Performance)
- **Deployment:** Ready for Vercel (SPA routing configured)

## Features

- **Fluid Page Transitions:** Achieved via Framer Motion's `AnimatePresence`.
- **Cinematic Scroll Reveals:** Custom directional reveal components based on intersection observers and Framer Motion.
- **Custom Cursor:** High-performance, GSAP-powered custom cursor that avoids React state bottlenecks.
- **Dark/Light Mode:** Seamless theme toggling with custom CSS variable mapping.
- **Responsive Grid System:** A bespoke editorial layout utilizing CSS grid and asymmetric tile designs.

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shubhamx599/styloom.git
   cd styloom
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Legacy Files
The original HTML/CSS version of this project is preserved in the `_legacy` folder for historical reference and asset fallback.

## License
© 2026 Styloom. All rights reserved.
