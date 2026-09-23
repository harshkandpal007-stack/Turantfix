"use client";

import Link from "next/link";
import { HelpCircle, Menu, Route, X, Zap } from "lucide-react";
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
          <Link className="nav-action-link" href="/book">
            <Route size={15} /> How it works
          </Link>
          <Link className="nav-action-link" href="/faq">
            <HelpCircle size={15} /> FAQs
          </Link>
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
          <Link href="/book" onClick={() => setOpen(false)}>How it works</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQs</Link>
          <Link href="/partner" onClick={() => setOpen(false)}>Partner with us</Link>
          <Link className="btn btn-dark" href="/book" onClick={() => setOpen(false)}>Book a repair</Link>
        </div>
      )}
    </header>
  );
}
