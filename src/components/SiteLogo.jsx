import { useState } from "react";
import { C } from "../theme/tokens";

// Small logo chip for a web project. Uses a supplied `src` if given, otherwise
// falls back to the site's favicon resolved from its host. Hides itself if the
// image fails to load, so a missing logo never leaves a broken icon.
export function SiteLogo({ host, src, size = 24 }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  const url = src || `https://www.google.com/s2/favicons?domain=${host}&sz=64`;
  return (
    <span
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: 6,
        border: `1px solid ${C.hair}`,
        background: C.paper,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <img
        src={url}
        alt={`${host} logo`}
        width={size - 8}
        height={size - 8}
        loading="lazy"
        onError={() => setOk(false)}
        style={{ display: "block", objectFit: "contain" }}
      />
    </span>
  );
}
