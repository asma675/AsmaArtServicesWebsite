import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, ShoppingCart, Sparkles, Camera, Palette, Brush } from "lucide-react";

const Section = ({ id, title, subtitle, icon, children }) => (
  <section id={id} className="relative scroll-mt-24 py-20">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -inset-x-10 top-10 h-40 blur-3xl opacity-30 bg-gradient-to-r from-fuchsia-500 via-sky-400 to-emerald-400 rounded-full" />
    </div>
    <div className="mx-auto max-w-7xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex items-center gap-4"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20 shadow-lg">
          {icon}
        </span>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow">{title}</h2>
          {subtitle && (
            <p className="text-sm md:text-base text-white/70">{subtitle}</p>
          )}
        </div>
      </motion.div>
      {children}
    </div>
  </section>
);

const Card = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative rounded-2xl border border-white/15 bg-white/5 p-4 md:p-6 shadow-2xl backdrop-blur hover:bg-white/10 hover:border-white/25 transition"
  >
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/10 to-transparent" />
    {children}
  </motion.div>
);

const Glow = () => (
  <div className="pointer-events-none" aria-hidden>
    <div className="absolute -z-10 top-[-8rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/40 via-indigo-500/30 to-cyan-400/40 blur-3xl" />
  </div>
);

// ---------- Data ----------
const products = [
  {
    title: "Aurora Bloom (Print)",
    price: 45,
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Golden Hour (Canvas)",
    price: 120,
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Petal Whisper (Print)",
    price: 40,
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
  },
];

const galleryHenna = [
  "https://images.unsplash.com/photo-1598554747436-22d055f89e10?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560692488-1c0e0f1c8d9e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565061828409-c9b1d7d02d64?q=80&w=1200&auto=format&fit=crop",
];

