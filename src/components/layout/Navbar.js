/* global gsap */
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navbar() {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    // 1. Safety check
    if (!window.gsap || !navRef.current) return;

    const nav = navRef.current;
    const q = gsap.utils.selector(nav);

    // 2. Kill any old animations
    gsap.killTweensOf(nav);
    gsap.killTweensOf(q(".logo, .nav_link, .likes-counter"));

    // 3. Setup Timeline
    const tl = gsap.timeline({ 
      defaults: { ease: "power4.out" } 
    });

    // 4. THE ANIMATION
    // We start from a clear state
    tl.fromTo(nav, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(q(".logo, .nav_link, .likes-counter"),
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
      "-=0.5"
    );

    return () => tl.kill();
  }, []);

  return (
    <header className="main-nav" ref={navRef}>
      <div className="nav_left">
        <Link to="/" className="logo">BELLA</Link>
      </div>

      <nav className="nav_center">
        <Link to="/about" className="nav_link">ABOUT US</Link>
        <Link to="/shop" className="nav_link">SHOP</Link>
        <Link to="/contact" className="nav_link">CONTACTS</Link>
      </nav>

      <div className="nav_right">
        <div className="likes-counter">
          <span className="heart-icon-nav">♥</span>
          <span id="like-count">0</span>
        </div>
      </div>
    </header>
  );
}