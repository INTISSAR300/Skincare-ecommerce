/* global gsap */
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navbar() {
  const navRef = useRef(null);

  useLayoutEffect(() => {
 
    if (!window.gsap || !navRef.current) return;

    const nav = navRef.current;
    const q = gsap.utils.selector(nav);


    gsap.killTweensOf(nav);
    gsap.killTweensOf(q(".logo, .nav_link, .likes-counter"));
    const tl = gsap.timeline({ 
      defaults: { ease: "power4.out" } 
    });


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
        <Link to="/creams" className="nav_link">Cream</Link>
        <Link to="/Serums" className="nav_link">Serum</Link>
        <Link to="/Toners" className="nav_link">Toner</Link>
        <Link to="/Ampoules" className="nav_link">Ampoule</Link>
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