import { C, sectionWrap } from "../theme/tokens";
import { revealStyle } from "../lib/motion";
import { useReveal } from "../hooks";
import { Rule, SectionLabel, SiteLogo } from "../components";
import { EDU } from "../data";

// A single education entry, revealed on scroll.
function EduRow({ e, i }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} style={revealStyle(shown, i * 0.04)}>
      <Rule />
      <div style={{ display: "flex", gap: 16, padding: "20px 0" }}>
        <div style={{ width: 84, flexShrink: 0, fontSize: 11, fontWeight: 500, letterSpacing: "0.04em", color: C.muted, lineHeight: 1.4 }}>{e.yr}</div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, letterSpacing: "-.01em", color: C.ink }}>
            {e.degree}
            {e.note && <span style={{ fontWeight: 500, color: C.muted }}> · {e.note}</span>}
          </h3>
          <div style={{ margin: "4px 0 0", display: "flex", alignItems: "center", gap: 8 }}>
            {e.domain && <SiteLogo host={e.domain} size={20} />}
            <span style={{ fontSize: 13, fontWeight: 500, color: C.blue }}>{e.school}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Education section. Sticky heading beside the list on desktop.
export function Education({ isDesktop }) {
  const list = (
    <div>
      {EDU.map((e, i) => (
        <EduRow key={`${e.school}-${e.degree}`} e={e} i={i} />
      ))}
      <Rule />
    </div>
  );

  return (
    <section id="education" style={sectionWrap(isDesktop)}>
      {isDesktop ? (
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 64 }}>
          <div style={{ position: "sticky", top: 88, alignSelf: "start" }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: C.muted }}>ACADEMIC</div>
            <h2 style={{ margin: "16px 0 0", fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, lineHeight: 1.05 }}>Education</h2>
          </div>
          {list}
        </div>
      ) : (
        <>
          <SectionLabel left="ACADEMIC" right="Education" />
          <div style={{ height: 8 }} />
          {list}
        </>
      )}
    </section>
  );
}
