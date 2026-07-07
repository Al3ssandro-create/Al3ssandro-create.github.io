import { useState, useEffect } from "react";
import { prefersReduce } from "../lib/motion";

// ---------------------------------------------------------------------------
// Returns the current window.scrollY, throttled via requestAnimationFrame.
// Stays at 0 for reduced-motion users so nothing drifts.
// ---------------------------------------------------------------------------
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    if (prefersReduce()) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { setY(window.scrollY); raf = null; });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}
