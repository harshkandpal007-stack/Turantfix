"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BatteryCharging, Check, ChevronDown, Clock3, MapPin, Search, ShieldCheck, Smartphone, Sparkles, Star, Wrench, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import { brands, devices } from "@/data/devices";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: .55 } };

function PhoneVisual() {
  return (
    <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .65 }}>
      <motion.div className="float-card fc-one" animate={{ y: [0,-8,0] }} transition={{ duration: 3.4, repeat: Infinity }}><Clock3 size={18}/><b>Fast arrival</b><span>Choose a convenient slot</span></motion.div>
      <motion.div className="phone-shell" animate={{ y: [0, -10, 0], rotate: [-2, 0, -2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
        <div className="phone-speaker"/><div className="phone-screen">
          <div className="mini-logo"><Zap size={16} fill="currentColor"/>TurrantFix</div>
          <div className="screen-card"><span>Repair booked</span><b>Technician partner<br/>on the way</b><div className="progress"><i/></div><small>Track status in real time</small></div>
          <div className="screen-tech"><div className="avatar">AK</div><div><b>Arjun K.</b><span>Verified repair partner</span></div><strong>4.9 ★</strong></div>
        </div>
      </motion.div>
      <motion.div className="float-card fc-two" animate={{ y: [0,8,0] }} transition={{ duration: 3.8, repeat: Infinity }}><ShieldCheck size={18}/><b>Warranty-backed</b><span>Clear coverage on eligible repairs</span></motion.div>
    </motion.div>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [faq, setFaq] = useState(0);
  const matches = useMemo(() => query.trim() ? devices.filter(d => d.model.toLowerCase().includes(query.toLowerCase())).slice(0,6) : [], [query]);

  return <>
    <section className="hero">
      <div className="hero-orb orb-a"/><div className="hero-orb orb-b"/>
      <div className="container hero-grid">
        <motion.div className="hero-copy" initial={{ opacity:0,y:20 }} animate={{opacity:1,y:0}} transition={{duration:.55}}>
          <div className="eyebrow"><span className="pulse"/> Device repair, re-engineered</div>
          <h1>Your phone breaks.<br/><em>We move turrant.</em></h1>
          <p>Book a verified technician partner for transparent repair at your doorstep. Choose your device, issue and time — the rest is handled.</p>
          <div className="hero-actions"><Link href="/book" className="btn btn-lime">Book a repair <ArrowRight size={18}/></Link><Link href="/partner" className="text-link">Become a repair partner <ArrowRight size={17}/></Link></div>
          <div className="hero-proof"><span><Star size={16} fill="currentColor"/> 4.8/5 target experience</span><span><ShieldCheck size={16}/> Verified partners</span><span><MapPin size={16}/> Doorstep service</span></div>
        </motion.div>
        <PhoneVisual />
      </div>
    </section>

    <section className="quick-find">
      <div className="container">
        <motion.div {...fade} className="section-head split"><div><span className="kicker">START YOUR REPAIR</span><h2>What can we fix for you?</h2></div><p>Search your model or browse by brand.</p></motion.div>
        <motion.div {...fade} className="device-search"><Search size={21}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search iPhone 18 Pro, Galaxy S26, Pixel 11..."/><span>⌘ K</span></motion.div>
        {matches.length > 0 && <div className="search-results">{matches.map(d=><Link href={`/book?device=${encodeURIComponent(d.model)}`} key={d.model}><Smartphone/><div><b>{d.model}</b><span>{d.brand} · {d.series}</span></div><ArrowRight/></Link>)}</div>}
        <div className="brand-row">{brands.map((b,i)=><Link href={`/book?brand=${b}`} className="brand-card" key={b}><span className={`brand-glyph glyph-${i}`}>{b === "Apple" ? "●" : b.slice(0,2).toUpperCase()}</span><b>{b}</b><ArrowRight size={16}/></Link>)}</div>
      </div>
    </section>

    <section className="services" id="services"><div className="container">
      <motion.div {...fade} className="section-head"><span className="kicker">POPULAR REPAIRS</span><h2>Broken device. Clear solution.</h2><p>No vague service-centre process. Know the repair category before you book.</p></motion.div>
      <div className="service-grid">
        {[
          ["Screen replacement","Cracks, dead pixels or touch issues",Smartphone,"From ₹1,499"],
          ["Battery replacement","Fast drain, swelling or shutdowns",BatteryCharging,"From ₹1,199"],
          ["Charging & ports","Loose port or intermittent charging",Zap,"From ₹999"],
          ["Device diagnostics","Find the problem before spending",Search,"From ₹299"]
        ].map(([t,d,Icon,p],i)=> <motion.div {...fade} transition={{duration:.5,delay:i*.06}} className="service-card" key={String(t)}><div className="service-icon"><Icon size={26}/></div><h3>{String(t)}</h3><p>{String(d)}</p><div><b>{String(p)}</b><Link href="/book"><ArrowRight/></Link></div></motion.div>)}
      </div>
    </div></section>

    <section className="promise"><div className="container promise-grid">
      <motion.div {...fade}><span className="kicker light">THE TURRANTFIX PROMISE</span><h2>Repair without the black box.</h2><p>Your technician partner works transparently, with the repair happening in front of you whenever the job supports doorstep service.</p><Link href="/book" className="btn btn-lime">Check your device <ArrowRight size={18}/></Link></motion.div>
      <div className="promise-list">{[[ShieldCheck,"Verified technician partners","Identity and skills checked before activation."],[Sparkles,"Quality-checked parts","Part options and warranty shown before confirmation."],[Clock3,"Convenient doorstep slots","Choose a time window that fits your day."],[Check,"Pre & post repair checks","Structured diagnostics around eligible repairs."]].map(([Icon,t,d],i)=><motion.div {...fade} transition={{delay:i*.07}} key={String(t)}><span><Icon/></span><div><h3>{String(t)}</h3><p>{String(d)}</p></div></motion.div>)}</div>
    </div></section>

    <section className="partner-band"><div className="container partner-card">
      <motion.div {...fade} className="partner-copy"><span className="kicker">BUILT DIFFERENTLY</span><h2>Technicians aren’t manpower.<br/>They’re <em>partners.</em></h2><p>TurrantFix is designed as a partner network: skilled technicians build their own local repair business on top of our demand, workflow and quality layer.</p><Link href="/partner" className="btn btn-dark">Explore partnership <ArrowRight size={18}/></Link></motion.div>
      <motion.div {...fade} className="partner-metrics"><div><strong>01</strong><b>Keep ownership</b><span>Operate as an independent service partner.</span></div><div><strong>02</strong><b>Receive demand</b><span>Get matched with repair opportunities in your service zone.</span></div><div><strong>03</strong><b>Build reputation</b><span>Quality and customer ratings compound into more work.</span></div></motion.div>
    </div></section>

    <section className="how" id="how"><div className="container">
      <motion.div {...fade} className="section-head center"><span className="kicker">HOW IT WORKS</span><h2>From broken to fixed.</h2></motion.div>
      <div className="steps">{[["01","Choose your device","Search your exact phone model."],["02","Select the issue","See repair categories and indicative pricing."],["03","Pick a slot","Choose where and when you want service."],["04","Meet your partner","A verified technician completes the job."],["05","Quality check","Confirm device functions before closure."]].map(([n,t,d],i)=><motion.div {...fade} transition={{delay:i*.05}} className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p>{i<4&&<i/>}</motion.div>)}</div>
    </div></section>

    <section className="stories"><div className="container"><motion.div {...fade} className="section-head split"><div><span className="kicker">EARLY EXPERIENCE DESIGN</span><h2>The standard we’re building for.</h2></div><p>Illustrative testimonials below are placeholders for launch. Replace them with verified customer reviews once operations begin.</p></motion.div>
      <div className="story-grid">{[["Riya","Screen repair","The booking flow was clear and I knew exactly what would happen next."],["Aman","Battery repair","What I want from repair is speed without losing transparency. This model makes sense."],["Neha","Diagnostics","Being able to choose the exact model and issue before speaking to anyone saves time."]].map(([n,s,q],i)=><motion.div {...fade} transition={{delay:i*.06}} className="story" key={n}><div className="stars">★★★★★</div><p>“{q}”</p><div><span>{n![0]}</span><div><b>{n}</b><small>{s} · concept feedback</small></div></div></motion.div>)}</div>
    </div></section>

    <section className="faq" id="faq"><div className="container faq-grid"><motion.div {...fade}><span className="kicker">FAQ</span><h2>Before you book.</h2><p>Operational policies can be tightened once your actual service coverage, warranty matrix and partner SOPs are finalized.</p></motion.div><div className="faq-list">{[
      ["Will the repair happen at my doorstep?","That is the default for repairs that can be performed safely with portable tools. Complex board-level or workshop-only work should be clearly disclosed before confirmation."],
      ["Are technicians TurrantFix employees?","The planned operating model is a verified independent partner network. TurrantFix provides demand, workflow, standards and customer experience controls while partners perform eligible repair services."],
      ["What parts will be used?","The booking system is designed to show available part grades, price and warranty before you approve a repair. Final options will depend on your parts supply chain."],
      ["Is the quoted price final?","The MVP displays indicative pricing. In production, a technician diagnostic should confirm the final scope before any chargeable additional work is approved."],
      ["Which cities do you cover?","The interface is intentionally city-agnostic. Coverage can be enabled zone-by-zone once your partner network is ready."]
    ].map(([q,a],i)=><div className={`faq-item ${faq===i?'active':''}`} key={q} onClick={()=>setFaq(faq===i?-1:i)}><button><span>{q}</span><ChevronDown/></button><div className="faq-answer"><p>{a}</p></div></div>)}</div></div></section>

    <section className="final-cta"><div className="container"><motion.div {...fade}><Wrench size={38}/><h2>Repair should take minutes to book,<br/>not hours to understand.</h2><p>Start with your device. TurrantFix handles the workflow from there.</p><Link href="/book" className="btn btn-lime">Book a repair <ArrowRight size={18}/></Link></motion.div></div></section>
  </>;
}
