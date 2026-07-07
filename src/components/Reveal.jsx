import { useReveal } from "../hooks";
import { revealStyle } from "../lib/motion";

// Wraps children in a fade + rise reveal that triggers on scroll into view.
export function Reveal({ children, delay = 0, as: Tag = "div", style, ...rest }) {
  const [ref, shown] = useReveal();
  return (
    <Tag ref={ref} style={{ ...revealStyle(shown, delay), ...style }} {...rest}>
      {children}
    </Tag>
  );
}
