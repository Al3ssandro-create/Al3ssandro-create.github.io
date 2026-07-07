import { useState, useEffect } from "react";
import { C } from "../theme/tokens";
import { prefersReduce } from "../lib/motion";

// Thin accent bar pinned to the top of the viewport, tracking scroll progress.
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (prefersReduce()) return;
    let raf = null;
    const update = () => {
      raf = null;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div aria-hidden style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 60, pointerEvents: "none" }}>
      <div style={{ height: "100%", width: `${p * 100}%`, background: C.blue, transformOrigin: "left", transition: "width .1s linear" }} />
    </div>
  );
}
