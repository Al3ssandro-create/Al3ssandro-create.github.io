import styled from "styled-components";
import { Section, Eyebrow, SectionTitle, Reveal, revealProps } from "./ui";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Prose = styled.div`
  font-size: 1.08rem;
  line-height: 1.85;
  color: var(--text-dim);

  p {
    margin: 0 0 1.2rem;
    padding: 0;
  }
  b {
    color: var(--text);
    font-weight: 600;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.8rem;

  span {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    border: 1px solid var(--panel-border);
    color: var(--text);
    background: rgba(0, 240, 255, 0.04);
  }
`;

const Stats = styled.div`
  display: grid;
  gap: 1rem;
`;

const Stat = styled.div`
  border: 1px solid var(--panel-border);
  border-radius: 10px;
  padding: 1.3rem 1.4rem;
  background: var(--panel);
  backdrop-filter: blur(6px);

  .num {
    font-family: var(--font-display);
    font-size: 2.1rem;
    font-weight: 700;
    color: var(--cyan);
    text-shadow: 0 0 14px rgba(0, 240, 255, 0.5);
  }
  .label {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-top: 0.3rem;
  }
`;

function About() {
  return (
    <Section id="about">
      <Reveal {...revealProps}>
        <Eyebrow>01 / whoami</Eyebrow>
        <SectionTitle>
          About <span>me</span>
        </SectionTitle>
      </Reveal>

      <Grid>
        <Reveal {...revealProps}>
          <Prose>
            <p>
              I'm a <b>backend software engineer</b> with a double Master's in
              Computer Science and a year building <b>event-driven, Kafka-based
              systems</b> in travel tech at <b>Amadeus</b>. I'm comfortable owning
              services in production — from development through deployment and
              incident response.
            </p>
            <p>
              My background spans <b>HPC and GPU computing</b> — profiling and
              optimising code for real speedups — and I keep a growing focus on{" "}
              <b>system reliability</b>, AI, and technical leadership.
            </p>
            <p>
              I'm a strong collaborator across cultures and teams, and I like
              turning gnarly distributed problems into systems that just keep
              running.
            </p>
            <Tags>
              <span>🌍 IT (native)</span>
              <span>🇬🇧 EN (fluent)</span>
              <span>🇫🇷 FR (professional)</span>
              <span>⛵ sailing</span>
              <span>🚀 side projects</span>
            </Tags>
          </Prose>
        </Reveal>

        <Reveal {...revealProps} transition={{ ...revealProps.transition, delay: 0.15 }}>
          <Stats>
            <Stat>
              <div className="num">2×</div>
              <div className="label">M.Sc. Computer Science</div>
            </Stat>
            <Stat>
              <div className="num">10×</div>
              <div className="label">GPU speedup achieved</div>
            </Stat>
            <Stat>
              <div className="num">3</div>
              <div className="label">countries worked in</div>
            </Stat>
          </Stats>
        </Reveal>
      </Grid>
    </Section>
  );
}

export default About;
