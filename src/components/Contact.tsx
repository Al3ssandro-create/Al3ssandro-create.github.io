import styled from "styled-components";
import { FiGithub, FiMail, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import { Section, Eyebrow, SectionTitle, NeonButton, Reveal, revealProps } from "./ui";

const GITHUB_USER = "Al3ssandro-create";
const EMAIL = "alessandro.martinolli@live.com";
const LINKEDIN = "https://linkedin.com/in/alessandro-martinolli";

const Panel = styled.div`
  border: 1px solid var(--panel-border);
  border-radius: 16px;
  background: var(--panel);
  backdrop-filter: blur(10px);
  padding: clamp(2rem, 6vw, 3.5rem);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, rgba(255, 43, 214, 0.08), transparent 60%);
    pointer-events: none;
  }
`;

const Lead = styled.p`
  max-width: 460px;
  margin: 1.2rem auto 2.2rem;
  color: var(--text-dim);
  font-size: 1.05rem;
  line-height: 1.7;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

function Contact() {
  return (
    <Section id="contact">
        <Reveal {...revealProps}>
          <Panel>
            <Eyebrow>06 / contact</Eyebrow>
            <SectionTitle style={{ marginBottom: 0 }}>
              Let's <span>connect</span>
            </SectionTitle>
            <Lead>
              Open to backend, distributed-systems, and HPC roles — and happy to talk
              through an interesting problem. The fastest way to reach me is email.
            </Lead>
            <Actions>
              <NeonButton href={`mailto:${EMAIL}`} $variant="solid">
                <FiMail /> email me
              </NeonButton>
              <NeonButton href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <FiLinkedin /> linkedin
              </NeonButton>
              <NeonButton
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub /> github <FiArrowUpRight />
              </NeonButton>
            </Actions>
          </Panel>
        </Reveal>
    </Section>
  );
}

export default Contact;
