import { C, sectionWrap } from "../theme/tokens";
import { revealStyle } from "../lib/motion";
import { useReveal } from "../hooks";
import { Rule, SectionLabel, SiteLogo } from "../components";
import { EXP } from "../data";

// A single career entry, revealed on scroll.
function ExpRow({ e, i }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} style={revealStyle(shown, i * 0.04)}>
      <Rule />
      <div style={{ display: "flex", gap: 16, padding: "20px 0" }}>
        <div style={{ width: 84, flexShrink: 0, fontSize: 11, fontWeight: 500, letterSpacing: "0.04em", color: C.muted, lineHeight: 1.4 }}>{e.yr}</div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, letterSpacing: "-.01em", color: C.ink }}>{e.role}</h3>
          <div style={{ margin: "4px 0 0", display: "flex", alignItems: "center", gap: 8 }}>
            {e.domain && <SiteLogo host={e.domain} size={20} />}
            <span style={{ fontSize: 13, fontWeight: 500, color: C.blue }}>{e.co}</span>
          </div>
          <p style={{ margin: "6px 0 0", fontSize: 13, lineHeight: 1.55, color: C.muted }}>{e.desc}</p>
        </div>
      </div>
    </div>
  );
}

// Career section. Sticky heading beside the list on desktop.
export function Experience({ isDesktop }) {
  const list = (
    <div>
      {EXP.map((e, i) => (
        <ExpRow key={e.co} e={e} i={i} />
      ))}
      <Rule />
    </div>
  );

  return (
    <section id="about" style={{ ...sectionWrap(isDesktop), background: "rgba(20,20,26,.03)" }}>
      {isDesktop ? (
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 64 }}>
          <div style={{ position: "sticky", top: 88, alignSelf: "start" }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: C.muted }}>CAREER</div>
            <h2 style={{ margin: "16px 0 0", fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, lineHeight: 1.05 }}>Experience</h2>
          </div>
          {list}
        </div>
      ) : (
        <>
          <SectionLabel left="CAREER" right="Experience" />
          <div style={{ height: 8 }} />
          {list}
        </>
      )}
    </section>
  );
}
