import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        
        <div className="footer-col">
          <h4>NAVIGATION</h4>
          <Link to="/" className="footer-link">HOME</Link>
          <Link to="/about" className="footer-link">ABOUT BRANDS</Link>
          <Link to="/" className="footer-link">CATALOG</Link>
        </div>

        <div className="footer-logo-section">
          <span className="logo">BELLA</span>
          <div className="socials">INSTAGRAM — TWITTER — FACEBOOK</div>
        </div>

        <div className="footer-col">
          <h4>STAY UPDATED</h4>
          <div className="subscribe-box">
            <input type="text" placeholder="ENTER YOUR EMAIL" />
            <span className="subscribe-btn">→</span>
          </div>
        </div>

      </div>
    </footer>
  );
}