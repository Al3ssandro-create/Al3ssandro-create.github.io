// ---------------------------------------------------------------------------
// Design tokens (clean light editorial). One accent, hairline rules, sharp edges.
// ---------------------------------------------------------------------------
export const C = {
  paper: "#FCFCFA",
  ink: "#111111",
  muted: "#6B6B66",
  hair: "#E4E4E0",
  blue: "#1A3AFF",
};

// Wider canvas so desktop breathes; mobile is still viewport-bound.
export const MAXW = 1280;

// Horizontal gutter on desktop — generous so content isn't boxed-in.
export const GUTTER = 64;

// Shared easing curve used across transitions.
export const EASE = "cubic-bezier(.2,.7,.2,1)";

// Standard section container. Padding grows on desktop.
export const sectionWrap = (isDesktop) => ({
  maxWidth: MAXW,
  margin: "0 auto",
  padding: isDesktop ? `88px ${GUTTER}px 8px` : "48px 24px 8px",
});
