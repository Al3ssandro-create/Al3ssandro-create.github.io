import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiGithub, FiArrowDownRight, FiMail } from "react-icons/fi";
import { NeonButton } from "./ui";
import { GithubUser } from "../types/types";

const GITHUB_USER = "Al3ssandro-create";
const EMAIL = "alessandro.martinolli@live.com";

const Wrap = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 980px;
  margin: 0 auto;
  padding: 7rem 1.75rem 4rem;

  @media (max-width: 700px) {
    padding: 6rem 1.25rem 3rem;
    min-height: 88vh;
  }
`;

const Status = styled(motion.div)`
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  color: var(--lime);
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.6rem;

  &::before {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--lime);
    box-shadow: 0 0 10px var(--lime);
  }
`;

const Name = styled(motion.h1)`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.4rem, 7.5vw, 4.8rem);
  line-height: 1;
  margin: 0;
  letter-spacing: -0.02em;
  color: var(--text);
  text-shadow: 0 0 22px rgba(0, 240, 255, 0.25);

  span {
    color: var(--cyan);
  }
`;

const Role = styled.div`
  font-family: var(--font-mono);
  font-size: clamp(1rem, 2.6vw, 1.4rem);
  color: var(--text-dim);
  margin-top: 1.1rem;
  min-height: 1.6em;

  .prefix {
    color: var(--cyan);
  }
  .caret {
    color: var(--magenta);
    animation: blink 1s steps(1) infinite;
  }
`;

const Bio = styled(motion.p)`
  max-width: 540px;
  margin: 1.8rem 0 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-dim);
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;
`;

const ROLES = [
  "backend software engineer",
  "event-driven systems @ Amadeus",
  "Kafka · Kubernetes · Java",
  "HPC & GPU tinkerer",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const done = !del && text === current;
    const empty = del && text === "";
    const delay = done ? 1400 : empty ? 250 : del ? 45 : 80;

    const t = setTimeout(() => {
      if (done) setDel(true);
      else if (empty) {
        setDel(false);
        setI((p) => p + 1);
      } else {
        setText(current.slice(0, text.length + (del ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

function Hero() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const role = useTypewriter(ROLES);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}`)
      .then((r) => r.json())
      .then((d) => setUser({ name: d.name, bio: d.bio }))
      .catch(() => undefined);
  }, []);

  const name = user?.name || "Alessandro Martinolli";
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");
  const bio =
    user?.bio ||
    "Backend engineer building event-driven, Kafka-based systems in travel tech at Amadeus. Double Master's in CS, a soft spot for HPC, and a habit of owning services from first commit to production incident.";

  return (
    <Wrap id="top">
      <Status
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        available for new missions
      </Status>

      <Name
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {firstName}
        {lastName && (
          <>
            {" "}
            <span>{lastName}</span>
          </>
        )}
      </Name>

      <Role>
        <span className="prefix">&gt;</span> {role}
        <span className="caret">▍</span>
      </Role>

      <Bio
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {bio}
      </Bio>

      <Actions
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
      >
        <NeonButton href="#projects" $variant="solid">
          view work <FiArrowDownRight />
        </NeonButton>
        <NeonButton
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub /> github
        </NeonButton>
        <NeonButton href={`mailto:${EMAIL}`}>
          <FiMail /> contact
        </NeonButton>
      </Actions>
    </Wrap>
  );
}

export default Hero;
