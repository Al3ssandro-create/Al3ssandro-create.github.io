import { useEffect } from "react";
import { C, MAXW, GUTTER } from "../theme/tokens";
import { useMediaQuery } from "../hooks";
import { Reveal } from "../components";
import { Education, Experience, Skills } from "../sections";

// Dedicated CV route: education, experience and skills in one place, with a
// print/save-to-PDF action. Sections are reused from the home page.
export function CVPage() {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  // Land at the top when arriving on this route.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header style={{ maxWidth: MAXW, margin: "0 auto", padding: isDesktop ? `96px ${GUTTER}px 8px` : "56px 24px 8px" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", color: C.muted }}>CURRICULUM VITAE</div>
              <h1 style={{ margin: "18px 0 0", fontSize: "clamp(40px, 8vw, 72px)", lineHeight: .98, fontWeight: 800, letterSpacing: "-0.03em", color: C.ink }}>
                Alessandro<br />Martinolli
              </h1>
              <p style={{ margin: "18px 0 0", maxWidth: 460, fontSize: isDesktop ? 17 : 15, lineHeight: 1.55, color: C.muted }}>
                Backend software engineer — event-driven, Kafka-based systems, from first commit through production.
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="cta cv-print"
              style={{ border: `1px solid ${C.ink}`, background: "transparent", color: C.ink, fontSize: 13, fontWeight: 600, letterSpacing: "0.02em", padding: "11px 20px", cursor: "pointer", fontFamily: "inherit" }}
            >
              Print / Save PDF
            </button>
          </div>
        </Reveal>
      </header>

      <Education isDesktop={isDesktop} />
      <Experience isDesktop={isDesktop} />
      <Skills isDesktop={isDesktop} />

      <div style={{ maxWidth: MAXW, margin: "0 auto", padding: isDesktop ? `40px ${GUTTER}px 96px` : "32px 24px 64px" }}>
        <div style={{ fontSize: 12, color: C.muted }}>
          <a href="mailto:alessandro.martinolli@live.com" className="cta" style={{ color: C.blue, textDecoration: "underline", textUnderlineOffset: 3 }}>alessandro.martinolli@live.com</a>
          {"  ·  +33 7 59 66 38 41  ·  "}
          <a href="https://www.linkedin.com/in/alessandro-martinolli-283a8a226/" target="_blank" rel="noreferrer" className="cta" style={{ color: C.ink, textDecoration: "underline", textUnderlineOffset: 3 }}>LinkedIn</a>
          {"  ·  "}
          <a href="https://github.com/Al3ssandro-create" target="_blank" rel="noreferrer" className="cta" style={{ color: C.ink, textDecoration: "underline", textUnderlineOffset: 3 }}>GitHub</a>
        </div>
      </div>
    </>
  );
}
