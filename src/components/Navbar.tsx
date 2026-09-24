"use client";

import Link from "next/link";
import { HelpCircle, Menu, Route, X } from "lucide-react";
import { useState } from "react";

function BrandLockup() {
  return (
    <>
      <span
        className="brand-mark"
        style={{
          width: 46,
          height: 46,
          borderRadius: 14,
          background: "linear-gradient(145deg, #181a16 0%, #272a23 100%)",
          position: "relative",
          overflow: "hidden",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,.06)",
        }}
      >
        <span style={{ position: "absolute", width: 18, height: 18, borderRadius: 999, background: "#b3f12f", left: 8, top: 14 }} />
        <span style={{ position: "absolute", width: 18, height: 4, borderRadius: 999, background: "#b3f12f", right: 7, top: 21, transform: "rotate(-32deg)" }} />
      </span>
      <span style={{ fontSize: 29, fontWeight: 900, letterSpacing: "-1.1px" }}>
        Turant<span style={{ color: "#78a900" }}>Fix</span>
      </span>
    </>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="container nav">
        <Link href="/" className="brand" aria-label="TurantFix home">
          <BrandLockup />
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