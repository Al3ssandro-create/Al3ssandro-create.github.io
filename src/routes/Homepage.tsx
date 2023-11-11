import { useEffect, useState } from "react";
import GitHubInfo from "../components/GithubInfo";
import GithubCard from "../components/GithubCard";
import Box from "../components/Box";
import Container from "../components/Container";
import "primeicons/primeicons.css";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { GithubRepo } from "../types/types";
import { useTheme } from "next-themes";
function Homepage() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const { theme } = useTheme();
  useEffect(() => {
    fetch("https://api.github.com/users/Al3ssandro-create/repos")
      .then((response) => response.json())
      .then(async (data) => {
        setRepos(data);
        const languagesPromises = data.map((repo: GithubRepo) => {
          return fetch(repo.languages_url).then((response) => response.json());
        });
        const languagesArrays = await Promise.all(languagesPromises);
        const allLanguages = languagesArrays.flatMap(Object.keys);
        setLanguages([...new Set(allLanguages)]);
      })
      .catch((error) => console.error("Error fetching repos", error));
  }, []);
  const glowClass = theme === "dark" ? "glow" : "glow-light";
  return (
    <>
      <div className="light:bg-black dark:bg-white ">
        <Box>
          <ThemeSwitcher />
          <GitHubInfo username="Al3ssandro-create" />
          <a
            href="#home"
            className={`pi pi-angle-double-down ${glowClass}`}
          ></a>
        </Box>
        <div id="home"></div>
        <Container>
          {repos.map((repo) => (
            <GithubCard
              key={repo.id}
              repo={repo}
              username="Al3ssandro-create"
            />
          ))}
        </Container>
        <div
          className={`languages-container ${glowClass}`}
        >
          {languages.map((language, index) => (
            <div key={index} style={{ margin: "10px" }} >
              {language}
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;
