// @ts-nocheck
"use client";

import { Fraunces, Outfit } from "next/font/google";
import content from "../data/content.json";

const display = Fraunces({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });
const body = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const ACCENT = "#2D5A3F";
const ACCENT_DEEP = "#1A332A";
const ACCENT_SOFT = "#6B8E7C";
const BG = "#F5F1E8";
const BG_CARD = "#FAF7EE";
const TEXT = "#1A1F1B";
const TEXT_MUTED = "#5C6660";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: BG, color: TEXT, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideRight { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        .fade-up { animation: fadeUp 0.85s ease-out forwards; }
        .fade-up-d1 { animation: fadeUp 0.85s 0.15s ease-out both; }
        .fade-up-d2 { animation: fadeUp 0.85s 0.3s ease-out both; }
        .slide-right { animation: slideRight 1s ease-out forwards; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: "rgba(245,241,232,0.88)", borderBottom: `1px solid ${ACCENT}15` }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className={display.className} style={{ fontSize: "1.5rem", fontWeight: 500, color: ACCENT_DEEP, letterSpacing: "-0.02em" }}>ZONO</span>
          <div className="flex items-center gap-7">
            <a href="#menu" className="hidden md:inline text-sm hover:opacity-70" style={{ color: TEXT }}>Menu</a>
            <a href="#reviews" className="hidden md:inline text-sm hover:opacity-70" style={{ color: TEXT }}>Reviews</a>
            <a href="#visit" className="hidden md:inline text-sm hover:opacity-70" style={{ color: TEXT }}>Visit</a>
            <a href={phoneTel} className="px-6 py-2.5 text-sm font-medium transition-transform hover:scale-105" style={{ backgroundColor: ACCENT, color: BG, borderRadius: "999px" }}>Reservations</a>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <p className="uppercase tracking-[0.3em] text-xs font-medium mb-6" style={{ color: ACCENT }}>Downtown Burbank • Since opening</p>
            <h1 className={display.className} style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: ACCENT_DEEP, fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.03em" }}>
              {content.hero.heading}
            </h1>
            <p className="text-lg md:text-xl mt-8 max-w-xl fade-up-d1" style={{ color: TEXT_MUTED, lineHeight: 1.55 }}>{content.hero.subheading}</p>
            <div className="mt-10 flex flex-wrap gap-4 fade-up-d2">
              <a href={content.hero.ctaLink} className="px-9 py-4 text-sm font-medium transition-transform hover:scale-105" style={{ backgroundColor: ACCENT, color: BG, borderRadius: "999px" }}>{content.hero.ctaText}</a>
              <a href="#menu" className="px-9 py-4 text-sm font-medium transition-all hover:bg-black/5" style={{ border: `1.5px solid ${ACCENT_DEEP}`, color: ACCENT_DEEP, borderRadius: "999px" }}>View the Menu</a>
            </div>
            <div className="mt-10 flex items-center gap-3 fade-up-d2">
              <span className="text-base" style={{ color: ACCENT }}>★★★★★</span>
              <span className="text-sm" style={{ color: TEXT_MUTED }}>4.4 across 235 reviews</span>
            </div>
          </div>
          <div className="slide-right relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundImage: `url("${content.hero.image}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl" style={{ backgroundColor: ACCENT_DEEP, color: BG, maxWidth: "240px" }}>
              <p className={display.className} style={{ fontSize: "2rem", fontWeight: 400, lineHeight: 1 }}>4.4</p>
              <p className="text-xs uppercase tracking-widest mt-1 opacity-75">235 reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="uppercase tracking-[0.3em] text-xs font-medium mb-5" style={{ color: ACCENT }}>The room</p>
        <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400, color: ACCENT_DEEP, lineHeight: 1.05, letterSpacing: "-0.02em" }}>{content.about.heading}</h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed" style={{ color: TEXT_MUTED }}>
          {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section id="menu" className="py-24 md:py-32" style={{ backgroundColor: ACCENT_DEEP, color: BG }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-xs font-medium mb-5" style={{ color: ACCENT_SOFT }}>The Menu</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400, color: BG, letterSpacing: "-0.02em" }}>Served when the season says yes.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {content.services.map((s, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ backgroundColor: "rgba(245,241,232,0.06)", border: `1px solid rgba(245,241,232,0.12)` }}>
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className={display.className} style={{ fontWeight: 500, fontSize: "1.4rem", color: BG }}>{s.title}</h3>
                  {s.price && <span className="text-sm font-medium" style={{ color: ACCENT_SOFT }}>{s.price}</span>}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,241,232,0.7)" }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs font-medium mb-5" style={{ color: ACCENT }}>Reviews</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400, color: ACCENT_DEEP, letterSpacing: "-0.02em" }}>From the regulars.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {content.reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-2xl" style={{ backgroundColor: BG_CARD, border: `1px solid ${ACCENT}15` }}>
              <div className="flex gap-1 mb-5" style={{ color: ACCENT }}>
                {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className={display.className} style={{ fontSize: "1.05rem", lineHeight: 1.55, color: TEXT, fontWeight: 400, fontStyle: "italic" }}>"{r.text}"</p>
              <p className="mt-6 text-xs uppercase tracking-widest font-medium" style={{ color: ACCENT }}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="py-24 md:py-32" style={{ backgroundColor: BG_CARD, borderTop: `1px solid ${ACCENT}15`, borderBottom: `1px solid ${ACCENT}15` }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs font-medium mb-5" style={{ color: ACCENT }}>Visit</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400, color: ACCENT_DEEP, lineHeight: 1.05, letterSpacing: "-0.02em" }}>On 1st Street.</h2>
            <p className="mt-8 text-lg" style={{ color: TEXT_MUTED }}>{content.contact.address}</p>
            <a href={phoneTel} className="block mt-2 text-3xl font-medium transition-opacity hover:opacity-80" style={{ color: ACCENT, fontFamily: display.style.fontFamily }}>{content.contact.phone}</a>
            <table className="mt-10 w-full text-sm">
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => (
                  <tr key={day} style={{ borderBottom: `1px solid ${ACCENT}15` }}>
                    <td className="py-3.5 font-medium">{day}</td>
                    <td className="py-3.5 text-right" style={{ color: TEXT_MUTED }}>{String(time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ minHeight: "520px", border: `1px solid ${ACCENT}22` }}>
            <iframe title="ZONO Location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "520px" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="rounded-3xl p-12 md:p-20 text-center" style={{ backgroundColor: ACCENT, color: BG }}>
          <h3 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em" }}>We saved you a table.</h3>
          <a href={phoneTel} className="inline-block mt-10 px-12 py-5 font-medium text-base transition-transform hover:scale-105" style={{ backgroundColor: BG, color: ACCENT_DEEP, borderRadius: "999px" }}>Reserve {content.contact.phone}</a>
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${ACCENT}15` }}>
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm" style={{ color: TEXT_MUTED }}>
          <div>
            <p className={display.className} style={{ fontSize: "1.5rem", fontWeight: 500, color: ACCENT_DEEP, letterSpacing: "-0.02em" }}>ZONO</p>
            <p className="mt-3">{content.contact.address}</p>
            <p className="mt-1"><a href={phoneTel} className="hover:text-black">{content.contact.phone}</a></p>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} ZONO. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}