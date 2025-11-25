"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className={`header-inner ${open ? "nav-open" : ""}`}>
        {/* Логотип / бренд-зона */}
        <div className="logo-area">
          <a href="#top" className="logo-text" aria-label="VUSD home">
            <span className="logo-main">VUSD.AI</span>
            <span className="logo-tagline">Private • AI-governed USD</span>
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

        {/* Бургер для мобилы */}
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
      <div className="nav-mobile" id="navMobile">
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
