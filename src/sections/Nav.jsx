import { Link, useLocation } from "react-router-dom";
import { C, MAXW, GUTTER } from "../theme/tokens";
import { scrollToId } from "../lib/motion";

const navLink = { fontSize: 13, fontWeight: 500, color: C.muted, textDecoration: "none" };

// Sticky top navigation with blurred backdrop. Route-aware: in-page anchors on
// the home page, a simple back-to-home link on the CV page.
export function Nav({ isDesktop }) {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(252,252,250,.82)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", borderBottom: `1px solid ${C.hair}` }}>
      <div style={{ maxWidth: MAXW, margin: "0 auto", padding: isDesktop ? `0 ${GUTTER}px` : "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" onClick={onHome ? scrollToId("top") : undefined} className="nav-link" style={{ fontSize: 13, fontWeight: 600, color: C.ink, textDecoration: "none", letterSpacing: "-.01em" }}>Alessandro Martinolli</Link>
        <div style={{ display: "flex", gap: isDesktop ? 28 : 20 }}>
          {onHome ? (
            <>
              <a href="#work" onClick={scrollToId("work")} className="nav-link" style={navLink}>Work</a>
              <a href="#about" onClick={scrollToId("about")} className="nav-link" style={navLink}>About</a>
              <a href="#contact" onClick={scrollToId("contact")} className="nav-link" style={navLink}>Contact</a>
              <Link to="/cv" className="nav-link" style={{ ...navLink, color: C.ink, fontWeight: 600 }}>CV</Link>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link" style={navLink}>Home</Link>
              <Link to="/cv" className="nav-link" style={{ ...navLink, color: C.ink, fontWeight: 600 }}>CV</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
