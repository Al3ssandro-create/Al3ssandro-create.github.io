import styled from "styled-components";
import { Section, Eyebrow, SectionTitle, Reveal, revealProps } from "./ui";

type Edu = { school: string; degree: string; period: string };

const EDU: Edu[] = [
  {
    school: "Politecnico di Milano",
    degree: "M.Sc. Computer Science Engineering — HPC profile",
    period: "2022 — 2025",
  },
  {
    school: "University of Illinois Chicago",
    degree: "M.Sc. Computer Science",
    period: "2023 — 2025",
  },
  {
    school: "Politecnico di Milano",
    degree: "B.Sc. Computer Science Engineering",
    period: "2019 — 2022",
  },
];

const List = styled.div`
  display: grid;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.3rem 1.4rem;
  border-radius: 10px;
  border: 1px solid var(--panel-border);
  background: var(--panel);

  .school {
    font-weight: 600;
    color: var(--text);
    font-size: 1.05rem;
  }
  .degree {
    color: var(--text-dim);
    font-size: 0.92rem;
    margin-top: 0.3rem;
  }
  .period {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--cyan);
    white-space: nowrap;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    .period {
      order: -1;
    }
  }
`;

function Education() {
  return (
    <Section id="education">
      <Reveal {...revealProps}>
        <Eyebrow>05 / education</Eyebrow>
        <SectionTitle>
          Academic <span>track</span>
        </SectionTitle>
      </Reveal>

      <List>
        {EDU.map((e, i) => (
          <Reveal
            key={`${e.school}-${e.period}`}
            {...revealProps}
            transition={{ ...revealProps.transition, delay: i * 0.07 }}
          >
            <Row>
              <div>
                <div className="school">{e.school}</div>
                <div className="degree">{e.degree}</div>
              </div>
              <div className="period">{e.period}</div>
            </Row>
          </Reveal>
        ))}
      </List>
    </Section>
  );
}

export default Education;
