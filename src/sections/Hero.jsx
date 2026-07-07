import { useState, useEffect } from "react";
import { C, MAXW, GUTTER, EASE } from "../theme/tokens";
import { prefersReduce, scrollToId } from "../lib/motion";
import { useScrollY } from "../hooks";
import { Rule } from "../components";

// Landing hero. Two-column editorial layout on desktop, stacked on mobile.
// Content rises in on mount; ambient blobs and the label drift with scroll.
export function Hero({ isDesktop }) {
  const y = useScrollY();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (prefersReduce()) { setMounted(true); return; }
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // parallax: label drifts up slowly, blobs drift at different rates
  const labelShift = -(y * 0.06);
  const blobA = y * 0.18;
  const blobB = y * 0.30;
  const heroFade = Math.max(0, 1 - y / 620);

  // staggered mount rise for hero content
  const rise = (i) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(26px)",
    transition: `opacity .8s ${EASE} ${i * 0.09}s, transform .8s ${EASE} ${i * 0.09}s`,
  });

  const heading = (
    <h1 style={{ margin: isDesktop ? 0 : "26px 0 0", fontSize: "clamp(44px, 9vw, 116px)", lineHeight: .95, fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, ...rise(1) }}>
      Alessandro<br />Martinolli
    </h1>
  );

  const label = (
    <div style={{ ...rise(0), opacity: (mounted ? heroFade : 0), transform: `translateY(${mounted ? labelShift : 26}px)`, fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", color: C.muted }}>
      BACKEND SOFTWARE ENGINEER
    </div>
  );

  const intro = (
    <p style={{ margin: isDesktop ? 0 : "24px 0 0", maxWidth: 540, fontSize: isDesktop ? 20 : "clamp(16px,4.4vw,19px)", lineHeight: 1.55, color: C.ink, ...rise(2) }}>
      I build event-driven, Kafka-based systems that run reliably in production, from first commit through deployment and incident response. On the side, I design and ship websites.
    </p>
  );

  const ctas = (
    <div style={{ marginTop: isDesktop ? 36 : 32, display: "flex", gap: 24, ...rise(3) }}>
      <a href="#work" onClick={scrollToId("work")} className="cta" style={{ fontSize: 15, fontWeight: 600, color: C.blue, textDecoration: "underline", textUnderlineOffset: 4 }}>View work</a>
      <a href="#contact" onClick={scrollToId("contact")} className="cta" style={{ fontSize: 15, fontWeight: 600, color: C.ink, textDecoration: "underline", textUnderlineOffset: 4 }}>Get in touch</a>
    </div>
  );

  return (
    <header id="top" style={{ maxWidth: MAXW, margin: "0 auto", padding: isDesktop ? `0 ${GUTTER}px` : "0 24px", position: "relative", overflow: "hidden" }}>
      {/* ambient parallax accents */}
      <div aria-hidden style={{
        position: "absolute", top: 20, right: isDesktop ? GUTTER : -60, width: isDesktop ? 420 : 260, height: isDesktop ? 420 : 260, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(26,58,255,.12), rgba(26,58,255,0) 70%)`,
        transform: `translateY(${blobA}px)`, pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: -80, left: isDesktop ? "42%" : -40, width: isDesktop ? 320 : 200, height: isDesktop ? 320 : 200, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(26,58,255,.06), rgba(26,58,255,0) 70%)`,
        transform: `translateY(${-blobB}px)`, pointerEvents: "none",
      }} />

      {isDesktop ? (
        <div style={{ paddingTop: 128, paddingBottom: 104, position: "relative", display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            {label}
            <div style={{ height: 28 }} />
            {heading}
          </div>
          <div>
            {intro}
            {ctas}
            <div style={{ marginTop: 56, ...rise(4) }}>
              <a href="#work" onClick={scrollToId("work")} aria-label="Scroll to work" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: C.muted, textDecoration: "none" }}>
                <span>SCROLL</span>
                <span className="scroll-cue" style={{ display: "inline-block" }}>↓</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ paddingTop: 64, paddingBottom: 56, position: "relative" }}>
          {label}
          {heading}
          {intro}
          {ctas}
        </div>
      )}
      <Rule />
    </header>
  );
}
