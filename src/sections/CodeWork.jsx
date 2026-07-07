import { C, sectionWrap } from "../theme/tokens";
import { revealStyle } from "../lib/motion";
import { useReveal } from "../hooks";
import { Rule, SectionLabel } from "../components";
import { CODE } from "../data";

// A single engineering project row, revealed on scroll with a hover lift.
function CodeCard({ p, i, isDesktop }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} style={revealStyle(shown, i * 0.04)}>
      <Rule />
      <a
        href={p.url}
        target="_blank"
        rel="noreferrer"
        className="lift code-card"
        style={{ textDecoration: "none", color: "inherit", display: "flex", gap: 16, padding: isDesktop ? "26px 0" : "22px 0" }}
      >
        <span style={{ fontSize: 12, fontWeight: 500, color: C.muted, paddingTop: 4 }}>{p.n}</span>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h3 style={{ margin: 0, fontSize: isDesktop ? 24 : 22, fontWeight: 600, letterSpacing: "-.01em", color: C.ink }}>{p.name}</h3>
            <span className="arrow" style={{ fontSize: 18, color: C.ink, display: "inline-block" }}>→</span>
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.55, color: C.muted }}>{p.desc}</p>
          <div style={{ marginTop: 10, fontSize: 12, fontWeight: 500, letterSpacing: "0.02em", color: C.ink }}>{p.stack}</div>
        </div>
      </a>
    </div>
  );
}

// Engineering / open-source projects. Two-column grid on desktop.
export function CodeWork({ isDesktop }) {
  return (
    <section style={sectionWrap(isDesktop)}>
      <SectionLabel left="ENGINEERING · OPEN SOURCE" right="Projects" />
      <div style={{ height: isDesktop ? 20 : 8 }} />
      <div style={{ display: "grid", gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr", columnGap: 56 }}>
        {CODE.map((p, i) => (
          <CodeCard key={p.name} p={p} i={i} isDesktop={isDesktop} />
        ))}
      </div>
      <Rule />
    </section>
  );
}
