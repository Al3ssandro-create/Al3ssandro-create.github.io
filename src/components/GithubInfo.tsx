import { useState, useEffect } from "react";
import { GithubUser } from "../types/types";
import { useTheme } from "next-themes";
function GithubInfo({ username }: { username: string }) {
  const [userData, setUserData] = useState<GithubUser | null>(null);
  const [displayedName, setDisplayedName] = useState("");
  const [displayedBio, setDisplayedBio] = useState("");
  const { theme } = useTheme();
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then(setUserData)
      .catch(console.error);
  }, [username]);

  useEffect(() => {
    if (userData) {
      const nameInterval = setInterval(() => {
        if (displayedName.length < userData.name.length) {
          setDisplayedName(userData.name.slice(0, displayedName.length + 1));
        } else {
          clearInterval(nameInterval);
          if (displayedBio.length < userData.bio.length) {
            setDisplayedBio(userData.bio.slice(0, displayedBio.length + 1));
          }
        }
      }, 20); // adjust speed as needed
      return () => {
        clearInterval(nameInterval);
        // clearInterval(bioInterval);
      };
    }
  }, [userData, displayedName, displayedBio]);
  const glowClass = theme === "dark" ? "glow" : "glow-light";
  if (!userData) return <div>Loading...</div>;
  return (
    <>
      <h1 className={glowClass}>{displayedName}</h1>
      <p className={glowClass}>{displayedBio}</p>
    </>
  );
}

export default GithubInfo;
