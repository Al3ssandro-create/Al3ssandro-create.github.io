import { EASE } from "../theme/tokens";

// ---------------------------------------------------------------------------
// Motion helpers shared across sections. All respect prefers-reduced-motion.
// ---------------------------------------------------------------------------

// Read the user's reduced-motion preference. Cheap; safe to call anywhere.
export const prefersReduce = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Inline style for a fade + rise reveal, driven by a boolean `shown` flag.
export const revealStyle = (shown, delay = 0) => ({
  opacity: shown ? 1 : 0,
  transform: shown ? "translateY(0)" : "translateY(20px)",
  transition: `opacity .7s ${EASE} ${delay}s, transform .7s ${EASE} ${delay}s`,
});

// Smooth in-page scroll (more reliable than anchor hrefs in sandboxed frames).
export const scrollToId = (id) => (e) => {
  if (e) e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: prefersReduce() ? "auto" : "smooth", block: "start" });
};
