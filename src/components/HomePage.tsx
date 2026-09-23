"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  Wrench,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { brandLogos, brands, devices, getDeviceImage } from "@/data/devices";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const serviceCards = [
  {
    id: "screen",
    title: "Screen replacement",
    subtitle: "Cracks, dead pixels or touch issues",
    price: "From ₹1,499",
    duration: "45–90 min",
    rating: "4.9",
    reviews: "1.2k",
    image:
      "https://images.pexels.com/photos/35157346/pexels-photo-35157346.jpeg?auto=compress&cs=tinysrgb&w=1200",
    process: [
      "We inspect display, touch and frame condition.",
      "You see the part option and final quote before work starts.",
      "The screen is replaced using precision tools.",
      "Touch, brightness, camera and speaker checks are completed before handover.",
    ],
    includes: ["Pre-repair diagnostic", "Part installation", "Post-repair quality check", "Eligible repair warranty"],
    warranty: "Warranty terms are shown before confirmation for the selected part and repair.",
  },
  {
    id: "battery",
    title: "Battery replacement",
    subtitle: "Fast drain, swelling or sudden shutdowns",
    price: "From ₹1,199",
    duration: "35–75 min",
    rating: "4.8",
    reviews: "860",
    image:
      "https://images.pexels.com/photos/35155421/pexels-photo-35155421.jpeg?auto=compress&cs=tinysrgb&w=1200",
    process: [
      "Battery health symptoms and charging behavior are checked.",
      "The device is safely opened and the existing battery is isolated.",
      "The replacement battery is fitted and sealed correctly.",
      "Charging, thermal behavior and basic device functions are verified.",
    ],
    includes: ["Battery check", "Replacement installation", "Device resealing", "Post-repair checks"],
    warranty: "Eligible replacement batteries include the warranty shown in your booking summary.",
  },
  {
    id: "charging",
    title: "Charging & ports",
    subtitle: "Loose port or intermittent charging",
    price: "From ₹999",
    duration: "40–90 min",
    rating: "4.8",
    reviews: "640",
    image:
      "https://images.pexels.com/photos/35155420/pexels-photo-35155420.jpeg?auto=compress&cs=tinysrgb&w=1200",
    process: [
      "Cable, adapter, port and charging response are checked first.",
      "The partner identifies whether cleaning, repair or replacement is required.",
      "You approve the final quote before any chargeable repair begins.",
      "Charging speed and connection stability are tested before closure.",
    ],
    includes: ["Charging diagnostic", "Quote approval", "Repair or replacement", "Final charging test"],
    warranty: "Warranty depends on the final repair type and is disclosed before payment.",
  },
  {
    id: "diagnostics",
    title: "Device diagnostics",
    subtitle: "Find the fault before spending on repair",
    price: "From ₹299",
    duration: "30–60 min",
    rating: "4.9",
    reviews: "520",
    image:
      "https://images.pexels.com/photos/34099331/pexels-photo-34099331.jpeg?auto=compress&cs=tinysrgb&w=1200",
    process: [
      "The reported issue is reproduced where possible.",
      "Core hardware and software symptoms are checked systematically.",
      "The likely cause, repair options and expected cost are explained.",
      "No additional repair starts until you approve it.",
    ],
    includes: ["Structured inspection", "Fault explanation", "Repair recommendation", "Transparent quote"],
    warranty: "Diagnostic fee treatment can be adjusted later when your final commercial policy is set.",
  },
];

const trustPoints = [
  {
    id: "verified",
    icon: BadgeCheck,
    title: "Verified partners",
    text: "Identity and repair capability checked before activation.",
  },
  {
    id: "quote",
    icon: Check,
    title: "Approve before repair",
    text: "No surprise repair bill. You approve the final quote first.",
  },
  {
    id: "warranty",
    icon: ShieldCheck,
    title: "Warranty clarity",
    text: "Eligible warranty coverage is shown before booking confirmation.",
  },
  {
    id: "doorstep",
    icon: MapPin,
    title: "Doorstep first",
    text: "Eligible repairs are completed where it is convenient for you.",
  },
];

