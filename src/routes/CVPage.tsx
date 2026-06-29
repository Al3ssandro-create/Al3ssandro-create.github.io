import styled from "styled-components";
import { FiDownload, FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";
import { Section, NeonButton } from "../components/ui";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";

const CV_FILE = "CV_Alessandro_Martinolli.pdf";
const EMAIL = "alessandro.martinolli@live.com";

const Head = styled(Section)`
  padding-bottom: 2rem;
  padding-top: 8rem;

  @media (max-width: 600px) {
    padding-top: 6rem;
  }
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 7vw, 3.6rem);
  margin: 0;
  line-height: 1.05;
`;

const Role = styled.p`
  font-family: var(--font-mono);
  color: var(--cyan);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0.7rem 0 1.4rem;
  font-size: 0.9rem;
`;

const Contacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 1.6rem;
  margin-bottom: 2rem;

  a,
  span {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.86rem;
    color: var(--text-dim);
    transition: color 0.2s ease;
  }
  a:hover {
    color: var(--cyan);
  }
  svg {
    color: var(--cyan);
  }
`;

const Summary = styled.p`
  max-width: 720px;
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-dim);
`;

function CVPage() {
  return (
    <>
      <Head>
        <Title>Alessandro Martinolli</Title>
        <Role>Backend Software Engineer</Role>
        <Contacts>
          <a href={`mailto:${EMAIL}`}>
            <FiMail /> {EMAIL}
          </a>
          <a
            href="https://linkedin.com/in/alessandro-martinolli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin /> linkedin
          </a>
          <a
            href="https://github.com/Al3ssandro-create"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub /> github
          </a>
          <span>
            <FiMapPin /> France · open to relocation
          </span>
        </Contacts>
        <Summary>
          Backend software engineer with a double Master's in Computer Science and a
          year building event-driven, Kafka-based systems in travel tech at Amadeus.
          Comfortable owning services in production — from development through
          deployment and incident response — with a growing focus on AI, system
          reliability, and technical leadership.
        </Summary>
        <div style={{ marginTop: "2rem" }}>
          <NeonButton href={CV_FILE} download $variant="solid">
            <FiDownload /> download full CV (PDF)
          </NeonButton>
        </div>
      </Head>

      <Experience />
      <Skills />
      <Education />
    </>
  );
}

export default CVPage;
