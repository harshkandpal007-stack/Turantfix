"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brandLogos, brands, devices, getDeviceImage, issues } from "@/data/devices";
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronLeft, Clock3, MapPin, Search, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  pincode: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit PIN code"),
  address: z.string().min(8, "Enter a complete address"),
});
type FormData = z.infer<typeof schema>;

function BookPageContent() {
  const searchParams = useSearchParams();
  const initialDevice = searchParams.get("device") || "";
  const initialDeviceData = devices.find((item) => item.model === initialDevice);
  const initialBrand = searchParams.get("brand") || initialDeviceData?.brand || "Apple";
  const [step, setStep] = useState(1);
  const [brand, setBrand] = useState(brands.includes(initialBrand) ? initialBrand : "Apple");
  const [device, setDevice] = useState(initialDevice);
  const [issue, setIssue] = useState("");
  const [slot, setSlot] = useState("");
  const [search, setSearch] = useState("");
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const visibleDevices = useMemo(() => devices.filter(d => d.brand === brand && d.model.toLowerCase().includes(search.toLowerCase())), [brand, search]);
  const selectedIssue = issues.find(i => i.id === issue);
  const selectedDevice = devices.find((item) => item.model === device);
  const dates = useMemo(() => Array.from({ length: 3 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() + i); return { key: d.toISOString().slice(0, 10), day: d.toLocaleDateString("en-IN", { weekday: "short" }), date: d.toLocaleDateString("en-IN", { day: "numeric", month: "short" }) }; }), []);
  const slots = ["10:00 – 12:00", "12:00 – 14:00", "14:00 – 16:00", "16:00 – 18:00", "18:00 – 20:00"];
  const canContinue = step === 1 ? !!device : step === 2 ? !!issue : step === 3 ? !!slot : true;

  const goNext = () => canContinue && setStep(s => Math.min(4, s + 1));
  const onSubmit = (_data: FormData) => setDone(true);

  return <><Navbar /><main className="booking-page">
    <div className="container booking-top">
      <div><span className="kicker">BOOK A REPAIR</span><h1>Get your device fixed.</h1></div>
      <div className="booking-trust"><ShieldCheck /><span><b>Transparent booking</b><small>No payment collected in this demo</small></span></div>
    </div>

    <div className="container booking-layout">
      <section className="booking-panel">
        {!done ? <>
          <div className="progress-steps">{["Device", "Issue", "Slot", "Details"].map((s, i) => <div className={`${step >= i + 1 ? "active" : ""} ${step > i + 1 ? "complete" : ""}`} key={s}><span>{step > i + 1 ? <Check size={14} /> : i + 1}</span><b>{s}</b></div>)}</div>

          {step === 1 && <div className="book-step"><div className="book-title"><span>Choose your device</span><h2>What are we repairing?</h2><p>Select a brand, then search or browse models.</p></div>
            <div className="brand-tabs">{brands.map((b) => <button className={brand === b ? "active" : ""} onClick={() => { setBrand(b); setDevice("") }} key={b} data-brand={b} aria-label={b}>
              <img
                src={brandLogos[b]}
                alt={`${b} logo`}
                style={b === "Nothing" ? { width: 104, height: 20, objectFit: "contain" } : { width: 20, height: 20, objectFit: "contain" }}
              />
              {b !== "Nothing" && <span>{b}</span>}
            </button>)}</div>
            <div className="device-search compact"><Search /><input value={search} onChange={e => setSearch(e.target.value)} placeholder={`Search ${brand} models`} /></div>
            <div className="model-grid">{visibleDevices.map((d) => <button onClick={() => setDevice(d.model)} className={device === d.model ? "selected" : ""} key={d.model}>{d.badge && <em>{d.badge}</em>}<div className="model-phone-photo" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg,#fff 0%,#f1f2ec 100%)" }}><img src={getDeviceImage(d)} alt={`${d.model} phone`} style={{ width: 116, height: 116, objectFit: "contain", objectPosition: "center center", display: "block" }} /></div><b>{d.model}</b><span>{d.series}</span>{device === d.model && <i><Check /></i>}</button>)}</div>
          </div>}

          {step === 2 && <div className="book-step"><div className="book-title"><button className="back-link" onClick={() => setStep(1)}><ChevronLeft /> Back</button><span>Choose the issue</span><h2>What happened to your {device}?</h2><p>Select the closest match. A technician can confirm the diagnosis before repair.</p></div>
            <div className="issue-grid">{issues.map(x => <button className={issue === x.id ? "selected" : ""} onClick={() => setIssue(x.id)} key={x.id}><span className="issue-icon"><Wrench /></span><div><b>{x.name}</b><p>{x.desc}</p><strong>From ₹{x.price.toLocaleString("en-IN")}</strong></div>{issue === x.id && <i><Check /></i>}</button>)}</div>
            <p className="pricing-note">Demo prices are indicative placeholders. Connect your production parts/pricing engine before launch.</p>
          </div>}

          {step === 3 && <div className="book-step"><div className="book-title"><button className="back-link" onClick={() => setStep(2)}><ChevronLeft /> Back</button><span>Choose a slot</span><h2>When should your partner arrive?</h2><p>Pick an available service window.</p></div>
            <div className="date-row">{dates.map((d, i) => <button key={d.key} className={slot.startsWith(d.key) ? "selected" : ""} onClick={() => setSlot(`${d.key}|${slots[0]}`)}><CalendarDays /><b>{i === 0 ? "Today" : d.day}</b><span>{d.date}</span></button>)}</div>
            <div className="slot-list">{slots.map(s => { const currentDate = slot.split("|")[0] || dates[0].key; const val = `${currentDate}|${s}`; return <button key={s} onClick={() => setSlot(val)} className={slot === val ? "selected" : ""}><Clock3 /><span>{s}</span>{slot === val && <Check />}</button> })}</div>
          </div>}

          {step === 4 && <form className="book-step" onSubmit={handleSubmit(onSubmit)}><div className="book-title"><button type="button" className="back-link" onClick={() => setStep(3)}><ChevronLeft /> Back</button><span>Your details</span><h2>Where should we come?</h2><p>We'll use these details to confirm the service request.</p></div>
            <div className="form-grid"><label><span>Name</span><input {...register("name")} placeholder="Harsh Kandpal" />{errors.name && <small>{errors.name.message}</small>}</label><label><span>Mobile number</span><input {...register("phone")} inputMode="numeric" placeholder="9876543210" />{errors.phone && <small>{errors.phone.message}</small>}</label><label><span>PIN code</span><input {...register("pincode")} inputMode="numeric" placeholder="110001" />{errors.pincode && <small>{errors.pincode.message}</small>}</label><label className="wide"><span>Complete address</span><textarea {...register("address")} placeholder="House / flat, street, landmark, area" />{errors.address && <small>{errors.address.message}</small>}</label></div>
            <button className="btn btn-lime submit-book" type="submit">Confirm service request <ArrowRight /></button>
          </form>}

          {step < 4 && <div className="booking-actions"><button className="btn btn-dark" disabled={!canContinue} onClick={goNext}>Continue <ArrowRight /></button></div>}
        </> : <div className="success-state"><div className="success-icon"><Check /></div><span className="kicker">REQUEST CREATED</span><h2>Your repair request is ready.</h2><p>This MVP stops before OTP, live technician assignment and payment. Those integrations can plug into this flow without redesigning it.</p><div className="success-summary"><span><Smartphone /> {device}</span><span><Wrench /> {selectedIssue?.name}</span><span><Clock3 /> {slot.split("|")[1]}</span></div><a href="/" className="btn btn-dark"><ArrowLeft /> Back home</a></div>}
      </section>

      <aside className="booking-summary"><span className="kicker">YOUR REPAIR</span><h3>{device || "Select a device"}</h3><div className="summary-device">{selectedDevice ? <div className="summary-device-photo" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><img src={getDeviceImage(selectedDevice)} alt={`${selectedDevice.model} phone`} style={{ width: 54, height: 54, objectFit: "contain", objectPosition: "center center", display: "block" }} /></div> : <div className="summary-device-placeholder"><Smartphone /></div>}<div><b>{device || "Device not selected"}</b><span>{selectedIssue?.name || "Choose an issue next"}</span></div></div><div className="summary-line"><span>Service</span><b>{selectedIssue?.name || "—"}</b></div><div className="summary-line"><span>Indicative price</span><b>{selectedIssue ? `From ₹${selectedIssue.price.toLocaleString("en-IN")}` : "—"}</b></div><div className="summary-line"><span>Time</span><b>{slot ? slot.split("|")[1] : "—"}</b></div><div className="summary-note"><MapPin /><span>Exact serviceability can be checked from PIN code once your partner-zone backend is connected.</span></div></aside>
    </div>
  </main><Footer /></>;
}

export default function BookPage() {
  return <Suspense fallback={null}><BookPageContent /></Suspense>;
}
