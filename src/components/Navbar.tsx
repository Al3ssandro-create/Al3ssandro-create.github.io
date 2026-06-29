import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const CV_FILE = "CV_Alessandro_Martinolli.pdf";

const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem clamp(1.1rem, 5vw, 3rem);
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s;
  border-bottom: 1px solid
    ${({ $scrolled }) => ($scrolled ? "var(--panel-border)" : "transparent")};
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(5, 6, 10, 0.78)" : "transparent"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(12px)" : "none")};
`;

const Brand = styled(Link)`
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  color: var(--text);

  b {
    color: var(--cyan);
  }
`;

const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  a.link {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    color: var(--text-dim);
    position: relative;
    transition: color 0.2s ease;
  }
  a.link:hover,
  a.link.active {
    color: var(--cyan);
  }
  a.link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 1px;
    background: var(--cyan);
    transition: width 0.25s ease;
  }
  a.link:hover::after,
  a.link.active::after {
    width: 100%;
  }

  @media (max-width: 720px) {
    position: fixed;
    inset: 0 0 0 auto;
    width: min(78vw, 300px);
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    background: rgba(7, 9, 16, 0.97);
    backdrop-filter: blur(14px);
    border-left: 1px solid var(--panel-border);
    transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
    transition: transform 0.3s ease;

    a.link {
      font-size: 1.1rem;
    }
  }
`;

const Cv = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  padding: 0.5rem 0.95rem;
  border-radius: 6px;
  border: 1px solid var(--cyan);
  color: var(--cyan);
  transition: background 0.2s ease, box-shadow 0.25s ease;

  &:hover {
    background: rgba(0, 240, 255, 0.1);
    box-shadow: 0 0 16px rgba(0, 240, 255, 0.3);
  }
`;

const Toggle = styled.button`
  display: none;
  z-index: 60;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.6rem;
  cursor: pointer;
  padding: 0;

  @media (max-width: 720px) {
    display: inline-flex;
  }
`;

const Scrim = styled.div<{ $open: boolean }>`
  display: none;
  @media (max-width: 720px) {
    display: ${({ $open }) => ($open ? "block" : "none")};
    position: fixed;
    inset: 0;
    z-index: 40;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const LINKS = [
  { to: "/", label: "home", end: true },
  { to: "/projects", label: "projects", end: false },
  { to: "/cv", label: "cv", end: false },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <Bar $scrolled={scrolled}>
      <Brand to="/" onClick={() => setOpen(false)}>
        <b>AM</b>_martinolli
      </Brand>

      <Toggle aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
        {open ? <FiX /> : <FiMenu />}
      </Toggle>

      <Scrim $open={open} onClick={() => setOpen(false)} />

      <Nav $open={open}>
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => `link${isActive ? " active" : ""}`}
          >
            ./{l.label}
          </NavLink>
        ))}
        <Cv href={CV_FILE} download>
          <FiDownload /> resume
        </Cv>
      </Nav>
    </Bar>
  );
}

export default Navbar;
