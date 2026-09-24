import Link from "next/link";

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
          border: "1px solid rgba(255,255,255,.12)",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,.18)",
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

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand brand-light">
            <BrandLockup />
          </Link>
          <p>Fast, transparent device repair powered by verified local technician partners.</p>
        </div>
        <div>
          <b>Services</b>
          <Link href="/book">Screen repair</Link>
          <Link href="/book">Battery repair</Link>
          <Link href="/book">Diagnostics</Link>
        </div>
        <div>
          <b>Company</b>
          <Link href="/partner">Partner network</Link>
          <Link href="/faq">FAQs</Link>
          <a href="mailto:support@turantfix.com">Contact</a>
        </div>
        <div>
          <b>Available daily</b>
          <span>9:00 AM – 9:00 PM</span>
          <span>Launch coverage expanding city by city.</span>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 TurantFix. All rights reserved.</span><span>Privacy · Terms</span></div>
    </footer>
  );
}