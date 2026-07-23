import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">
            <div className="footer-diamond"></div>
            <span className="footer-wordmark">Styloom</span>
          </div>
          <p className="footer-tagline">The shape of what's next. · Issue 01 · 2026</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Platform</h4>
            <Link to="/">Home</Link>
            <Link to="/collections">The Season</Link>
            <Link to="/runway">Runway</Link>
            <Link to="/journal">Journal</Link>
          </div>
          <div className="footer-col">
            <h4>More</h4>
            <Link to="/about">About</Link>
            <Link to="/connect">Connect</Link>
          </div>
          <div className="footer-col">
            <h4>Follow</h4>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Pinterest</a>
            <a href="#" target="_blank" rel="noopener noreferrer">X / Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-div"></div>
      <div className="footer-bottom">
        <p>© 2026 Styloom. All rights reserved.</p>
        <p>Fashion Intelligence · SS26</p>
      </div>
    </footer>
  );
}
