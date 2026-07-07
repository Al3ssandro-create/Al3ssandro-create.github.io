import { C, MAXW, GUTTER } from "../theme/tokens";
import { Reveal } from "../components";

const footLink = { fontSize: 14, fontWeight: 500, color: "#BFBFBD", textDecoration: "underline", textUnderlineOffset: 3 };

// Closing contact section on a dark panel.
export function Contact({ isDesktop }) {
  return (
    <section id="contact" style={{ background: C.ink, color: C.paper }}>
      <div style={{ maxWidth: MAXW, margin: "0 auto", padding: isDesktop ? `104px ${GUTTER}px 64px` : "72px 24px 48px" }}>
        <Reveal>
          <h2 style={{ margin: 0, fontSize: "clamp(30px,8vw,64px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Let's work together.
          </h2>
          <p style={{ margin: "16px 0 0", maxWidth: 460, fontSize: isDesktop ? 18 : 16, lineHeight: 1.55, color: "#BFBFBD" }}>
            Open to backend and platform roles, consulting, and interesting side projects.
          </p>
          <div style={{ marginTop: 32 }}>
            <a href="mailto:alessandro.martinolli@live.com" className="cta-light" style={{ fontSize: "clamp(18px,5vw,28px)", fontWeight: 600, color: C.paper, textDecoration: "underline", textUnderlineOffset: 5, wordBreak: "break-word" }}>
              alessandro.martinolli@live.com
            </a>
          </div>
          <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 24 }}>
            <a href="https://www.linkedin.com/in/alessandro-martinolli-283a8a226/" target="_blank" rel="noreferrer" className="cta-light" style={footLink}>LinkedIn</a>
            <a href="https://github.com/Al3ssandro-create" target="_blank" rel="noreferrer" className="cta-light" style={footLink}>GitHub</a>
            <a href="tel:+33759663841" className="cta-light" style={footLink}>+33 7 59 66 38 41</a>
          </div>
          <div style={{ marginTop: 40, fontSize: 12, color: "#8A8A88" }}>© 2026 Alessandro Martinolli</div>
        </Reveal>
      </div>
    </section>
  );
}
