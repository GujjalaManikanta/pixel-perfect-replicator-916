import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { birthday as b } from "@/content/birthday";
import { FloatingHearts, Reveal, Typewriter, burst, grandFinale } from "@/components/birthday/effects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday Mohana 💕" },
      { name: "description", content: "A little birthday surprise made with love for Mohana." },
      { property: "og:title", content: "Happy Birthday Mohana 💕" },
      { property: "og:description", content: "A little birthday surprise made with love for Mohana." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const open = () => {
    setLeaving(true);
    setTimeout(() => {
      setOpened(true);
      window.scrollTo(0, 0);
      setTimeout(() => burst(0.5, 0.4), 300);
    }, 800);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      {!opened ? (
        <section
          className={`relative flex min-h-screen flex-col items-center justify-center px-6 text-center transition-all duration-700 ${leaving ? "scale-110 opacity-0 blur-sm" : ""}`}
        >
          <div className="animate-rise glass max-w-md rounded-3xl px-8 py-12">
            <h1 className="font-display text-5xl font-semibold sm:text-6xl">{b.welcome.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{b.welcome.subtitle}</p>
            <button onClick={open} className="btn-love animate-bob mt-9 px-8 py-4 text-lg font-semibold">
              {b.welcome.button}
            </button>
          </div>
        </section>
      ) : (
        <div className="animate-rise relative">
          <Hero />
          <Cake />
          <Photo />
          <Message />
          <Memories />
          <Surprise />
          <Final />
        </div>
      )}
    </main>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-3xl px-5 py-16 text-center sm:py-24 ${className}`}>{children}</section>;
}

function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-script text-3xl text-rose sm:text-4xl">for {b.name}</p>
      <h1 className="mt-3 font-display text-5xl font-semibold leading-tight sm:text-7xl">{b.hero.title}</h1>
      <p className="mt-6 text-lg text-muted-foreground sm:text-xl">{b.hero.subtitle}</p>
      <span className="mt-14 animate-bob text-2xl text-rose">↓</span>
    </section>
  );
}

function Cake() {
  const [lit, setLit] = useState(false);
  const tap = (e: React.MouseEvent) => {
    setLit(true);
    burst(e.clientX / window.innerWidth, e.clientY / window.innerHeight);
  };
  return (
    <Section>
      <Reveal>
        <button onClick={tap} aria-label="Tap the cake" className="mx-auto block transition-transform active:scale-95">
          <svg viewBox="0 0 200 200" className="mx-auto w-56 drop-shadow-xl sm:w-64">
            {[70, 100, 130].map((x) => (
              <g key={x}>
                <rect x={x - 3} y="48" width="6" height="24" rx="2" fill="#fff" stroke="#f9a8d4" />
                {!lit ? (
                  <ellipse className="animate-flicker" cx={x} cy="40" rx="5" ry="9" fill="#ffd166" />
                ) : (
                  <text x={x - 6} y="44" fontSize="12">✨</text>
                )}
              </g>
            ))}
            <rect x="45" y="72" width="110" height="40" rx="10" fill="#ffc2d1" />
            <path d="M45 85 q10 12 20 0 t20 0 t20 0 t20 0 t20 0 t10 0" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
            <rect x="30" y="112" width="140" height="50" rx="12" fill="#fb6f92" />
            <path d="M30 126 q12 14 23 0 t23 0 t23 0 t23 0 t23 0 t25 0" fill="none" stroke="#ffe5ec" strokeWidth="7" strokeLinecap="round" />
            {[50, 80, 110, 140].map((x) => <circle key={x} cx={x} cy="148" r="3.5" fill="#fff" />)}
            <ellipse cx="100" cy="168" rx="85" ry="9" fill="#fff" opacity=".8" />
          </svg>
        </button>
        <p key={String(lit)} className="animate-rise mt-6 font-display text-2xl font-medium sm:text-3xl">
          {lit ? b.cake.wish : b.cake.hint}
        </p>
      </Reveal>
    </Section>
  );
}

function Photo() {
  return (
    <Section>
      <Reveal>
        <div className="photo-glow mx-auto grid size-56 place-items-center overflow-hidden rounded-full bg-blush sm:size-72">
          {b.mainPhoto ? (
            <img src={b.mainPhoto} alt={b.name} className="size-full object-cover" />
          ) : (
            <span className="animate-pulse-heart text-7xl sm:text-8xl">💖</span>
          )}
        </div>
        <p className="mt-8 font-script text-4xl text-rose">{b.name}</p>
      </Reveal>
    </Section>
  );
}

function Message() {
  return (
    <Section>
      <Reveal>
        <div className="glass rounded-3xl p-7 sm:p-12">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{b.message.heading}</h2>
          <div className="mx-auto mt-3 mb-7 h-px w-20 bg-primary" />
          <Typewriter text={b.message.text} />
        </div>
      </Reveal>
    </Section>
  );
}

function Memories() {
  return (
    <section className="py-16 sm:py-24">
      <Reveal>
        <h2 className="px-5 text-center font-display text-3xl font-semibold sm:text-4xl">{b.memoriesHeading}</h2>
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[10vw] pb-6 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-5">
          {b.memories.map((m, i) => (
            <figure
              key={i}
              className="glass w-60 shrink-0 snap-center rounded-2xl p-3 pb-4 transition-transform duration-500 hover:-translate-y-2 hover:rotate-0"
              style={{ rotate: `${(i % 2 ? 1 : -1) * 2}deg` }}
            >
              <div className="grid aspect-[4/5] place-items-center overflow-hidden rounded-xl bg-blush">
                {m.src ? <img src={m.src} alt={m.caption} className="size-full object-cover" /> : <span className="text-5xl">📸</span>}
              </div>
              <figcaption className="mt-3 font-script text-2xl text-rose">{m.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground sm:hidden">swipe →</p>
      </Reveal>
    </section>
  );
}

function Surprise() {
  const [shown, setShown] = useState(false);
  return (
    <Section>
      {!shown ? (
        <button
          onClick={() => { setShown(true); burst(0.5, 0.5); }}
          className="btn-love animate-pulse-heart px-8 py-4 text-lg font-semibold"
        >
          {b.surprise.button}
        </button>
      ) : (
        <div className="animate-rise glass rounded-3xl p-7 sm:p-12">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{b.surprise.title}</h2>
          <p className="mt-6 whitespace-pre-line text-base leading-relaxed sm:text-lg">{b.surprise.text}</p>
        </div>
      )}
    </Section>
  );
}

function Final() {
  useEffect(() => {
    const el = document.getElementById("finale");
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (grandFinale(), io.disconnect()), { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section id="finale" className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-script text-4xl text-rose">{b.final.lead}</p>
      <h2 className="mt-4 font-display text-5xl font-semibold sm:text-7xl">{b.final.title}</h2>
      <p className="mt-6 text-xl text-muted-foreground">{b.final.sign}</p>
    </section>
  );
}
