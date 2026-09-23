import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand brand-light">
            <span className="brand-mark"><Zap size={22} fill="currentColor" /></span>
            <span>Turrant<span>Fix</span></span>
          </Link>
          <p>Fast, transparent device repair powered by verified local technician partners.</p>
        </div>
        <div><b>Services</b><a href="/book">Screen repair</a><a href="/book">Battery repair</a><a href="/book">Diagnostics</a></div>
        <div><b>Company</b><Link href="/partner">Partner network</Link><a href="#">Warranty</a><a href="#">Contact</a></div>
        <div><b>Available daily</b><span>9:00 AM – 9:00 PM</span><span>Launch coverage expanding city by city.</span></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 TurrantFix. All rights reserved.</span><span>Privacy · Terms</span></div>
    </footer>
  );
}
