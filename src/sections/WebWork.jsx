import React from "react";
import { C, sectionWrap } from "../theme/tokens";
import { revealStyle } from "../lib/motion";
import { useReveal, useParallax } from "../hooks";
import { Rule, SectionLabel, BrowserFrame, SiteLogo } from "../components";
import { WEB } from "../data";

// A single web project. Stacked card on mobile; alternating two-column row
// with an image parallax and hover lift on desktop.
function WebRow({ p, i, isDesktop }) {
  const [revRef, shown] = useReveal();
  const [pxRef, offset] = useParallax(0.05);

  if (!isDesktop) {
    return (
      <React.Fragment>
        <Rule />
        <div ref={revRef} style={{ ...revealStyle(shown, 0), padding: "24px 0" }}>
          <a href={p.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <BrowserFrame img={p.img} alt={`${p.title} homepage`} />
            <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <SiteLogo host={p.host} src={p.logo} size={22} />
                <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600, letterSpacing: "-.01em", color: C.ink }}>{p.title}</h3>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: C.blue, whiteSpace: "nowrap" }}>Visit ↗</span>
            </div>
            <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.5, color: C.muted }}>{p.role}</p>
            <div style={{ marginTop: 8, fontSize: 12, fontWeight: 500, letterSpacing: "0.02em", color: C.ink }}>{p.stack}</div>
            <div style={{ marginTop: 4, fontSize: 12, color: C.muted, textDecoration: "underline", textUnderlineOffset: 3 }}>{p.host}</div>
          </a>
        </div>
      </React.Fragment>
    );
  }

  const reversed = i % 2 === 1;
  return (
    <a
      ref={revRef}
      href={p.url}
      target="_blank"
      rel="noreferrer"
      className="web-row"
      style={{ ...revealStyle(shown, 0), textDecoration: "none", color: "inherit", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
    >
      <div ref={pxRef} className="lift" style={{ order: reversed ? 2 : 1 }}>
        <BrowserFrame img={p.img} alt={`${p.title} homepage`} parallax={offset} />
      </div>
      <div style={{ order: reversed ? 1 : 2 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <SiteLogo host={p.host} src={p.logo} size={28} />
            <h3 style={{ margin: 0, fontSize: 30, fontWeight: 600, letterSpacing: "-.02em", color: C.ink }}>{p.title}</h3>
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: C.blue, whiteSpace: "nowrap" }}>
            Visit <span className="arrow" style={{ display: "inline-block" }}>↗</span>
          </span>
        </div>
        <p style={{ margin: "14px 0 0", fontSize: 16, lineHeight: 1.6, color: C.muted, maxWidth: 440 }}>{p.role}</p>
        <div style={{ marginTop: 16, fontSize: 13, fontWeight: 500, letterSpacing: "0.02em", color: C.ink }}>{p.stack}</div>
        <div style={{ marginTop: 6, fontSize: 13, color: C.muted, textDecoration: "underline", textUnderlineOffset: 3 }}>{p.host}</div>
      </div>
    </a>
  );
}

export function WebWork({ isDesktop }) {
  return (
    <section id="work" style={sectionWrap(isDesktop)}>
      <SectionLabel left="WEB DEVELOPMENT" right="Design & build" />
      <div style={{ height: isDesktop ? 40 : 8 }} />
      <div style={{ display: "grid", gap: isDesktop ? 88 : 0 }}>
        {WEB.map((p, i) => (
          <WebRow key={p.title} p={p} i={i} isDesktop={isDesktop} />
        ))}
      </div>
      {!isDesktop && <Rule />}
    </section>
  );
}
