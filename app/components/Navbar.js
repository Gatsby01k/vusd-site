"use client";

import { useState, useCallback } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((v) => !v);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <header className="header">
      <div className={`header-inner ${open ? "nav-open" : ""}`}>
        {/* Лого / бренд */}
        <div className="logo-area">
          <a href="#top" className="logo-text" aria-label="VUSD home">
            <span className="logo-main">VUSD.AI</span>
            <span className="logo-tagline">PRIVATE • AI-GOVERNED USD</span>
          </a>
        </div>

        {/* Десктоп-меню */}
        <nav className="nav" aria-label="Main navigation">
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

        {/* Бургер на мобиле */}
        <button
          type="button"
          className="nav-toggle"
          onClick={toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
        </button>
      </div>

      {/* Мобильное меню */}
      <div className="nav-mobile">
        <a href="#why" onClick={close}>
          Why now
        </a>
        <a href="#pillars" onClick={close}>
          What we’re building
        </a>
        <a href="#architecture" onClick={close}>
          Architecture
        </a>
        <a href="#stability" onClick={close}>
          Stability
        </a>
        <a href="#roadmap" onClick={close}>
          Progress
        </a>
        <a href="#team" onClick={close}>
          Team
        </a>
        <a href="#investors" className="nav-cta" onClick={close}>
          For investors
        </a>
      </div>
    </header>
  );
}
