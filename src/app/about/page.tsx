import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
    ArrowRight,
    BadgeCheck,
    Check,
    Clock3,
    Eye,
    ShieldCheck,
    Smartphone,
    Wrench,
} from "lucide-react";

const values = [
    {
        number: "01",
        title: "Repair in front of you",
        text: "Eligible repairs are designed to happen where the customer can see the process, not behind an unclear counter.",
        icon: Eye,
    },
    {
        number: "02",
        title: "Fast doorstep service",
        text: "TurantFix focuses on quick diagnosis, clear time windows, and common repairs that can be completed in minutes.",
        icon: Clock3,
    },
    {
        number: "03",
        title: "No black-box pricing",
        text: "The customer sees what is being fixed, what part is being used, and what the expected price is before the job starts.",
        icon: ShieldCheck,
    },
    {
        number: "04",
        title: "Quality-controlled partners",
        text: "The network is built around verified repair partners, standard diagnostics, repair evidence, and post-repair checks.",
        icon: BadgeCheck,
    },
];

const founders = [
    {
        name: "Harsh Kandpal",
        role: "Co-founder · Product & Customer Experience",
        text: "Focused on customer trust, booking experience, pricing clarity and growth for TurantFix.",
        initials: "HK",
        linkedin: "https://www.linkedin.com/in/harsh-k-7a885921b/",
    },
    {
        name: "Nikish Gupta",
        role: "Co-founder · Operations & Partner Network",
        text: "Focused on partner onboarding, repair operations, service quality and doorstep execution.",
        initials: "NG",
        linkedin: "https://www.linkedin.com/in/nikish-gupta-412747223/",
    },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main style={{ background: "#f6f6f1", color: "#171717" }}>
                <section
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        padding: "86px 0 72px",
                        background: "linear-gradient(180deg,#f6f6f1 0%,#edf2e4 100%)",
                    }}
                >
                    <div className="container" style={{ display: "grid", gridTemplateColumns: "1.03fr .97fr", gap: 54, alignItems: "center" }}>
                        <div>
                            <span className="eyebrow">
                                <span className="pulse" /> About TurantFix
                            </span>

                            <h1
                                style={{
                                    fontSize: "clamp(52px,6vw,84px)",
                                    lineHeight: ".95",
                                    letterSpacing: "-.065em",
                                    margin: "22px 0 26px",
                                    maxWidth: 760,
                                }}
                            >
                                We are fixing how <br />
                                <span style={{ color: "#75a400" }}>phone repair feels.</span>
                            </h1>

                            <p style={{ fontSize: 18, lineHeight: 1.65, maxWidth: 640, color: "#5c5c5a" }}>
                                TurantFix brings smartphone repair to your doorstep with visible work, transparent approval,
                                verified repair partners, and a booking flow that removes the usual uncertainty of local repair.
                            </p>

                            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30 }}>
                                <Link href="/book" className="btn btn-lime">
                                    Book a repair <ArrowRight size={18} />
                                </Link>
                                <a href="#founders" className="btn btn-dark">
                                    Meet the founders
                                </a>
                            </div>
                        </div>

                        <div
                            style={{
                                borderRadius: 34,
                                background: "#171717",
                                color: "#fff",
                                padding: 18,
                                boxShadow: "0 34px 90px rgba(18,20,16,.18)",
                            }}
                        >
                            <div
                                style={{
                                    minHeight: 430,
                                    borderRadius: 26,
                                    background: "linear-gradient(145deg,#252820 0%,#111 100%)",
                                    position: "relative",
                                    overflow: "hidden",
                                    padding: 28,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
                                    {[
                                        ["Doorstep first", Smartphone],
                                        ["Visible repair", Eye],
                                        ["Verified partner", BadgeCheck],
                                        ["Quality check", Wrench],
                                    ].map(([label, Icon]) => {
                                        const LucideIcon = Icon as typeof Smartphone;
                                        return (
                                            <div key={String(label)} style={{ background: "#20231d", border: "1px solid #30352b", borderRadius: 18, padding: 16 }}>
                                                <LucideIcon size={22} color="#b3f12f" />
                                                <b style={{ display: "block", marginTop: 18 }}>{String(label)}</b>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div>
                                    <span style={{ color: "#b3f12f", fontSize: 12, fontWeight: 900, letterSpacing: ".14em" }}>WHY WE EXIST</span>
                                    <h2 style={{ fontSize: 38, lineHeight: 1, letterSpacing: "-.045em", margin: "12px 0" }}>
                                        No service-centre wait. No unclear handover.
                                    </h2>
                                    <p style={{ color: "#b9b9b9", lineHeight: 1.6, margin: 0 }}>
                                        The customer should know who is coming, what is being checked, what it may cost,
                                        and what happens after the repair.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ padding: "96px 0", background: "#fff" }}>
                    <div className="container" style={{ display: "grid", gridTemplateColumns: ".92fr 1.08fr", gap: 70, alignItems: "start" }}>
                        <div>
                            <span className="kicker">OUR STORY</span>
                            <h2 style={{ fontSize: "clamp(38px,4vw,58px)", lineHeight: 1.03, letterSpacing: "-.05em", margin: "10px 0 16px" }}>
                                Repair should not feel like a black box.
                            </h2>
                            <p style={{ color: "#666", lineHeight: 1.75, fontSize: 16 }}>
                                Phone repair often feels uncertain: customers hand over the device, wait without clarity,
                                and then hear a price they did not fully understand. TurantFix is designed around the opposite experience.
                            </p>
                            <p style={{ color: "#666", lineHeight: 1.75, fontSize: 16 }}>
                                Our model brings repair closer to the customer, keeps the work visible where possible,
                                and gives approval before the chargeable repair begins.
                            </p>
                        </div>

                        <div style={{ display: "grid", gap: 14 }}>
                            {values.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <article
                                        key={item.number}
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "58px 1fr",
                                            gap: 16,
                                            background: "#f7f8f2",
                                            border: "1px solid #e4e7dc",
                                            borderRadius: 22,
                                            padding: 20,
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: 58,
                                                height: 58,
                                                borderRadius: 18,
                                                background: "#b3f12f",
                                                display: "grid",
                                                placeItems: "center",
                                            }}
                                        >
                                            <Icon size={24} />
                                        </span>
                                        <div>
                                            <small style={{ fontWeight: 900, color: "#789f26" }}>{item.number}</small>
                                            <h3 style={{ margin: "4px 0 6px", fontSize: 22, letterSpacing: "-.03em" }}>{item.title}</h3>
                                            <p style={{ margin: 0, color: "#666", lineHeight: 1.6 }}>{item.text}</p>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section style={{ padding: "96px 0", background: "#151515", color: "#fff" }}>
                    <div className="container">
                        <div style={{ maxWidth: 760, marginBottom: 40 }}>
                            <span className="kicker light">WHAT TURANTFIX DOES</span>
                            <h2 style={{ fontSize: "clamp(38px,4vw,58px)", lineHeight: 1.03, letterSpacing: "-.05em", margin: "10px 0 16px" }}>
                                Doorstep mobile repair with control built into the process.
                            </h2>
                            <p style={{ color: "#a8a8a8", lineHeight: 1.7 }}>
                                We coordinate the customer request, model selection, issue selection, time slot, technician assignment,
                                repair approval, quality check, and warranty clarity layer.
                            </p>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
                            {[
                                "Choose your phone",
                                "Select the problem",
                                "Approve the quote",
                                "Repair is checked",
                            ].map((step, index) => (
                                <div key={step} style={{ border: "1px solid #343434", background: "#1d1d1d", borderRadius: 22, padding: 24, minHeight: 150 }}>
                                    <span style={{ color: "#b3f12f", fontWeight: 900 }}>0{index + 1}</span>
                                    <h3 style={{ fontSize: 21, letterSpacing: "-.03em", margin: "18px 0 8px" }}>{step}</h3>
                                    <p style={{ color: "#aaa", margin: 0, lineHeight: 1.55 }}>
                                        {index === 0 && "The booking flow starts with the exact phone model."}
                                        {index === 1 && "The customer picks the closest issue before diagnosis."}
                                        {index === 2 && "No chargeable work begins without approval."}
                                        {index === 3 && "Basic checks happen before handover closure."}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="founders" style={{ padding: "96px 0", background: "#fff" }}>
                    <div className="container">
                        <div className="section-head center">
                            <span className="kicker">MEET THE FOUNDERS</span>
                            <h2>Started by two builders focused on trust.</h2>
                            <p>
                                TurantFix is built by two co-founders focused on making phone repair faster, clearer and more trustworthy.
                            </p>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 18, maxWidth: 900, margin: "0 auto" }}>
                            {founders.map((person) => (
                                <article
                                    key={person.name}
                                    style={{
                                        border: "1px solid #e4e7dc",
                                        borderRadius: 28,
                                        padding: 28,
                                        background: "#f7f8f2",
                                        display: "grid",
                                        gridTemplateColumns: "86px 1fr",
                                        gap: 20,
                                        alignItems: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 86,
                                            height: 86,
                                            borderRadius: "50%",
                                            background: "linear-gradient(145deg,#171717,#2b2e28)",
                                            color: "#b3f12f",
                                            display: "grid",
                                            placeItems: "center",
                                            fontSize: 25,
                                            fontWeight: 900,
                                        }}
                                    >
                                        {person.initials}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: 25, margin: "0 0 4px", letterSpacing: "-.03em" }}>{person.name}</h3>
                                        <b style={{ color: "#789f26", fontSize: 13 }}>{person.role}</b>
                                        <p style={{ color: "#666", lineHeight: 1.6, margin: "12px 0 0" }}>{person.text}</p>
                                        <a
                                            href={person.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 7,
                                                marginTop: 14,
                                                fontWeight: 900,
                                                color: "#171717",
                                            }}
                                        >
                                            LinkedIn profile <ArrowRight size={15} />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>


                    </div>
                </section>

                <section style={{ padding: "72px 0 100px", background: "#f6f6f1" }}>
                    <div className="container">
                        <div
                            style={{
                                borderRadius: 30,
                                background: "#171717",
                                color: "#fff",
                                padding: "38px 42px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: 22,
                            }}
                        >
                            <div>
                                <span style={{ color: "#b3f12f", fontSize: 12, fontWeight: 900, letterSpacing: ".14em" }}>READY WHEN YOUR PHONE ISN’T</span>
                                <h2 style={{ fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.02, letterSpacing: "-.05em", margin: "10px 0 0" }}>
                                    Your phone powers your life. We keep it moving.
                                </h2>
                            </div>
                            <Link href="/book" className="btn btn-lime">
                                Book a repair <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}