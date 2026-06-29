import { useEffect, useRef } from "react";
import styled from "styled-components";

/**
 * Fixed full-viewport backdrop: classic Matrix digital rain on the void,
 * kept low-contrast so foreground content stays readable.
 */
const Layer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% -10%, rgba(0, 240, 255, 0.08), transparent 55%),
    radial-gradient(circle at 85% 110%, rgba(255, 43, 214, 0.06), transparent 50%),
    var(--void);
`;

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

const Vignette = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 35%,
    rgba(5, 6, 10, 0.85) 100%
  );
`;

function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const glyphs =
      "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉ0123456789ﾊﾋﾌﾍﾎｦｱ".split("");
    const fontSize = 16;
    let cols = 0;
    let drops: number[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.floor(w / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -h);
    };

    const frame = (t: number) => {
      raf = requestAnimationFrame(frame);
      if (t - last < 55) return; // throttle ~18fps for a calmer rain
      last = t;

      ctx.fillStyle = "rgba(5, 6, 10, 0.12)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < cols; i++) {
        const ch = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        // Lead glyph brighter; trail in matrix green.
        ctx.fillStyle = Math.random() > 0.975 ? "#aaffee" : "#1fae8a";
        ctx.fillText(ch, x, y);

        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    resize();
    if (!reduce) raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <Layer aria-hidden>
      <Canvas ref={canvasRef} />
      <Vignette />
    </Layer>
  );
}

export default CyberBackground;
