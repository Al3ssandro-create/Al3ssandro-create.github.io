import { useMediaQuery } from "../hooks";
import { Hero, WebWork, CodeWork, Experience, Skills, Contact } from "../sections";

// The landing page: hero, work, engineering, experience, skills, contact.
export function HomePage() {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  return (
    <>
      <Hero isDesktop={isDesktop} />
      <WebWork isDesktop={isDesktop} />
      <CodeWork isDesktop={isDesktop} />
      <Experience isDesktop={isDesktop} />
      <Skills isDesktop={isDesktop} />
      <Contact isDesktop={isDesktop} />
    </>
  );
}
