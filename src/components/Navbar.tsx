"use client";

import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="container nav">
        <Link href="/" className="brand" aria-label="TurrantFix home">
          <span className="brand-mark"><Zap size={22} fill="currentColor" /></span>
          <span>Turrant<span>Fix</span></span>
        </Link>
        <div className="nav-links">
          <a href="/#services">Services</a>
          <a href="/#how">How it works</a>
          <a href="/#faq">FAQs</a>
          <Link href="/partner">Partner with us</Link>
        </div>
        <Link className="btn btn-dark nav-cta" href="/book">Book a repair</Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          <a href="/#services" onClick={() => setOpen(false)}>Services</a>
          <a href="/#how" onClick={() => setOpen(false)}>How it works</a>
          <a href="/#faq" onClick={() => setOpen(false)}>FAQs</a>
          <Link href="/partner" onClick={() => setOpen(false)}>Partner with us</Link>
          <Link className="btn btn-dark" href="/book">Book a repair</Link>
        </div>
      )}
    </header>
  );
}
