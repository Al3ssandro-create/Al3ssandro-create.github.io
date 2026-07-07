import { useState, useEffect, useRef } from "react";
import { prefersReduce } from "../lib/motion";

// ---------------------------------------------------------------------------
// Scroll-reveal hook: flips `shown` true when the element enters the viewport.
// Reduced-motion users get the content shown immediately.
// ---------------------------------------------------------------------------
export function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduce()) { setShown(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}
