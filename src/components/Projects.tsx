import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiStar, FiGitBranch, FiArrowUpRight, FiGithub } from "react-icons/fi";
import {
  Section,
  Eyebrow,
  SectionTitle,
  NeonButton,
  NeonButtonLink,
  Reveal,
  revealProps,
} from "./ui";
import { GithubRepo } from "../types/types";

const GITHUB_USER = "Al3ssandro-create";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: "AI Code Assistant",
    blurb:
      "Concept VS Code extension that detects data-structure & algorithm patterns and suggests annotated alternatives with time & space complexity.",
    tags: ["AI", "DevTools", "TypeScript"],
  },
  {
    title: "Distributed Computing for Cloud",
    blurb:
      "Large-scale graph analysis built with Apache Spark and MapReduce on Scala — partitioning, shuffles, and the lot.",
    tags: ["Spark", "Scala", "MapReduce"],
  },
  {
    title: "HPC / GPU Project",
    blurb:
      "CUDA kernels with shared-memory optimisation benchmarked over the Tartan suite and driven through grCUDA.",
    tags: ["CUDA", "HPC", "C++"],
  },
  {
    title: "BeCrew",
    blurb:
      "A sailing community platform connecting boat owners with crew — a side project born from time on the water.",
    tags: ["Web", "Side Project"],
  },
  {
    title: "Software Engineering Project",
    blurb:
      "A full client-server Java application built end to end under a formal software-engineering process.",
    tags: ["Java", "Client-Server"],
  },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  align-items: stretch;

  /* Animation wrappers must fill the row so cards stay equal height. */
  & > * {
    height: 100%;
  }
`;

const cardBase = `
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--panel-border);
  background: var(--panel);
  backdrop-filter: blur(8px);
  overflow: hidden;
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.3s ease;
`;

const Card = styled.div`
  ${cardBase}
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--cyan), var(--magenta));
    opacity: 0.6;
  }
  &:hover {
    transform: translateY(-5px);
    border-color: var(--cyan);
    box-shadow: 0 12px 40px -12px rgba(0, 240, 255, 0.4);
  }
`;

const Title = styled.div`
  font-family: var(--font-mono);
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text);
`;

const Blurb = styled.p`
  margin: 0.9rem 0 1.2rem;
  padding: 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-dim);
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  span {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    padding: 0.22rem 0.55rem;
    border-radius: 5px;
    border: 1px solid var(--panel-border);
    color: var(--magenta);
  }
`;

const RepoStrip = styled.div`
  margin-top: 4.5rem;
`;

const RepoHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.8rem;

  h3 {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 1.1rem;
    color: var(--text);
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
  }
  svg {
    color: var(--cyan);
  }
`;

const RepoCard = styled(motion.a)`
  ${cardBase}
  &:hover {
    transform: translateY(-4px);
    border-color: var(--cyan);
    box-shadow: 0 10px 32px -14px rgba(0, 240, 255, 0.4);
  }
`;

const RepoName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--text);
  word-break: break-word;

  svg {
    color: var(--cyan);
    flex-shrink: 0;
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-top: 1rem;
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--text-dim);

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0;
  }
  .lang {
    color: var(--magenta);
  }
`;

const ViewAll = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.6rem;
`;

function Projects({ featured = false }: { featured?: boolean }) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    if (featured) return;
    fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`
    )
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: GithubRepo[]) => {
        const cleaned = data
          .filter((r) => !r.fork)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              a.name.localeCompare(b.name)
          )
          .slice(0, 6);
        setRepos(cleaned);
      })
      .catch(() => undefined);
  }, [featured]);

  const shown = featured ? PROJECTS.slice(0, 3) : PROJECTS;

  return (
    <Section id="projects">
      <Reveal {...revealProps}>
        <Eyebrow>04 / projects</Eyebrow>
        <SectionTitle>
          Selected <span>work</span>
        </SectionTitle>
      </Reveal>

      <Grid>
        {shown.map((p, i) => (
          <Reveal
            key={p.title}
            {...revealProps}
            transition={{ ...revealProps.transition, delay: (i % 3) * 0.08 }}
          >
            <Card>
              <Title>{p.title}</Title>
              <Blurb>{p.blurb}</Blurb>
              <Tags>
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </Tags>
            </Card>
          </Reveal>
        ))}
      </Grid>

      {featured && (
        <ViewAll>
          <NeonButtonLink to="/projects" $variant="solid">
            view all projects <FiArrowUpRight />
          </NeonButtonLink>
        </ViewAll>
      )}

      {!featured && repos.length > 0 && (
        <RepoStrip>
          <Reveal {...revealProps}>
            <RepoHead>
              <h3>
                <FiGithub /> latest on github
              </h3>
              <NeonButton
                href={`https://github.com/${GITHUB_USER}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
              >
                all repos <FiArrowUpRight />
              </NeonButton>
            </RepoHead>
          </Reveal>
          <Grid>
            {repos.map((repo) => (
              <RepoCard
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                {...revealProps}
              >
                <RepoName>
                  {repo.name}
                  <FiArrowUpRight />
                </RepoName>
                <Blurb style={{ margin: "0.7rem 0 0" }}>
                  {repo.description || "No description provided."}
                </Blurb>
                <Meta>
                  {repo.language && <span className="lang">◆ {repo.language}</span>}
                  <span>
                    <FiStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FiGitBranch /> {repo.forks_count}
                  </span>
                </Meta>
              </RepoCard>
            ))}
          </Grid>
        </RepoStrip>
      )}
    </Section>
  );
}

export default Projects;
