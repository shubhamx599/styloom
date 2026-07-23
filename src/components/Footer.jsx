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
          <p className="footer-tagline">Timeless aesthetic direction.</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Platform</h4>
            <Link to="/">Home</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/runway">Campaigns</Link>
            <Link to="/journal">Process</Link>
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
        <p>© Styloom Studio. All rights reserved.</p>
        <p>Archival Portfolio</p>
      </div>
    </footer>
  );
}
