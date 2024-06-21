import { useEffect, useState } from "react";
import GitHubInfo from "../components/GithubInfo";
import GithubCard from "../components/GithubCard";
import Box from "../components/Box";
import Container from "../components/Container";
import MyNavBar from "../components/MyNavBar";
import "primeicons/primeicons.css";
import { GithubRepo } from "../types/types";
import { useTheme } from "next-themes";
import { Link as ScrollLink } from 'react-scroll';
function Homepage() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const { theme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState<number | null>(null);
  const [repoLanguages, setRepoLanguages] = useState<Record<string, string[]>>({});
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
        const repoLanguages = data.reduce((acc, repo, index) => {
          acc[repo.name] = Object.keys(languagesArrays[index]);
          return acc;
        }, {} as { [key: string]: string[] });
        setRepoLanguages(repoLanguages);
      })
      .catch((error) => console.error("Error fetching repos", error));
  }, []);
  const glowClass = theme === "dark" ? "glow" : "glow-light";
  return (
    <>
      <MyNavBar/>
      <div className="light:bg-black dark:bg-white ">
        <Box>
          <GitHubInfo username="Al3ssandro-create" />
          <ScrollLink
            to="home"
            className={`pi pi-angle-double-down ${glowClass}`}
          ></ScrollLink>
        </Box>
        <div id="home"></div>
        <Container>
        {repos.filter(repo => !selectedLanguage || (repoLanguages[repo.name] && repoLanguages[repo.name].includes(selectedLanguage))).map((repo) => (
            <GithubCard
              key={repo.id}
              repo={repo}
              username="Al3ssandro-create"
            />
          ))}
        </Container>
        <div
          className={`languages-container`}
        >
          {languages.map((language, index) => (
            <div 
            key={index} 
            style={{ margin: "10px", cursor: "pointer" }} 
            className={index !== selectedLanguageIndex ? glowClass : ''} 
            onClick={() => {
              setSelectedLanguage(prev => prev === language ? '' : language);
              setSelectedLanguageIndex(prev => prev === index ? null : index); //fix this
              }}
              >
              {language}
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;
