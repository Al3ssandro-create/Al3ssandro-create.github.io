import styled from "styled-components";
import { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiApachekafka,
  SiKubernetes,
  SiPython,
  SiCplusplus,
  SiNvidia,
  SiGnubash,
  SiLinux,
  SiGit,
  SiPostgresql,
  SiApachespark,
  SiScala,
  SiJulia,
  SiJira,
  SiDocker,
} from "react-icons/si";
import { Section, Eyebrow, SectionTitle, Reveal, revealProps } from "./ui";

type Skill = { name: string; Icon: IconType; color: string };

const SKILLS: Skill[] = [
  { name: "Java", Icon: FaJava, color: "#f89820" },
  { name: "Kafka", Icon: SiApachekafka, color: "#ffffff" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326ce5" },
  { name: "Docker", Icon: SiDocker, color: "#2496ed" },
  { name: "Python", Icon: SiPython, color: "#ffd43b" },
  { name: "C++", Icon: SiCplusplus, color: "#00599c" },
  { name: "CUDA / GPU", Icon: SiNvidia, color: "#76b900" },
  { name: "SQL", Icon: SiPostgresql, color: "#4169e1" },
  { name: "Apache Spark", Icon: SiApachespark, color: "#e25a1c" },
  { name: "Scala", Icon: SiScala, color: "#dc322f" },
  { name: "Julia", Icon: SiJulia, color: "#9558b2" },
  { name: "Bash", Icon: SiGnubash, color: "#4eaa25" },
  { name: "Linux", Icon: SiLinux, color: "#fcc624" },
  { name: "Git", Icon: SiGit, color: "#f05032" },
  { name: "Jira / SAFe", Icon: SiJira, color: "#0052cc" },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
  gap: 0.85rem;
  align-items: stretch;

  & > * {
    height: 100%;
  }
`;

const Chip = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 0.75rem;
  padding: 0.95rem 1.1rem;
  border-radius: 10px;
  border: 1px solid var(--panel-border);
  background: var(--panel);
  backdrop-filter: blur(6px);
  font-family: var(--font-mono);
  font-size: 0.92rem;
  color: var(--text);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.25s ease;

  svg {
    font-size: 1.5rem;
    color: ${({ $color }) => $color};
    filter: drop-shadow(0 0 6px ${({ $color }) => $color});
    flex-shrink: 0;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ $color }) => $color};
    box-shadow: 0 0 22px -4px ${({ $color }) => $color};
  }
`;

function Skills() {
  return (
    <Section id="skills">
      <Reveal {...revealProps}>
        <Eyebrow>03 / stack</Eyebrow>
        <SectionTitle>
          Tools of the <span>trade</span>
        </SectionTitle>
      </Reveal>

      <Grid>
        {SKILLS.map((s, i) => (
          <Reveal
            key={s.name}
            {...revealProps}
            transition={{ ...revealProps.transition, delay: (i % 6) * 0.05 }}
          >
            <Chip $color={s.color}>
              <s.Icon />
              {s.name}
            </Chip>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}

export default Skills;