const galleryPhoto = [
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white selection:bg-fuchsia-500/30 selection:text-white">
      <style>{`html { scroll-behavior: smooth }`}</style>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-black/20 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide text-white/90 hover:text-white">Asma Ahmed</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a className="hover:text-fuchsia-300 transition" href="#art">Art</a>
            <a className="hover:text-fuchsia-300 transition" href="#henna">Henna</a>
            <a className="hover:text-fuchsia-300 transition" href="#photo">Photography</a>
            <a className="hover:text-fuchsia-300 transition" href="#about">About</a>
            <a className="hover:text-fuchsia-300 transition" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/asmaahmedart"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20 transition"
            >
              <Instagram className="h-4 w-4" />
              <span>@asmaahmedart</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <Glow />
        <div className="mx-auto max-w-7xl px-4 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span>Art • Henna • Photography — GTA / Brampton</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-sky-300 to-emerald-300">Asma Ahmed</span> — I create glowing, story-rich visuals.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/75">
              Explore my original art prints, book bespoke henna for weddings & events, and browse my photography portfolio. Let’s make something beautiful together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#art" className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 font-semibold shadow-lg shadow-fuchsia-500/25 hover:from-fuchsia-400 hover:to-indigo-400 transition flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" /> Shop Art
              </a>
              <a href="#henna" className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-semibold hover:bg-white/20 transition flex items-center gap-2">
                <Brush className="h-5 w-5" /> Book Henna
              </a>
              <a href="#photo" className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-semibold hover:bg-white/20 transition flex items-center gap-2">
                <Camera className="h-5 w-5" /> View Photography
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ART SHOP */}
      <Section
        id="art"
        title="Art Shop"
        subtitle="Originals, prints & canvas — limited drops."
        icon={<Palette className="h-6 w-6" />}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <Card key={p.title}>
              <div className="overflow-hidden rounded-xl">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="h-56 w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-white/70">${p.price} CAD</p>
                </div>
                <a
                  href="#contact"
                  className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20 transition"
                >
                  Enquire
                </a>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/70">Looking for commissions? Scroll to <a href="#contact" className="underline decoration-dotted underline-offset-4 hover:text-white">Contact</a>.</p>
      </Section>

      {/* HENNA */}
      <Section
        id="henna"
        title="Henna by @henna.hearted"
        subtitle="DM for Henna (GTA / Brampton). Bridal • Parties • Eid • Mehndi nights"
        icon={<Brush className="h-6 w-6" />}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {galleryHenna.map((src, i) => (
            <Card key={i}>
              <div className="overflow-hidden rounded-xl">
                <motion.img
                  src={src}
                  alt={`Henna design ${i + 1}`}
                  className="h-64 w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-white/80">Signature florals & mandalas</span>
                <a
                  href="https://instagram.com/henna.hearted"
                  target="_blank"
                  className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20 transition"
                >
                  <Instagram className="h-4 w-4" /> DM
                </a>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
          <a href="https://instagram.com/henna.hearted" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 hover:bg-white/20"><Instagram className="h-4 w-4" />@henna.hearted</a>
          <span className="opacity-70">• Serving GTA / Brampton — home & on-site</span>
        </div>
      </Section>

      {/* PHOTOGRAPHY */}
      <Section
        id="photo"
        title="Photography — @_purelyphotography"
        subtitle="Portraits • Events • Product • Lifestyle"
        icon={<Camera className="h-6 w-6" />}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {galleryPhoto.map((src, i) => (
            <Card key={i}>
              <div className="overflow-hidden rounded-xl">
                <motion.img
                  src={src}
                  alt={`Photography ${i + 1}`}
                  className="h-64 w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-white/80">Cinematic, natural light</span>
                <a
                  href="https://instagram.com/_purelyphotography"
                  target="_blank"
                  className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20 transition"
                >
                  <Instagram className="h-4 w-4" /> Portfolio
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section
        id="about"
        title="About Asma"
        subtitle="Artist • Henna Designer • Photographer"
        icon={<Sparkles className="h-6 w-6" />}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <p className="text-white/80 leading-relaxed">
              I blend modern aesthetics with cultural roots to craft luminous visuals — from vibrant wall art to elegant henna and cinematic photography. My work focuses on warmth, detail, and stories that feel like home.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href="https://instagram.com/asmaahmedart" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 hover:bg-white/20"><Instagram className="h-4 w-4" /> @asmaahmedart</a>
              <a href="https://instagram.com/henna.hearted" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 hover:bg-white/20"><Instagram className="h-4 w-4" /> @henna.hearted</a>
              <a href="https://instagram.com/_purelyphotography" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 hover:bg-white/20"><Instagram className="h-4 w-4" /> @_purelyphotography</a>
            </div>
          </Card>
          <Card>
            <ul className="space-y-3 text-white/80">
              <li>• Based in GTA / Brampton — available for travel.</li>
              <li>• Henna: bridal, party bundles, on-site bookings.</li>
              <li>• Photography: portraits, events, product, lifestyle.</li>
              <li>• Art: originals, prints, custom commissions.</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title="Contact • Commissions • Bookings"
        subtitle="Fastest way: DM on Instagram (buttons below)"
        icon={<Mail className="h-6 w-6" />}
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="font-semibold">Henna Bookings</h3>
            <p className="text-sm text-white/70">DM for Henna (GTA/Brampton)</p>
            <a href="https://instagram.com/henna.hearted" target="_blank" className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/20"><Instagram className="h-4 w-4" />@henna.hearted</a>
          </Card>
          <Card>
            <h3 className="font-semibold">Photography</h3>
            <p className="text-sm text-white/70">Inquiries & portfolio</p>
            <a href="https://instagram.com/_purelyphotography" target="_blank" className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/20"><Instagram className="h-4 w-4" />@_purelyphotography</a>
          </Card>
          <Card>
            <h3 className="font-semibold">Art & Commissions</h3>
            <p className="text-sm text-white/70">Shop drops & custom requests</p>
            <a href="https://instagram.com/asmaahmedart" target="_blank" className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/20"><Instagram className="h-4 w-4" />@asmaahmedart</a>
          </Card>
        </div>
        <p className="mt-6 text-center text-xs text-white/60">For commissions, include date, location (for henna/photos), and any inspo references. I’ll respond within 24–48 hours.</p>
      </Section>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Asma Ahmed. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a href="https://instagram.com/henna.hearted" target="_blank" className="inline-flex items-center gap-1 hover:text-white/90"><Instagram className="h-4 w-4" /> @henna.hearted</a>
            <span className="opacity-40">•</span>
            <a href="https://instagram.com/_purelyphotography" target="_blank" className="inline-flex items-center gap-1 hover:text-white/90"><Instagram className="h-4 w-4" /> @_purelyphotography</a>
            <span className="opacity-40">•</span>
            <a href="https://instagram.com/asmaahmedart" target="_blank" className="inline-flex items-center gap-1 hover:text-white/90"><Instagram className="h-4 w-4" /> @asmaahmedart</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
