import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import CyberBackground from "./CyberBackground";
import Navbar from "./Navbar";

/** Soft neon glow that follows the cursor (desktop only — pointer: fine). */
function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 500,
        height: 500,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 0,
        background:
          "radial-gradient(circle, rgba(0,240,255,0.06), transparent 60%)",
        transition: "transform 0.18s ease-out",
      }}
    />
  );
}

const Footer = styled.footer`
  text-align: center;
  padding: 2.5rem 1.2rem 3rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-dim);
  letter-spacing: 0.05em;
`;

function Layout() {
  const { pathname } = useLocation();

  // Reset scroll on route change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <CyberBackground />
      <MouseGlow />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer>
        © {new Date().getFullYear()} Alessandro Martinolli — Backend Software Engineer
      </Footer>
    </>
  );
}

export default Layout;
