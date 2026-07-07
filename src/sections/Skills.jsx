import React from "react";
import { C, sectionWrap } from "../theme/tokens";
import { Rule, SectionLabel } from "../components";
import { SKILLS } from "../data";

// Toolkit section. Label/value align into two columns on desktop.
export function Skills({ isDesktop }) {
  return (
    <section style={sectionWrap(isDesktop)}>
      <SectionLabel left="TOOLKIT" right="Skills & Languages" />
      <div style={{ height: 20 }} />
      {SKILLS.map((s) => (
        <React.Fragment key={s.label}>
          <Rule />
          <div style={{ display: isDesktop ? "grid" : "block", gridTemplateColumns: "160px 1fr", gap: 32, padding: "18px 0" }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", color: C.muted, paddingTop: isDesktop ? 4 : 0 }}>{s.label}</div>
            <div style={{ marginTop: isDesktop ? 0 : 8, fontSize: isDesktop ? 18 : 16, fontWeight: 500, lineHeight: 1.5, color: s.strong ? C.ink : C.muted }}>{s.value}</div>
          </div>
        </React.Fragment>
      ))}
      <Rule />
    </section>
  );
}
