import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    Clock3,
    Mail,
    MessageCircle,
    ShieldCheck,
    Smartphone,
    Wrench,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/"; // Add your WhatsApp number later, e.g. https://wa.me/9198XXXXXXXX
const SUPPORT_EMAIL = "mailto:support@turrantfix.com"; // Replace if you use a different support inbox.

const faqs = [
    {
        q: "Can my phone really be repaired in under 30 minutes?",
        a: "Many common doorstep repairs can be completed quickly once the correct part is available. The 30-minute promise applies to eligible repairs; complex faults, diagnostics, water damage, frame issues or uncommon parts can take longer. You will see the expected time before you confirm the repair.",
    },
    {
        q: "Will I know the price before the technician starts?",
        a: "Yes. TurrantFix is designed around approval-first repair. You can see the starting price while booking, and if diagnosis changes the scope, the technician explains the updated quote before any additional chargeable work begins.",
    },
    {
        q: "Who will come to repair my phone?",
        a: "Your job is assigned to a TurrantFix repair partner matched to the required skill and service area. Our partner model is designed to include identity checks, capability checks and service standards before a partner is activated on the platform.",
    },
    {
        q: "Do I have to hand over my phone and wait for days?",
        a: "For eligible doorstep repairs, the objective is to complete the work in front of you at your home or workplace. If a repair genuinely needs workshop equipment, that requirement should be explained before the device leaves your possession.",
    },
    {
        q: "What happens to my personal data during repair?",
        a: "Most hardware repairs should not require access to your personal apps, photos or messages. You can keep your passcode private unless a specific functional test requires access and you choose to provide it. We recommend backing up important data before any device repair.",
    },
    {
        q: "What quality of replacement parts will be used?",
        a: "The available part option should be shown clearly before confirmation. Different devices may have different compatible part grades and availability. The goal is to remove ambiguity: you should know what option is being installed, the price and the applicable warranty before approving the job.",
    },
    {
        q: "Is there a warranty on the repair?",
        a: "Eligible repairs will show their applicable warranty terms before confirmation. Coverage can vary by repair type and selected part, so TurrantFix does not hide the conditions behind a generic promise. The exact coverage should be visible in your booking summary.",
    },
    {
        q: "What if the technician discovers a different problem?",
        a: "Diagnosis can reveal a different root cause. In that case, the partner should explain the finding, revised repair option and price. Nothing additional should be treated as approved until you accept the revised quote.",
    },
    {
        q: "What if my phone cannot be repaired at the doorstep?",
        a: "Some motherboard, water-damage or specialist repairs require equipment that cannot reasonably travel to every doorstep. If that happens, you should be told why, what the next step is and the expected turnaround before proceeding.",
    },
    {
        q: "Can I cancel or reschedule my booking?",
        a: "The booking flow is being designed to support rescheduling and cancellation before the visit. Final cancellation rules can depend on whether a partner has already travelled or a specific part has been arranged for your repair.",
    },
    {
        q: "How do I know whether TurrantFix supports my exact phone model?",
        a: "Start with the device selector. Choose your brand and exact model to see supported repair options. If your model is not listed, contact support and we can confirm part availability before you spend time completing a booking.",
    },
    {
        q: "When do I pay?",
        a: "The production flow is intended to keep pricing transparent and confirmation explicit. Payment integration will be connected before launch; the final method and timing will be shown clearly during checkout rather than being negotiated at the doorstep.",
    },
];

export default function FAQPage() {
    return (
        <>
            <Navbar />
            <main className="faq-page">
                <section className="faq-hero">
                    <div className="container faq-hero-grid">
                        <div>
                            <span className="kicker">HELP BEFORE YOU BOOK</span>
                            <h1>No repair-shop guesswork.</h1>
                            <p>
                                Clear answers about pricing, partners, repair time, privacy and warranty before you decide to book.
                            </p>
                            <div className="faq-hero-actions">
                                <Link href="/book" className="btn btn-lime">
                                    Select your phone <ArrowRight size={18} />
                                </Link>
                                <a className="faq-contact-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                                    <MessageCircle size={18} /> WhatsApp support
                                </a>
                                <a className="faq-contact-link" href={SUPPORT_EMAIL}>
                                    <Mail size={18} /> Email us
                                </a>
                            </div>
                        </div>

                        <div className="faq-trust-panel">
                            <div><BadgeCheck /><span><b>Verified partner model</b><small>Identity + capability checks</small></span></div>
                            <div><CheckCircle2 /><span><b>Approve price first</b><small>No silent scope changes</small></span></div>
                            <div><ShieldCheck /><span><b>Warranty clarity</b><small>Terms shown before confirmation</small></span></div>
                            <div><Clock3 /><span><b>Time shown upfront</b><small>30 min on eligible repairs</small></span></div>
                        </div>
                    </div>
                </section>

                <section className="faq-list-section">
                    <div className="container faq-layout">
                        <aside className="faq-aside">
                            <span className="kicker">COMMON QUESTIONS</span>
                            <h2>Everything customers usually ask before handing over a phone.</h2>
                            <p>Open only what you need. If your doubt is not here, contact us directly.</p>
                            <div className="faq-aside-proof">
                                <Smartphone />
                                <div><b>Still deciding?</b><span>Checking your device takes less than a minute.</span></div>
                            </div>
                            <Link href="/book" className="btn btn-dark">Check my device <ArrowRight size={17} /></Link>
                        </aside>

                        <div className="faq-accordion">
                            {faqs.map((item, index) => (
                                <details key={item.q} className="faq-item">
                                    <summary>
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                        <b>{item.q}</b>
                                        <i>+</i>
                                    </summary>
                                    <div className="faq-answer">
                                        <p>{item.a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="faq-contact-section" id="contact">
                    <div className="container faq-contact-card">
                        <div>
                            <span className="kicker kicker-light">NEED A HUMAN ANSWER?</span>
                            <h2>Ask before you book.</h2>
                            <p>Send your phone model and issue. We can use WhatsApp or email support once the final channels are connected.</p>
                        </div>
                        <div className="faq-contact-actions">
                            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-lime">
                                <MessageCircle size={18} /> WhatsApp
                            </a>
                            <a href={SUPPORT_EMAIL} className="btn faq-email-btn">
                                <Mail size={18} /> Email support
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