const processSteps = [
  {
    id: "identify",
    number: "01",
    title: "Tell us your phone",
    text: "Search the exact model and choose what is wrong.",
  },
  {
    id: "price",
    number: "02",
    title: "See the repair clearly",
    text: "Review starting price, expected time and what is included.",
  },
  {
    id: "slot",
    number: "03",
    title: "Choose your slot",
    text: "Pick the place and time that works for you.",
  },
  {
    id: "repair",
    number: "04",
    title: "Partner arrives",
    text: "A verified repair partner diagnoses and completes the approved job.",
  },
  {
    id: "check",
    number: "05",
    title: "Check before closure",
    text: "We complete post-repair checks before the job is closed.",
  },
];

const testimonials = [
  {
    id: "meera",
    name: "Meera S.",
    service: "iPhone screen repair",
    quote: "The process felt simple. I knew the price range and what would happen before anyone touched my phone.",
    image:
      "https://images.pexels.com/photos/39002915/pexels-photo-39002915.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    id: "rohan",
    name: "Rohan M.",
    service: "Charging issue",
    quote: "The best part was approval before repair. No vague estimate and no surprise at the end.",
    image:
      "https://images.pexels.com/photos/16963158/pexels-photo-16963158.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    id: "ananya",
    name: "Ananya K.",
    service: "Battery replacement",
    quote: "Booking felt like ordering a service, not negotiating with a repair shop. That is exactly what I wanted.",
    image:
      "https://images.pexels.com/photos/14396230/pexels-photo-14396230.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeService, setActiveService] = useState<(typeof serviceCards)[number] | null>(null);

  const matches = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return devices
      .filter((device) => `${device.brand} ${device.model} ${device.series}`.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  return (
    <main className="tf-v2">
      <section className="tf-hero">
        <div className="tf-hero-glow tf-hero-glow-a" />
        <div className="tf-hero-glow tf-hero-glow-b" />

        <div className="container tf-hero-grid">
          <motion.div
            className="tf-hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58 }}
          >
            <div className="tf-eyebrow">
              <span className="tf-live-dot" />
              Doorstep phone repair
            </div>

            <h1 className="tf-speed-headline">
              <span>Repair your phone under</span>
              <strong>30 minutes</strong>
            </h1>

            <p>
              Choose your device, see the repair clearly, approve the quote and book a verified partner.
            </p>
            <small className="tf-speed-note">*For eligible repairs. Actual time depends on device, part availability and diagnosis.</small>

            <div className="tf-hero-actions">
              <Link href="/book" className="btn btn-lime tf-primary-cta">
                Book a repair <ArrowRight size={18} />
              </Link>
              <a href="#services" className="tf-secondary-link">
                See repair options <ChevronRight size={17} />
              </a>
            </div>

            <div className="tf-trust-inline" aria-label="TurrantFix trust promises">
              <span>
                <BadgeCheck size={16} /> Verified partners
              </span>
              <span>
                <Check size={16} /> Approve price first
              </span>
              <span>
                <ShieldCheck size={16} /> Warranty clarity
              </span>
            </div>
          </motion.div>

          <motion.div
            className="tf-hero-media"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <motion.div
              className="tf-hero-image-wrap"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://images.pexels.com/photos/35872217/pexels-photo-35872217.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Indian technician working carefully at an electronics repair bench"
              />
              <div className="tf-image-shade" />
            </motion.div>

            <motion.div
              className="tf-proof-card tf-proof-card-top"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
            >
              <div className="tf-proof-icon">
                <ShieldCheck size={19} />
              </div>
              <div>
                <b>Repair with visibility</b>
                <span>Know the process before booking</span>
              </div>
            </motion.div>

            <motion.div
              className="tf-proof-card tf-proof-card-bottom"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 }}
            >
              <div className="tf-avatar-stack">
                <span>TF</span>
                <span>✓</span>
              </div>
              <div>
                <b>Verified repair partner</b>
                <span>Identity + capability checks</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="tf-finder" id="finder">
        <div className="container">
          <motion.div {...reveal} className="tf-section-heading tf-section-heading-tight">
            <span className="tf-kicker">START HERE</span>
            <h2>What needs fixing?</h2>
          </motion.div>

          <motion.div {...reveal} className="tf-device-search">
            <Search size={21} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search your phone model"
              aria-label="Search phone model"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
                <X size={17} />
              </button>
            )}
          </motion.div>

          <AnimatePresence>
            {matches.length > 0 && (
              <motion.div
                className="tf-search-results"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                {matches.map((device) => (
                  <Link
                    href={`/book?device=${encodeURIComponent(device.model)}`}
                    key={`${device.brand}-${device.model}`}
                  >
                    <span className="tf-search-phone tf-search-phone-photo">
                      <img src={getDeviceImage(device)} alt={`${device.model} phone`} />
                    </span>
                    <div>
                      <b>{device.model}</b>
                      <small>
                        {device.brand} · {device.series}
                      </small>
                    </div>
                    <ArrowRight size={17} />
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="tf-brand-scroll">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                {...reveal}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <Link href={`/book?brand=${encodeURIComponent(brand)}`} className="tf-brand-tile">
                  <span className="tf-brand-symbol">
                    <img src={brandLogos[brand]} alt={`${brand} logo`} />
                  </span>
                  <b>{brand}</b>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-trust-strip">
        <div className="container tf-trust-grid">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                {...reveal}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="tf-trust-item"
              >
                <span>
                  <Icon size={20} />
                </span>
                <div>
                  <b>{item.title}</b>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="tf-services" id="services">
        <div className="container">
          <motion.div {...reveal} className="tf-section-heading tf-section-heading-split">
            <div>
              <span className="tf-kicker">POPULAR REPAIRS</span>
              <h2>Choose the problem. See the process.</h2>
            </div>
            <p>Compact cards first. Full repair detail only when you ask for it.</p>
          </motion.div>

          <div className="tf-service-grid">
            {serviceCards.map((service, index) => (
              <motion.article
                key={service.id}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="tf-service-card"
                whileHover={{ y: -5 }}
              >
                <div className="tf-service-image">
                  <motion.img
                    src={service.image}
                    alt={`${service.title} repair process`}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.45 }}
                  />
                  <div className="tf-service-image-fade" />
                  <span className="tf-rating-chip">
                    <Star size={13} fill="currentColor" /> {service.rating} · {service.reviews}
                  </span>
                </div>

                <div className="tf-service-content">
                  <h3>{service.title}</h3>
                  <p>{service.subtitle}</p>

                  <div className="tf-service-meta">
                    <strong>{service.price}</strong>
                    <span>
                      <Clock3 size={14} /> {service.duration}
                    </span>
                  </div>

                  <div className="tf-service-actions">
                    <button type="button" onClick={() => setActiveService(service)}>
                      View process
                    </button>
                    <Link href={`/book?service=${encodeURIComponent(service.title)}`}>
                      Book <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-process">
        <div className="container tf-process-grid">
          <motion.div {...reveal} className="tf-process-media">
            <img
              src="https://images.pexels.com/photos/33755641/pexels-photo-33755641.jpeg?auto=compress&cs=tinysrgb&w=1300"
              alt="Close-up smartphone repair with precision tools"
            />
            <div className="tf-process-float">
              <Wrench size={18} />
              <div>
                <b>Detailed repair flow</b>
                <span>No black-box handover</span>
              </div>
            </div>
          </motion.div>

          <div className="tf-process-copy">
            <motion.div {...reveal} className="tf-section-heading">
              <span className="tf-kicker">FROM BOOKING TO HANDOVER</span>
              <h2>You should always know what happens next.</h2>
            </motion.div>

            <div className="tf-process-list">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  {...reveal}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="tf-process-step"
                >
                  <span>{step.number}</span>
                  <div>
                    <b>{step.title}</b>
                    <p>{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tf-detail-promise">
        <div className="container">
          <motion.div {...reveal} className="tf-trust-vault">
            <div className="tf-trust-vault-media">
              <img
                src="https://images.pexels.com/photos/32571628/pexels-photo-32571628.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Indian technician working in a Delhi repair workshop"
              />
              <div className="tf-trust-vault-shade" />
              <div className="tf-trust-vault-badge">
                <BadgeCheck size={18} />
                <div>
                  <b>Verified before activation</b>
                  <span>Identity + capability checks</span>
                </div>
              </div>
            </div>

            <div className="tf-trust-vault-copy">
              <span className="tf-kicker tf-kicker-light">THE TURRANTFIX PROMISE</span>
              <h2>Four things you know before the screwdriver turns.</h2>
              <p>Trust should come from visible controls, not vague promises.</p>

              <div className="tf-trust-vault-grid">
                {[
                  { id: "identity", icon: BadgeCheck, title: "Who is coming", text: "Partner identity is visible before service." },
                  { id: "quote", icon: Check, title: "What it will cost", text: "Final quote is approved before chargeable work." },
                  { id: "quality", icon: Wrench, title: "What gets checked", text: "Core functions are tested before handover." },
                  { id: "warranty", icon: ShieldCheck, title: "What is covered", text: "Eligible warranty terms are shown clearly." },
                ].map((point) => {
                  const Icon = point.icon;
                  return (
                    <div key={point.id} className="tf-trust-vault-point">
                      <span><Icon size={18} /></span>
                      <div>
                        <b>{point.title}</b>
                        <p>{point.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="tf-trust-vault-bottom">
                <div>
                  <strong>No surprise repair bill.</strong>
                  <span>Approve first. Repair second.</span>
                </div>
                <Link href="/book" className="btn btn-lime">
                  Check your device <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="tf-stories">
        <div className="container">
          <motion.div {...reveal} className="tf-section-heading tf-section-heading-split">
            <div>
              <span className="tf-kicker">EXPERIENCE PREVIEWS</span>
              <h2>What a clear repair experience should feel like.</h2>
            </div>
            <p>Short customer-style scenarios that show the experience TurrantFix is designed to deliver.</p>
          </motion.div>

          <div className="tf-story-scroll">
            {testimonials.map((story, index) => (
              <motion.article
                key={story.id}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="tf-story-card"
              >
                <div className="tf-story-top">
                  <img src={story.image} alt={`${story.name} portrait`} />
                  <div>
                    <b>{story.name}</b>
                    <span>{story.service}</span>
                  </div>
                  <div className="tf-story-stars" aria-label="5 star illustrative rating">
                    ★★★★★
                  </div>
                </div>
                <p>“{story.quote}”</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-final-cta">
        <div className="container">
          <motion.div {...reveal} className="tf-final-card">
            <div>
              <span className="tf-kicker tf-kicker-light">READY WHEN YOUR PHONE ISN’T</span>
              <h2>Find your device. Book in minutes.</h2>
            </div>
            <Link href="/book" className="btn btn-lime">
              Start booking <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="tf-mobile-dock">
        <div>
          <b>Need a repair?</b>
          <span>Choose device → issue → slot</span>
        </div>
        <Link href="/book">
          Book now <ArrowRight size={16} />
        </Link>
      </div>

      <AnimatePresence>
        {activeService && (
          <motion.div
            className="tf-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
          >
            <motion.div
              className="tf-service-sheet"
              role="dialog"
              aria-modal="true"
              aria-label={`${activeService.title} details`}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="tf-sheet-close" type="button" onClick={() => setActiveService(null)} aria-label="Close details">
                <X size={20} />
              </button>

              <div className="tf-sheet-hero">
                <img src={activeService.image} alt={`${activeService.title} repair`} />
                <div className="tf-sheet-gradient" />
                <div>
                  <span className="tf-rating-chip">
                    <Star size={13} fill="currentColor" /> {activeService.rating}
                  </span>
                  <h2>{activeService.title}</h2>
                  <p>{activeService.subtitle}</p>
                </div>
              </div>

              <div className="tf-sheet-meta">
                <div>
                  <span>Starts at</span>
                  <b>{activeService.price.replace("From ", "")}</b>
                </div>
                <div>
                  <span>Typical time</span>
                  <b>{activeService.duration}</b>
                </div>
                <div>
                  <span>Customer control</span>
                  <b>Approve quote first</b>
                </div>
              </div>

              <div className="tf-sheet-body">
                <section>
                  <h3>Our process</h3>
                  <div className="tf-sheet-process">
                    {activeService.process.map((item, index) => (
                      <div key={`${activeService.id}-process-${index}`}>
                        <span>{index + 1}</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3>What’s included</h3>
                  <div className="tf-included-list">
                    {activeService.includes.map((item) => (
                      <span key={`${activeService.id}-${item}`}>
                        <Check size={16} /> {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="tf-sheet-warranty">
                  <ShieldCheck size={20} />
                  <div>
                    <b>Warranty clarity</b>
                    <p>{activeService.warranty}</p>
                  </div>
                </section>
              </div>

              <div className="tf-sheet-cta">
                <div>
                  <span>{activeService.price}</span>
                  <small>Final quote after diagnosis where required</small>
                </div>
                <Link href={`/book?service=${encodeURIComponent(activeService.title)}`}>
                  Book this repair <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
