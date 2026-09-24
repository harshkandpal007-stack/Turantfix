import Link from "next/link";

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