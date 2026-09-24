"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function BrandLockup() {
  return (
    <>
      <span
        className="brand-mark"
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          background: "#fff",
          border: "1px solid rgba(20,20,20,.08)",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,.07)",
        }}
      >
        <img
          src="/images/logo/turantfix-logo.png"
          alt="TurantFix logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
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
          <Link href="/about">About Us</Link>
          <Link href="/faq">FAQs</Link>
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
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQs</Link>
          <Link href="/partner" onClick={() => setOpen(false)}>Partner with us</Link>
          <Link className="btn btn-dark" href="/book" onClick={() => setOpen(false)}>Book a repair</Link>
        </div>
      )}
    </header>
  );
}