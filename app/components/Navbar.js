"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className={`header-inner ${open ? "nav-open" : ""}`}>
        <div className="logo-area">
          <div className="logo-text glitch" data-text="VUSD.AI">
            VUSD.AI
          </div>
        </div>

        <nav className="nav">
          <a href="#why">Why now</a>
          <a href="#pillars">What we’re building</a>
          <a href="#architecture">Architecture</a>
          <a href="#stability">Stability</a>
          <a href="#roadmap">Progress</a>
          <a href="#team">Team</a>
          <a href="#investors" className="nav-cta">
            For investors
          </a>
        </nav>

        <div
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span></span>
        </div>
      </div>

      <div className="nav-mobile" id="navMobile">
        <a href="#why" onClick={() => setOpen(false)}>
          Why now
        </a>
        <a href="#pillars" onClick={() => setOpen(false)}>
          What we’re building
        </a>
        <a href="#architecture" onClick={() => setOpen(false)}>
          Architecture
        </a>
        <a href="#stability" onClick={() => setOpen(false)}>
          Stability
        </a>
        <a href="#roadmap" onClick={() => setOpen(false)}>
          Progress
        </a>
        <a href="#team" onClick={() => setOpen(false)}>
          Team
        </a>
        <a
          href="#investors"
          className="nav-cta"
          onClick={() => setOpen(false)}
        >
          For investors
        </a>
      </div>
    </header>
  );
}
