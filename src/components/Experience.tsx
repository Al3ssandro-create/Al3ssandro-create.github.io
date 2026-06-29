import styled from "styled-components";
import { Section, Eyebrow, SectionTitle, Reveal, revealProps } from "./ui";

type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  stack: string[];
};

const JOBS: Job[] = [
  {
    role: "Software Engineer Consultant",
    company: "Amadeus (via Audensiel)",
    location: "France",
    period: "Jul 2025 — Present",
    points: [
      "Backend developer on large-scale, event-driven systems within the OFMS platform, building and maintaining Java microservices in production.",
      "Design and operate Kafka-based services — message processing, reconciliation flows, and inter-service communication at scale.",
      "Own production maintenance: monitoring, incident response, and deployment / pod handling across Kubernetes environments.",
      "Diagnosed and resolved a production event-loop thread-blocking incident in a core connector service and documented the root cause for the team.",
      "Mentored new joiners and contributed to the team's technical practices under a SAFe framework.",
    ],
    stack: ["Java", "Kafka", "Kubernetes", "JUnit 5", "JMH", "SAFe"],
  },
  {
    role: "Implementation Engineer",
    company: "OpenWay",
    location: "Remote",
    period: "Apr 2025 — Jul 2025",
    points: [
      "Configured and customised the Way4 platform for card-issuing projects: card management, transaction processing, and customer onboarding.",
      "Supported integrations with external systems and ensured alignment with Visa/Mastercard standards.",
    ],
    stack: ["Java", "SQL", "Bash"],
  },
  {
    role: "Software Developer (Internship)",
    company: "ESTECO",
    location: "Trieste, Italy",
    period: "May 2024 — Apr 2025",
    points: [
      "Built a library for energy and runtime profiling in Julia, applied to large sparse linear systems.",
      "Optimised the company's code for speedups of up to 3× on CPU and 10× on GPU.",
    ],
    stack: ["Julia", "C++", "CUDA", "NVIDIA Nsight", "Python"],
  },
  {
    role: "Research Assistant",
    company: "University of Illinois Chicago",
    location: "USA",
    period: "Nov 2023 — May 2024",
    points: [
      "Studied NVIDIA GPU architecture and energy-optimisation techniques; implemented predictive models to cut energy consumption on heterogeneous systems.",
      "Used profilers and OpenMPI to analyse and tune performance across CPU/GPU workloads.",
    ],
    stack: ["Python", "C++", "CUDA", "OpenMPI", "Linux"],
  },
];

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: linear-gradient(var(--cyan), var(--magenta), transparent);
  }
`;

const Item = styled.div`
  position: relative;
  padding-bottom: 4.5rem;

  &::before {
    content: "";
    position: absolute;
    left: -1.85rem;
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--void);
    border: 2px solid var(--cyan);
    box-shadow: 0 0 12px var(--cyan);
  }
  &:last-child {
    padding-bottom: 0;
  }
`;

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.4rem;

  h3 {
    margin: 0;
    font-size: 1.18rem;
    font-weight: 600;
    line-height: 1.4;
    color: var(--text);
  }
  .company {
    color: var(--cyan);
  }
  .period {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-dim);
    letter-spacing: 0.04em;
  }
`;

const Points = styled.ul`
  margin: 1.1rem 0 1.3rem;
  padding-left: 1.2rem;

  li {
    color: var(--text-dim);
    line-height: 1.85;
    margin-bottom: 0.8rem;
    font-size: 0.96rem;
    padding-left: 0.3rem;
  }
  li::marker {
    color: var(--magenta);
  }
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;

  span {
    font-family: var(--font-mono);
    font-size: 0.74rem;
    padding: 0.25rem 0.6rem;
    border-radius: 5px;
    border: 1px solid var(--panel-border);
    color: var(--text-dim);
  }
`;

function Experience() {
  return (
    <Section id="experience">
      <Reveal {...revealProps}>
        <Eyebrow>02 / career</Eyebrow>
        <SectionTitle>
          Where I've <span>shipped</span>
        </SectionTitle>
      </Reveal>

      <Timeline>
        {JOBS.map((job, i) => (
          <Reveal
            key={job.company}
            {...revealProps}
            transition={{ ...revealProps.transition, delay: Math.min(i, 3) * 0.08 }}
          >
            <Item>
              <Head>
                <h3>
                  {job.role} <span className="company">@ {job.company}</span>
                </h3>
                <span className="period">{job.period}</span>
              </Head>
              <Points>
                {job.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </Points>
              <Stack>
                {job.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </Stack>
            </Item>
          </Reveal>
        ))}
      </Timeline>
    </Section>
  );
}

export default Experience;
