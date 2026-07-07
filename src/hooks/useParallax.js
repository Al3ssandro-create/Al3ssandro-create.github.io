import { useState, useEffect, useRef } from "react";
import { prefersReduce } from "../lib/motion";

// ---------------------------------------------------------------------------
// Per-element parallax: returns [ref, offsetPx] where the offset is
// proportional to the element's distance from the viewport centre.
// A positive `speed` drifts the content against the scroll direction.
// ---------------------------------------------------------------------------
export function useParallax(speed = 0.08) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduce()) return;
    let raf = null;
    const update = () => {
      raf = null;
      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      setOffset((viewCenter - elCenter) * speed);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);
  return [ref, offset];
}
