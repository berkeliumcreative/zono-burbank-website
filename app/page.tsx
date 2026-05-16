// @ts-nocheck
"use client";

import { Outfit, Work_Sans } from "next/font/google";
import content from "../data/content.json";

const display = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "700", "800"] });
const body = Work_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

// Editorial black + accent pink (Vibrant & Block-based)
const INK = "#0A0A0A";
const INK_SOFT = "#1F1F1F";
const CREAM = "#F5F1EA";
const PINK = "#FF4D8F";
const PINK_SOFT = "#FFB3CC";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: CREAM, color: INK, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes blockIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes lineGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .block-in { animation: blockIn 0.85s cubic-bezier(.2,.9,.2,1) forwards; }
        .block-in-d1 { animation: blockIn 0.85s 0.2s cubic-bezier(.2,.9,.2,1) both; }
        .block-in-d2 { animation: blockIn 0.85s 0.4s cubic-bezier(.2,.9,.2,1) both; }
        .pink-hover:hover { background-color: ${PINK} !important; color: ${CREAM} !important; }
      `}</style>

      <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: CREAM, borderColor: INK }}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <span className={display.className} style={{ fontSize: "1.2rem", fontWeight: 800, color: INK, letterSpacing: "-0.04em" }}>ZONO.</span>
          <div className="flex items-center gap-8">
            <a href="#menu" className="hidden md:inline text-sm font-medium hover:text-[#FF4D8F] transition-colors">Menu</a>
            <a href="#story" className="hidden md:inline text-sm font-medium hover:text-[#FF4D8F] transition-colors">Story</a>
            <a href="#visit" className="hidden md:inline text-sm font-medium hover:text-[#FF4D8F] transition-colors">Visit</a>
            <a href={phoneTel} className="px-5 py-2.5 text-sm font-bold pink-hover transition-all" style={{ backgroundColor: INK, color: CREAM, borderRadius: "0" }}>Reserve →</a>
          </div>
        </div>
      </nav>

      {/* HERO — editorial massive type */}
      <section className="border-b" style={{ borderColor: INK }}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 pt-16 pb-20 md:pt-24 md:pb-32 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7 block-in">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-px" style={{ backgroundColor: PINK }} />
              <span className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: PINK }}>Burbank · est. day one</span>
            </div>
            <h1 className={display.className} style={{ fontSize: "clamp(4.5rem, 16vw, 14rem)", fontWeight: 800, lineHeight: 0.82, letterSpacing: "-0.06em", color: INK }}>
              Eat<br />well.
              <span style={{ color: PINK }}>.</span>
            </h1>
          </div>
          <div className="md:col-span-5 block-in-d1">
            <p className="text-xl md:text-2xl" style={{ color: INK, lineHeight: 1.4, fontWeight: 300 }}>
              {content.hero.subheading}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={content.hero.ctaLink} className="px-8 py-4 text-sm font-bold uppercase tracking-widest pink-hover transition-all" style={{ backgroundColor: INK, color: CREAM }}>Book a Table</a>
              <a href="#menu" className="px-8 py-4 text-sm font-bold uppercase tracking-widest border-2 transition-all hover:bg-black hover:text-cream" style={{ borderColor: INK, color: INK }}>See Menu</a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4 border-t pt-6" style={{ borderColor: INK }}>
              <div><p className={display.className} style={{ fontSize: "2rem", fontWeight: 800, color: INK, lineHeight: 1, letterSpacing: "-0.03em" }}>4.4</p><p className="text-xs uppercase tracking-widest mt-2 font-medium">Rating</p></div>
              <div><p className={display.className} style={{ fontSize: "2rem", fontWeight: 800, color: PINK, lineHeight: 1, letterSpacing: "-0.03em" }}>235</p><p className="text-xs uppercase tracking-widest mt-2 font-medium">Reviews</p></div>
              <div><p className={display.className} style={{ fontSize: "2rem", fontWeight: 800, color: INK, lineHeight: 1, letterSpacing: "-0.03em" }}>7</p><p className="text-xs uppercase tracking-widest mt-2 font-medium">Days/wk</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO PHOTO STRIP */}
      <section className="border-b" style={{ borderColor: INK }}>
        <div className="aspect-[5/2] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: `url("${content.hero.image}")` }} />
      </section>

      {/* STORY */}
      <section id="story" className="border-b" style={{ borderColor: INK }}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: PINK }}>The Story</span>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, color: INK, lineHeight: 0.9, letterSpacing: "-0.04em", marginTop: "1.5rem" }}>A room,<br />a kitchen,<br />a city.</h2>
          </div>
          <div className="md:col-span-8 space-y-7 text-xl md:text-2xl" style={{ color: INK, lineHeight: 1.4, fontWeight: 300 }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* MENU — geometric grid, alternating ink/cream */}
      <section id="menu">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-10">
          <div className="flex items-end justify-between border-b-2 pb-6" style={{ borderColor: INK }}>
            <h2 className={display.className} style={{ fontSize: "clamp(3rem, 9vw, 8rem)", fontWeight: 800, color: INK, lineHeight: 0.85, letterSpacing: "-0.05em" }}>
              Menu<span style={{ color: PINK }}>.</span>
            </h2>
            <span className="text-xs font-bold tracking-[0.4em] uppercase hidden md:inline" style={{ color: INK }}>06 items</span>
          </div>
        </div>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 pb-24 md:pb-32 grid md:grid-cols-2 gap-px" style={{ backgroundColor: INK }}>
          {content.services.map((s, i) => {
            const isAlt = i % 2 === 1;
            return (
              <div key={i} className="p-10 md:p-12 flex flex-col justify-between min-h-[280px] transition-all hover:bg-pink-500/10" style={{ backgroundColor: isAlt ? INK : CREAM, color: isAlt ? CREAM : INK }}>
                <div className="flex items-baseline justify-between">
                  <span className={display.className} style={{ fontSize: "1rem", fontWeight: 700, color: PINK, letterSpacing: "0.04em" }}>0{i + 1}.</span>
                  {s.price && <span className={display.className} style={{ fontSize: "1.4rem", fontWeight: 500, letterSpacing: "-0.02em" }}>{s.price}</span>}
                </div>
                <div className="mt-auto">
                  <h3 className={display.className} style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>{s.title}</h3>
                  <p className="mt-4 text-base leading-relaxed max-w-md" style={{ opacity: 0.8 }}>{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-y" style={{ borderColor: INK, backgroundColor: INK, color: CREAM }}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <span className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: PINK }}>Press / Reviews</span>
              <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 800, color: CREAM, lineHeight: 0.9, letterSpacing: "-0.04em", marginTop: "1.5rem" }}>235 voices.<br /><span style={{ color: PINK }}>One verdict.</span></h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: PINK }}>
            {content.reviews.map((r, i) => (
              <div key={i} className="p-10" style={{ backgroundColor: INK }}>
                <div className="flex gap-1 mb-6 text-base" style={{ color: PINK }}>{Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}</div>
                <p className={display.className} style={{ fontSize: "1.4rem", lineHeight: 1.3, fontWeight: 400, color: CREAM, letterSpacing: "-0.01em" }}>&ldquo;{r.text}&rdquo;</p>
                <p className="mt-8 text-xs uppercase tracking-widest font-bold" style={{ color: PINK }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="border-b" style={{ borderColor: INK }}>
        <div className="max-w-[1500px] mx-auto grid md:grid-cols-2">
          <div className="p-10 md:p-16">
            <span className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: PINK }}>Visit</span>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 800, color: INK, lineHeight: 0.9, letterSpacing: "-0.04em", marginTop: "1.5rem" }}>1st St.<br /><span style={{ color: PINK }}>Downtown Burbank.</span></h2>
            <p className="mt-8 text-lg" style={{ color: INK, opacity: 0.7 }}>{content.contact.address}</p>
            <a href={phoneTel} className={display.className + " block mt-2 hover:opacity-70 transition-opacity"} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: INK, fontWeight: 800, letterSpacing: "-0.03em" }}>{content.contact.phone}</a>
            <div className="mt-10 border-t" style={{ borderColor: INK }}>
              {Object.entries(content.contact.hours).map(([day, time]) => (
                <div key={day} className="flex justify-between py-3.5 border-b text-sm" style={{ borderColor: `${INK}33` }}>
                  <span className="font-bold uppercase tracking-widest text-xs">{day}</span>
                  <span style={{ color: INK, opacity: 0.7 }}>{String(time)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-l" style={{ borderColor: INK, minHeight: "560px" }}>
            <iframe title="ZONO" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "560px", filter: "grayscale(0.8) contrast(1.05)" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: PINK }}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <h3 className={display.className} style={{ fontSize: "clamp(3rem, 11vw, 9rem)", fontWeight: 800, color: INK, lineHeight: 0.85, letterSpacing: "-0.05em" }}>
            See you<br />at the table.
          </h3>
          <a href={phoneTel} className={display.className + " inline-block mt-12 px-12 py-5 transition-transform hover:scale-105"} style={{ fontSize: "1.5rem", backgroundColor: INK, color: CREAM, fontWeight: 700, letterSpacing: "-0.02em" }}>
            {content.contact.phone}
          </a>
        </div>
      </section>

      <footer style={{ backgroundColor: INK, color: CREAM }}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <p className={display.className} style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.04em" }}>ZONO<span style={{ color: PINK }}>.</span></p>
          <p style={{ color: `${CREAM}99` }}>{content.contact.address}</p>
          <p className="text-xs uppercase tracking-widest" style={{ color: `${CREAM}66` }}>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
