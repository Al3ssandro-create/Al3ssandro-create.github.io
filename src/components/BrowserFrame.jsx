import { C } from "../theme/tokens";

// A minimal browser chrome around a screenshot. `parallax` (px) shifts the
// image vertically for a subtle depth effect while scrolling.
export function BrowserFrame({ img, alt, parallax = 0 }) {
  return (
    <div style={{ border: `1px solid ${C.hair}`, overflow: "hidden", background: C.paper }}>
      <div style={{ height: 28, background: "#EDEDEA", display: "flex", alignItems: "center", gap: 6, padding: "0 10px" }}>
        {["#FA6656", "#FDBD33", "#48CA59"].map((c) => (
          <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block" }} />
        ))}
      </div>
      <div style={{ aspectRatio: "16 / 10", overflow: "hidden" }}>
        <img
          src={img}
          alt={alt}
          loading="lazy"
          style={{
            width: "100%",
            height: "124%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
            transform: `translateY(calc(-10% + ${parallax}px))`,
            willChange: "transform",
          }}
        />
      </div>
    </div>
  );
}
