import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { birthday as b } from "@/content/birthday";
import roses from "@/assets/roses-corner.png";
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
      <Decor />
      <FloatingHearts />
      <div className="relative z-10">
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
          <Special />
          <Surprise />
          <Final />
        </div>
      )}
      </div>
    </main>
  );
}

function Decor() {
  const bokeh = [[8,30,90],[88,22,70],[75,55,110],[15,65,80],[50,85,100],[92,88,60]];
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {bokeh.map(([x, y, s], i) => (
        <span key={i} className="bokeh" style={{ left: `${x}%`, top: `${y}%`, width: s, height: s, animationDelay: `${i * 0.9}s` }} />
      ))}
      <img src={roses} alt="" width={1024} height={1024} className="absolute -left-6 -top-6 w-40 opacity-90 sm:w-52 lg:w-64" />
      <img src={roses} alt="" width={1024} height={1024} className="absolute -bottom-6 -right-6 w-40 rotate-180 opacity-90 sm:w-52 lg:w-64" />
      <img src={roses} alt="" width={1024} height={1024} className="absolute -right-8 -top-8 hidden w-40 -scale-x-100 opacity-70 md:block lg:w-52" />
      <img src={roses} alt="" width={1024} height={1024} className="absolute -bottom-8 -left-8 hidden w-40 -scale-y-100 opacity-70 md:block lg:w-52" />
      {[["30%", 70, 0], ["70%", 50, 1.2], ["88%", 90, 0.6]].map(([l, h, d], i) => (
        <div key={i} className="animate-sway absolute top-0 hidden flex-col items-center sm:flex" style={{ left: l as string, animationDelay: `${d}s` }}>
          <span className="w-px bg-primary/40" style={{ height: h as number }} />
          <span className="text-xl text-heading">♥</span>
        </div>
      ))}
    </div>
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
        <div className="relative mx-auto w-fit animate-bob">
          <span className="absolute -top-3 -left-4 text-2xl animate-twinkle">✨</span>
          <span className="absolute -top-2 -right-5 text-2xl animate-pulse-heart">💗</span>
          <span className="absolute -bottom-2 -left-5 text-xl animate-pulse-heart">💕</span>
          <span className="absolute -bottom-3 -right-3 text-2xl animate-twinkle">✨</span>
          <div className="photo-glow grid size-60 place-items-center overflow-hidden rounded-full border-4 border-[color:var(--primary-foreground)] bg-blush sm:size-80">
            {b.mainPhoto ? (
              <img src={b.mainPhoto} alt={b.name} className="size-full object-cover" style={{ objectPosition: "50% 35%" }} />
            ) : (
              <span className="animate-pulse-heart text-7xl sm:text-8xl">💖</span>
            )}
          </div>
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
  const [idx, setIdx] = useState(0);
  const [viewer, setViewer] = useState<number | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const thumbs = useRef<HTMLDivElement>(null);
  const n = b.memories.length;

  const goTo = (i: number) => {
    const t = track.current;
    const card = t?.children[i] as HTMLElement | undefined;
    if (t && card) t.scrollTo({ left: card.offsetLeft - (t.clientWidth - card.clientWidth) / 2, behavior: "smooth" });
  };
  const onScroll = () => {
    const t = track.current;
    if (!t) return;
    const center = t.scrollLeft + t.clientWidth / 2;
    let best = 0, dist = Infinity;
    Array.from(t.children).forEach((c, i) => {
      const el = c as HTMLElement;
      const d = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
      if (d < dist) { dist = d; best = i; }
    });
    if (best !== idx) setIdx(best);
  };
  useEffect(() => {
    const th = thumbs.current?.children[idx] as HTMLElement | undefined;
    th?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [idx]);

  return (
    <section className="py-16 sm:py-24">
      <Reveal>
        <h2 className="px-5 text-center font-display text-3xl font-semibold sm:text-4xl">{b.memoriesHeading}</h2>
        <p className="mt-3 px-5 text-center font-script text-2xl text-rose">{b.memoriesSubtitle}</p>
        <div className="relative mx-auto mt-10 max-w-3xl">
          <div ref={track} onScroll={onScroll} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[12%] pb-4">
            {b.memories.map((m, i) => (
              <figure
                key={i}
                className={`w-[76%] shrink-0 snap-center rounded-3xl p-3 pb-4 transition-all duration-500 sm:w-[60%] ${m.bw ? "bg-card/80 border shadow-lg" : "glass"} ${i === idx ? "scale-100 opacity-100" : "scale-95 opacity-60"}`}
              >
                <button onClick={() => setViewer(i)} aria-label={`Open ${m.caption}`} className={`block w-full overflow-hidden rounded-2xl ${m.bw ? "bg-foreground/90" : "bg-blush"}`}>
                  <img src={m.src} alt={m.caption} loading="lazy" className="mx-auto h-[62vh] max-h-[520px] w-full object-contain" />
                </button>
                <figcaption className="mt-3 text-center font-script text-2xl text-rose">{m.caption}</figcaption>
              </figure>
            ))}
          </div>
          <button aria-label="Previous memory" onClick={() => goTo(Math.max(0, idx - 1))} className="glass absolute left-1 top-[42%] grid size-11 place-items-center rounded-full text-xl text-rose disabled:opacity-30" disabled={idx === 0}>‹</button>
          <button aria-label="Next memory" onClick={() => goTo(Math.min(n - 1, idx + 1))} className="glass absolute right-1 top-[42%] grid size-11 place-items-center rounded-full text-xl text-rose disabled:opacity-30" disabled={idx === n - 1}>›</button>
        </div>
        <div className="mt-3 flex justify-center gap-2">
          {b.memories.map((_, i) => (
            <button key={i} aria-label={`Memory ${i + 1}`} onClick={() => goTo(i)} className={`h-2.5 rounded-full transition-all ${i === idx ? "w-6 bg-primary" : "w-2.5 bg-blush"}`} />
          ))}
        </div>
        <div ref={thumbs} className="no-scrollbar mx-auto mt-5 flex max-w-xl gap-2 overflow-x-auto px-5 py-2 sm:justify-center">
          {b.memories.map((m, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Show memory ${i + 1}`} className={`size-14 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${i === idx ? "border-primary photo-glow" : "border-transparent opacity-70"}`}>
              <img src={m.src} alt="" loading="lazy" className="size-full object-cover" />
            </button>
          ))}
        </div>
      </Reveal>
      {viewer !== null && <Viewer index={viewer} setIndex={setViewer} />}
    </section>
  );
}

function Viewer({ index, setIndex }: { index: number; setIndex: (i: number | null) => void }) {
  const n = b.memories.length;
  const m = b.memories[index]!;
  const startX = useRef<number | null>(null);
  const prev = () => setIndex((index - 1 + n) % n);
  const next = () => setIndex((index + 1) % n);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  });
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-foreground/85 p-4 backdrop-blur-md"
      onClick={() => setIndex(null)}
      onTouchStart={(e) => (startX.current = e.touches[0]!.clientX)}
      onTouchEnd={(e) => {
        if (startX.current === null) return;
        const dx = e.changedTouches[0]!.clientX - startX.current;
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
        startX.current = null;
      }}
    >
      <button aria-label="Close" onClick={() => setIndex(null)} className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-card text-2xl text-foreground">×</button>
      <p className="absolute left-5 top-6 text-sm text-primary-foreground">{index + 1} / {n}</p>
      <img key={index} src={m.src} alt={m.caption} onClick={(e) => e.stopPropagation()} className="animate-rise max-h-[78vh] max-w-full rounded-2xl object-contain" />
      <p className="mt-4 text-center font-script text-3xl text-primary-foreground">{m.caption}</p>
      <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-card/80 text-2xl text-rose">‹</button>
      <button aria-label="Next" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-card/80 text-2xl text-rose">›</button>
    </div>
  );
}

function Special() {
  return (
    <Section>
      <Reveal>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{b.special.title}</h2>
        <div className="relative mx-auto mt-10 w-[82%] max-w-sm rotate-[-2deg] rounded-md bg-[color:var(--primary-foreground)] p-3 pb-6 shadow-[var(--shadow-soft)]">
          <span className="absolute -left-4 -top-4 text-3xl">🌸</span>
          <span className="absolute -right-4 -top-3 text-2xl">🌷</span>
          <span className="absolute -bottom-4 -left-3 text-2xl animate-pulse-heart">💕</span>
          <span className="absolute -bottom-3 -right-4 text-3xl">🌸</span>
          <span className="absolute -right-6 top-1/3 text-lg animate-twinkle">✨</span>
          <img src={b.special.src} alt="A special memory" loading="lazy" className="w-full rounded-sm" />
          <p className="mt-4 font-script text-2xl leading-snug text-rose">{b.special.caption}</p>
        </div>
      </Reveal>
    </Section>
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
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (grandFinale(), io.disconnect()), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section id="finale" className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-16 text-center">
      <Reveal>
        <div className="relative mx-auto flex w-full max-w-md flex-col items-center gap-6 sm:flex-row sm:items-center">
          <div className="relative w-[78%] max-w-[260px] shrink-0 rotate-[-3deg] rounded-md bg-[color:var(--primary-foreground)] p-3 pb-10 shadow-[var(--shadow-soft)] sm:w-[55%]">
            <span className="absolute -left-5 -top-5 text-3xl">🌸</span>
            <span className="absolute -right-4 -top-4 text-xl animate-twinkle">✨</span>
            <span className="absolute -bottom-4 -left-4 text-2xl animate-pulse-heart">💕</span>
            <span className="absolute -bottom-5 -right-4 text-3xl">🌷</span>
            <img src={b.finalPhoto} alt={b.name} loading="lazy" className="w-full rounded-sm" />
          </div>
          <div className="glass rotate-[2deg] rounded-2xl px-6 py-6 text-center">
            <p className="font-script text-3xl text-muted-foreground">{b.final.lead}</p>
            <h2 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">{b.final.title}</h2>
            <p className="mt-4 font-script text-3xl text-rose">{b.final.sign}</p>
          </div>
        </div>
      </Reveal>
      <footer className="mt-16 text-sm text-muted-foreground">{b.footer}</footer>
    </section>
  );
}
