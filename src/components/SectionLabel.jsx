import { C } from "../theme/tokens";

// Small overline label with an optional right-aligned title.
export function SectionLabel({ left, right }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", color: C.muted }}>{left}</span>
      {right && <span style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>{right}</span>}
    </div>
  );
}
