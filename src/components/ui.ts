import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Section = styled.section`
  position: relative;
  max-width: 980px;
  margin: 0 auto;
  padding: 5.5rem 1.75rem;

  @media (max-width: 700px) {
    padding: 4rem 1.25rem;
  }
`;

export const Eyebrow = styled.span`
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--cyan);
  margin-bottom: 0.9rem;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  margin: 0 0 2.75rem;
  line-height: 1.1;
  letter-spacing: -0.01em;

  span {
    color: var(--magenta);
  }
`;

const neonButtonStyles = css<{ $variant?: "solid" | "ghost" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-mono);
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  padding: 0.85rem 1.6rem;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.25s ease, background 0.25s ease;
  border: 1px solid var(--cyan);
  color: ${({ $variant }) => ($variant === "solid" ? "var(--void)" : "var(--cyan)")};
  background: ${({ $variant }) =>
    $variant === "solid" ? "var(--cyan)" : "transparent"};
  box-shadow: 0 0 0 0 rgba(0, 240, 255, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 22px rgba(0, 240, 255, 0.45);
    background: ${({ $variant }) =>
      $variant === "solid" ? "#5ff7ff" : "rgba(0, 240, 255, 0.08)"};
  }
`;

export const NeonButton = styled.a<{ $variant?: "solid" | "ghost" }>`
  ${neonButtonStyles}
`;

/** Same look as NeonButton, but routes internally via react-router. */
export const NeonButtonLink = styled(Link)<{ $variant?: "solid" | "ghost" }>`
  ${neonButtonStyles}
`;

/** Animated wrapper that reveals on scroll. */
export const Reveal = motion.div;

export const revealProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};
