import { Routes, Route } from "react-router-dom";
import { C } from "./theme/tokens";
import { useMediaQuery } from "./hooks";
import { ScrollProgress } from "./components";
import { Nav } from "./sections";
import { HomePage, CVPage } from "./pages";

// Shared shell (progress bar + nav) wrapping the routed pages.
export default function App() {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  return (
    <div style={{ background: C.paper, color: C.ink, fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", WebkitFontSmoothing: "antialiased", minHeight: "100vh" }}>
      <ScrollProgress />
      <Nav isDesktop={isDesktop} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </main>
    </div>
  );
}
