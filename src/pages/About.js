import React, { useLayoutEffect, useRef } from "react";
import "./About.css";

export default function About() {
  const containerRef = useRef(null);

  const splitToChars = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char-span">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useLayoutEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ 
        defaults: { ease: "expo.out" } 
      });

      // 1. Title Animation - Using clearProps to ensure text stays visible
      tl.from(".char-span", {
        y: "100%",
        opacity: 0,
        duration: 1.2,
        stagger: 0.02,
        clearProps: "all" // CRITICAL: Removes GSAP styles after finish
      });

      // 2. Bio Paragraphs
      tl.from(".bio-p", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        clearProps: "all"
      }, "-=0.8");

      // 3. Technical Tags - Fixed "undesirable" behavior
      tl.from(".tech-tag", {
        x: -30,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        clearProps: "all" 
      }, "-=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="about-wrapper" ref={containerRef}>
      <div className="about-content">
        
        <div className="title-reveal-box">
          <h1 className="about-title">
            {splitToChars("The Visionary Architect")}
          </h1>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <p className="bio-p intro-text">
              BELLA is a digital sanctuary for skincare, envisioned and engineered 
              by <strong>Intissar Manssouri</strong>.
            </p>
            <p className="bio-p">
              This platform represents the intersection of aesthetic purity 
              and technical precision. Every line of code mirrors the 
              quality of the products—clean and sophisticated.
            </p>
            <p className="bio-p">
              As a Full-Stack Developer specializing in <strong>Laravel</strong> and 
              <strong> React JS</strong>, I build digital experiences where logic 
              meets fluid design.
            </p>
          </div>

          <aside className="tech-specs">
            <h4>TECHNICAL SPECIFICATION</h4>
            <div className="tags-container">
              <span className="tech-tag">LARAVEL / PHP</span>
              <span className="tech-tag">REACT JS / SPA</span>
              <span className="tech-tag">GSAP / MOTION</span>
              <span className="tech-tag">UI/UX DESIGN</span>
            </div>

            <div className="personal-signature">
              <p>INTISSAR MANSSOURI</p>
              <p className="year">© 2026 EDITION</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}