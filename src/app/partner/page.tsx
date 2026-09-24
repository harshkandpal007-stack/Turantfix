"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BadgeCheck, BarChart3, BriefcaseBusiness, Check, Mail, MessageCircle, ShieldCheck, WalletCards } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/";
const SUPPORT_EMAIL = "mailto:support@turantfix.com";

const heroPhoto = "https://images.pexels.com/photos/35157346/pexels-photo-35157346.jpeg?auto=compress&cs=tinysrgb&w=1200";
const applyPhoto = "https://images.pexels.com/photos/35155421/pexels-photo-35155421.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function PartnerPage() {
  const [sent, setSent] = useState(false);
  return <><Navbar /><main>
    <section className="partner-hero">
      <div className="container partner-hero-grid">
        <div>
          <span className="eyebrow"><span className="pulse" /> TurantFix Partner Network</span>
          <h1>Own the work.<br /><em>Grow with the network.</em></h1>
          <p>For skilled device-repair professionals who want access to demand, a professional workflow and a reputation layer — without becoming an employee.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
            <a href="#apply" className="btn btn-lime">Apply as a partner <ArrowRight /></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-dark"><MessageCircle size={18} /> WhatsApp support</a>
            <a href={SUPPORT_EMAIL} className="btn" style={{ background: "#fff", color: "#111" }}><Mail size={18} /> Email us</a>
          </div>
        </div>
        <div className="partner-hero-art">
          <div style={{ width: "100%", maxWidth: 420, background: "#202020", borderRadius: 32, padding: 12, boxShadow: "0 30px 80px rgba(0,0,0,.35)" }}>
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 24, aspectRatio: "4/5", background: "#2a2a2a" }}>
              <img src={heroPhoto} alt="Repair technician working on a smartphone board" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", left: 14, right: 14, bottom: 14, background: "rgba(255,255,255,.95)", borderRadius: 18, padding: "12px 14px", display: "grid", gridTemplateColumns: "22px 1fr", gap: 10, alignItems: "center", color: "#111" }}>
                <BadgeCheck size={20} color="#6f9925" />
                <div><b style={{ display: "block", fontSize: 14 }}>Verified repair partner</b><small style={{ display: "block", fontSize: 11, color: "#666" }}>Independent · Trained · Quality-checked</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="partner-value"><div className="container"><div className="section-head center"><span className="kicker">THE MODEL</span><h2>A marketplace layer for repair professionals.</h2><p>TurantFix is designed to coordinate demand and quality — not to turn every technician into payroll headcount.</p></div><div className="value-grid">{[[BriefcaseBusiness, "Independent operation", "Partners remain independent service providers and choose eligible work within defined zones."], [BarChart3, "Demand engine", "TurantFix can route customer bookings based on skill, geography, availability and ratings."], [ShieldCheck, "Quality layer", "Standard diagnostics, job evidence, customer confirmation and warranty workflows protect trust."], [WalletCards, "Transparent economics", "Partner payout logic can be visible per job before acceptance, rather than negotiated after work."]].map(([I, t, d]) => <div className="value-card" key={String(t)}><span><I /></span><h3>{String(t)}</h3><p>{String(d)}</p></div>)}</div></div></section>

    <section className="partner-process"><div className="container partner-process-grid"><div><span className="kicker light">PARTNER JOURNEY</span><h2>Qualification before scale.</h2><p>The operational moat is not the website. It is whether you can consistently control partner quality while expanding supply.</p></div><div>{[["01", "Apply", "Profile, service zone, experience and device skills."], ["02", "Verify", "Identity, references and technical capability checks."], ["03", "Train", "TurantFix SOP, customer protocol and repair evidence standards."], ["04", "Go live", "Receive eligible repair requests inside your service radius."], ["05", "Compound", "Ratings and completion quality influence future job access."]].map(([n, t, d]) => <div className="journey" key={n}><span>{n}</span><div><b>{t}</b><p>{d}</p></div></div>)}</div></div></section>

    <section className="apply" id="apply"><div className="container apply-grid"><div><div style={{ position: "relative", overflow: "hidden", borderRadius: 26, aspectRatio: "5/4", marginBottom: 24, background: "#eceee7" }}><img src={applyPhoto} alt="Smartphone battery repair in progress" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div><span className="kicker">JOIN THE NETWORK</span><h2>Start your partner application.</h2><p>This form is frontend-only for now. Later, connect it to your database/CRM and verification workflow.</p><ul><li><Check /> Smartphone repair experience</li><li><Check /> Valid identity and address verification</li><li><Check /> Own repair toolkit</li><li><Check /> Professional customer conduct</li></ul><div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-dark"><MessageCircle size={18} /> WhatsApp support</a><a href={SUPPORT_EMAIL} className="btn" style={{ background: "#fff", color: "#111", border: "1px solid #d9d9d3" }}><Mail size={18} /> Email us</a></div></div>{!sent ? <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="partner-form"><label><span>Full name</span><input required placeholder="Your name" /></label><label><span>Mobile number</span><input required inputMode="numeric" placeholder="10-digit mobile" /></label><label><span>Primary city</span><input required placeholder="City" /></label><label><span>Years of repair experience</span><select required defaultValue=""><option value="" disabled>Select experience</option><option>Less than 1 year</option><option>1–3 years</option><option>3–5 years</option><option>5+ years</option></select></label><label className="wide"><span>Brands you repair</span><input required placeholder="Apple, Samsung, OnePlus..." /></label><button className="btn btn-dark wide">Submit application <ArrowRight /></button></form> : <div className="partner-form sent"><BadgeCheck /><h3>Application captured.</h3><p>Demo only — no data was transmitted. Connect your backend when partner operations are ready.</p></div>}</div></section>
  </main><Footer /></>
}