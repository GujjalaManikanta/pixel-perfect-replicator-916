import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import confetti from "canvas-confetti";

const pinks = ["#ff8fab", "#ffb3c6", "#fb6f92", "#ffc2d1", "#ffffff", "#f9a8d4"];

export function burst(x = 0.5, y = 0.6) {
  const heart = confetti.shapeFromText({ text: "💖", scalar: 2 });
  confetti({ particleCount: 90, spread: 80, origin: { x, y }, colors: pinks });
  confetti({ particleCount: 25, spread: 100, origin: { x, y }, shapes: [heart], scalar: 2 });
}

export function grandFinale() {
  const end = Date.now() + 2500;
  const tick = () => {
    confetti({ particleCount: 5, angle: 60, spread: 60, origin: { x: 0 }, colors: pinks });
    confetti({ particleCount: 5, angle: 120, spread: 60, origin: { x: 1 }, colors: pinks });
    if (Date.now() < end) requestAnimationFrame(tick);
  };
  tick();
}

export function FloatingHearts({ count = 14 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        size: 14 + Math.random() * 22,
        dur: 9 + Math.random() * 10,
        delay: -Math.random() * 18,
        glyph: ["💗", "💕", "🤍", "💖", "🌸"][i % 5],
      })),
    [count],
  );
  if (!mounted) return null;
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {items.map((h, i) => (
        <span
          key={i}
          className="animate-float-up absolute bottom-[-40px] opacity-0"
          style={{ left: `${h.left}%`, fontSize: h.size, animationDuration: `${h.dur}s`, animationDelay: `${h.delay}s` }}
        >
          {h.glyph}
        </span>
      ))}
      {items.slice(0, 10).map((h, i) => (
        <span
          key={`s${i}`}
          className="animate-twinkle absolute text-primary-foreground"
          style={{ left: `${(h.left * 7) % 100}%`, top: `${(h.dur * 37) % 100}%`, animationDelay: `${h.delay / 6}s`, fontSize: 10 + (i % 3) * 4 }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (el.classList.add("in"), io.disconnect()), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function Typewriter({ text, speed = 35 }: { text: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (setStarted(true), io.disconnect()), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!started || n >= text.length) return;
    const t = setTimeout(() => setN((v) => v + 1), text[n] === "\n" ? speed * 6 : speed);
    return () => clearTimeout(t);
  }, [started, n, text, speed]);
  return (
    <div ref={ref} className="whitespace-pre-line text-left text-base leading-relaxed sm:text-lg">
      {text.slice(0, n)}
      {n < text.length && <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-rose" />}
    </div>
  );
}
